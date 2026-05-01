FROM ruby:4.0.3-alpine AS build

LABEL maintainer="Hauke Wesselmann <hauke@h-dawg.de>"

WORKDIR /app

RUN apk add --no-cache \
      build-base \
      curl \
      git \
      libpq-dev \
      tzdata \
      yaml-dev \
      nodejs \
      npm && \
    npm install -g yarn sass esbuild && \
    adduser -D -h /home/ruby -s /bin/sh ruby && \
    chown ruby:ruby /app

USER ruby

COPY --chown=ruby:ruby Gemfile Gemfile.lock ./

RUN bundle config set --local frozen true && \
    bundle config set --local without "development test" && \
    bundle install --jobs 4 --retry 3

COPY --chown=ruby:ruby package.json yarn.lock ./

RUN mkdir -p app/assets && yarn install --frozen-lockfile

ARG RAILS_ENV=production
ARG NODE_ENV=production
ENV RAILS_ENV=${RAILS_ENV} \
    NODE_ENV=${NODE_ENV} \
    PATH="/app/node_modules/.bin:${PATH}"

COPY --chown=ruby:ruby . .

RUN if [ "${RAILS_ENV}" != "development" ]; then \
      SECRET_KEY_BASE=dummy bundle exec rails assets:precompile; \
    fi

###############################################################################

FROM ruby:4.0.3-alpine AS production

LABEL maintainer="Hauke Wesselmann <hauke@h-dawg.de>"

WORKDIR /app

RUN apk add --no-cache \
      libpq \
      tzdata \
      yaml && \
    adduser -D -h /home/ruby -s /bin/sh ruby && \
    chown ruby:ruby /app

ARG RAILS_ENV=production
ENV RAILS_ENV=${RAILS_ENV} \
    BUNDLE_WITHOUT="development:test" \
    PATH="/home/ruby/.local/bin:${PATH}" \
    USER=ruby

COPY --chown=ruby:ruby --from=build /usr/local/bundle /usr/local/bundle
COPY --chown=ruby:ruby . .
COPY --chown=ruby:ruby --from=build /app/public /app/public

RUN mkdir -p public/uploads tmp/pids log && \
    chmod 0755 bin/* && \
    chmod +x entrypoint.sh

USER ruby

EXPOSE 3000

ENTRYPOINT ["/app/entrypoint.sh"]
