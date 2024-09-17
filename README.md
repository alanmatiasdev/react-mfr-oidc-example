# demo app

This project contains a parcel (single-spa component) and two microfrontends for testing purposes.

The parcel is imported into the microfrontends as a component (Header).

Using docker compose run the command to start the docker container along with the initial configuration:

```bash
docker compose up -d
```

To run the application, simply install the project dependencies with yarn. Then start the applications with the start command:

```bash
yarn install && yarn start
```

> Ensure the following ports are free: 9000, 5173, 5174, 5175

After that, navigate to http://localhost:9000.
