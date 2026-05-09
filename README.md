# ranking-info  

[![test and sca](https://github.com/hwesselmann/ranking-info/actions/workflows/test.yaml/badge.svg)](https://github.com/hwesselmann/ranking-info/actions/workflows/test.yaml)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=hwesselmann_ranking-info&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=hwesselmann_ranking-info)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=hwesselmann_ranking-info&metric=coverage)](https://sonarcloud.io/summary/new_code?id=hwesselmann_ranking-info)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=hwesselmann_ranking-info&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=hwesselmann_ranking-info)
[![SonarQube Cloud](https://sonarcloud.io/images/project_badges/sonarcloud-light.svg)](https://sonarcloud.io/summary/new_code?id=hwesselmann_ranking-info)

This is a small web-application aiming at providing accessible information on the German national tennis youth rankings.

## Prerequisites  

This application is developed using

* Ruby 4.0.3
* Rails 8.1.3
* Node.js 24 (for asset compilation)
* SQLite3 (for development and test)
* PostgreSQL (for production)
* Bundler (Ruby gem management)
* Yarn (JavaScript package management)

## Setup  

To set up a development environment, run the following steps before starting the server:

```bash
# Install Ruby gems
bundle install

# Install JavaScript packages (also copies FontAwesome webfonts)
yarn install

# Run database migrations
bin/rails db:migrate

# Build JavaScript and CSS assets
yarn build
yarn build:css
```

Then start the development server:

```bash
bin/rails server
```

To automatically rebuild assets on changes, run the following in separate terminals alongside the server:

```bash
yarn build --watch
yarn build:css --watch
```

## Tests

To run the test suite:

```bash
bin/rails test
```

The project also includes Guard for running tests automatically on code changes. Start it from the project folder with:

```bash
guard
```

## API Documentation (Swagger UI)

The application exposes a REST API documented with Swagger UI, available at `/api-docs` when the server is running (e.g. `http://localhost:3000/api-docs`).

All API endpoints require Bearer token authentication. Requests without a valid token receive a `401 Unauthorized` response.

### Configuring Bearer Tokens

Tokens can be provided in two ways:

**Via environment variable** (single token, suitable for development or simple deployments):

```bash
API_BEARER_TOKEN=your_secret_token bin/rails server
```

**Via Rails credentials** (array of tokens, suitable for production):

```bash
bin/rails credentials:edit
```

Add the following structure:

```yaml
api:
  tokens:
    - your_first_token
    - your_second_token
```

### Using Bearer Tokens in Swagger UI

1. Open `/api-docs` in your browser.
2. Click the **Authorize** button (lock icon) at the top right of the page.
3. Enter your token in the **Value** field using the format `Bearer your_secret_token`.
4. Click **Authorize**, then **Close**.

Subsequent requests made through the Swagger UI will include the token automatically.

## Import file format  

To import data into the system, create a CSV file from the official ranking list PDF using a tool like Tabula. The file must be in the format:

> ranking-position, lastname, firstname, nationality, dtb_id, federation, club, score

This is the default column order Tabula produces. An example file can be found in `test/fixtures/files`.

## Importing data / login credentials  

Access to the CSV upload functionality is restricted to registered users. To create an admin user:

1. Ensure the database is up to date: `bin/rails db:migrate`
2. Open a Rails console: `bin/rails console`
3. Create a user:
   ```ruby
   User.create(name: 'Example User', email: 'user@example.com', password: 'password', password_confirmation: 'password')
   ```

The password must be at least 6 characters.

## Deploy  

### Docker

The project includes a Dockerfile and a docker-compose configuration for a production environment. Adapt `docker-compose.yml` to your needs, build the image, then start the stack:

```bash
DATABASE_PASSWORD=your_password docker-compose up
```

After the stack is running, run database migrations and create an admin user (see above).

The application is then available at `http://127.0.0.1:3000`.

### Standalone

Set the following environment variables to populate the imprint on the about page (or hardcode them in `config/config.yml`):

| Variable | Description |
|---|---|
| `DOMAIN` | Domain the application is deployed to |
| `IMPRINT_NAME` | Name for the imprint |
| `IMPRINT_STREET` | Street and street number for the imprint |
| `IMPRINT_ZIPCODE` | Zip code for the imprint |
| `IMPRINT_CITY` | City for the imprint |
| `IMPRINT_PHONE` | Phone number for the imprint |
| `IMPRINT_MAIL` | Email address for the imprint |
