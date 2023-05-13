# Github Package

This package will work as a mask between @octokit/core and our services by exposing only the services as we need them in the main application.

#### Summary of set up

    npm install

#### Dependencies

- node: 18.x
- npm:   9.6.2
- turbo: latest

## Run the Project

### Envs

If you want to run this project in development mode you must do the following:
  - Copy the `.env.example` file that exists in the root project as paste it here as `.env`.
  - Then you must update the environment variables according your requirements.

### Running Local
To run this project in local mode you must complete the previous steps first and then you can run the following command:

```sh
    npm run start:dev
```

### Running Tests
Tests can be run in three ways as we describe here:

#### Tests

```sh
    npm run test
```

#### Test Coverage

```sh
    npm run test:cov
```

#### Test Watch Mode

```sh
    npm run test:watch
```

