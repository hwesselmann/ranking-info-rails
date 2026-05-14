# ranking-info  

[![test and sca](https://github.com/hwesselmann/ranking-info/actions/workflows/test.yaml/badge.svg)](https://github.com/hwesselmann/ranking-info/actions/workflows/test.yaml)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=hwesselmann_ranking-info&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=hwesselmann_ranking-info)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=hwesselmann_ranking-info&metric=coverage)](https://sonarcloud.io/summary/new_code?id=hwesselmann_ranking-info)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=hwesselmann_ranking-info&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=hwesselmann_ranking-info)

This is a small web-application aiming at providing accessible information on the German national tennis youth rankings.

## Prerequisites  

This application is developed using

* Ruby 4.0.4
* Rails 8.1.3
* Node.js 24 (for asset compilation)
* Tailwind CSS v4 (for styling, via yarn)
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

### Bruno Collection

A [Bruno](https://www.usebruno.com/) collection for manual API testing is located in the `bruno/` directory. Open the folder in Bruno, select the **local** environment, and set your `apiToken`. All three endpoints are pre-configured; optional query parameters are included but disabled and can be toggled per request.

### Available Endpoints

#### Listings

```
GET /api/v1/listings/:quarter/:age_group_slug
```

Returns a paginated ranking list for a given quarter and age group. Each entry includes a HAL-style `links.self` pointing to the player detail endpoint. See `/api-docs` for all query parameters (federation, club, pagination, etc.).

#### Players

```
GET /api/v1/players?lastname=Mustermann&yob=2008
```

Searches for players by lastname (case-insensitive, partial match). The optional `yob` parameter (year of birth, YYYY) narrows results to players born in that year. Returns 400 if `lastname` is missing, 404 if no match is found.

```
GET /api/v1/players/:dtb_id
```

Returns basic player data and the full quarterly ranking history across all age groups. Returns 404 if the DTB ID is unknown.

## Import file format  

To import data into the system, create a CSV file from the official ranking list PDF using a tool like Tabula. The file must be in the format:

> ranking-position, lastname, firstname, nationality, dtb_id, federation, club, score

This is the default column order Tabula produces. An example file can be found in `test/fixtures/files`.

## Scheduled filesystem import

The application automatically scans an import folder for new CSV ranking files and imports them on a configurable schedule. The Solid Queue supervisor must be running for scheduled jobs to execute:

```bash
bin/jobs
```

**Import folder**

Place ranking CSV files in the import folder. Files already recorded in the import history are skipped automatically. Files are never deleted after import.

If an import fails, the error is appended to `error.log` in the import folder. Subsequent errors are separated from previous ones by a blank line.

**Configuration**

| Variable | Description | Default |
|---|---|---|
| `IMPORT_FOLDER` | Absolute path to the folder containing ranking CSV files | `storage/import/` inside the application root |
| `IMPORT_SCHEDULE` | Cron expression for how often the folder is scanned | `0 12 * * *` (daily at 12:00) |

Example with custom settings:

```bash
IMPORT_FOLDER=/data/rankings IMPORT_SCHEDULE="0 6 * * *" bin/jobs
```

## Deploy  

### Docker

The project includes a Dockerfile and a docker-compose configuration for a production environment. Adapt `docker-compose.yml` to your needs, build the image, then start the stack:

```bash
DATABASE_PASSWORD=your_password docker-compose up
```

After the stack is running, run database migrations:

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


[![SonarQube Cloud](https://sonarcloud.io/images/project_badges/sonarcloud-light.svg)](https://sonarcloud.io/summary/new_code?id=hwesselmann_ranking-info)