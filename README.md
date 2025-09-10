# Quickstart: React With FusionAuth

This repository contains an React app that works with a locally running instance of [FusionAuth](https://fusionauth.io), the authentication and authorization platform. There is an [tutorial](https://fusionauth.io/docs/quickstarts/quickstart-javascript-react-web) accompanying this code.

## Setup

### Prerequisites

[Docker](https://www.docker.com) is all you need to run FusionAuth and the React app.

### FusionAuth Installation With Docker

In the `fusionauth` directory of this repository are two files [a Docker compose file](./docker-compose.yml) and an [environment variables configuration file](./.env).

▶️ Open a terminal in this directory and start FusionAuth with:

```
docker compose up
```

The FusionAuth configuration files also use a feature of FusionAuth called [Kickstart](https://fusionauth.io/docs/v1/tech/installation-guide/kickstart). When FusionAuth starts for the first time, it will look at the [Kickstart file](./fusionauth/kickstart/kickstart.json) and mimic API calls to configure FusionAuth so it is ready to talk to the React app on port 3000.

> **NOTE**: If you ever want to reset the FusionAuth system, delete the volumes created by docker compose by executing `docker compose down -v`.

FusionAuth will be initially configured with these settings:

- Your client Id is: `e9fdb985-9173-4e01-9d73-ac2d60d1dc8e`
- Your client secret is: `super-secret-secret-that-should-be-regenerated-for-production`
- Your example username is `richard@example.com` and your password is `password`.
- Your admin username is `admin@example.com` and your password is `password`.
- Your fusionAuthBaseUrl is [`http://localhost:9011/`](http://localhost:9011)

You can log into the [FusionAuth admin UI](http://localhost:9011/admin) and look around if you want, but with Docker/Kickstart you don't need to.

### React complete-application

The `04_callTheServer` directory contains a minimal React app configured to authenticate with locally running FusionAuth.

▶️ Install dependencies and run the React app with:

```
cd 04_callTheServer
npm install
npx parcel index.html --host 0.0.0.0 --port 3000
```

▶️ Now vist the React app at [http://localhost:3000](http://localhost:3000)
You can log in with a user preconfigured during Kickstart, `richard@example.com` with the password of `password`.

### Further Information

Visit https://fusionauth.io/docs/quickstarts/quickstart-javascript-react-web for a step by step guide on how to build this React app integrated with FusionAuth from scratch.

### Troubleshooting

- I get `This site can’t be reached  localhost refused to connect.` when I click the Login button

Ensure FusionAuth is running in the Docker container. You should be able to login as the admin user, `admin@example.com` with the password of `password` at http://localhost:9011/admin

### Maintaining this repo

> Please note that code snippets from this repository are dynamically included in the [tutorial](https://fusionauth.io/docs/quickstarts/quickstart-javascript-react-web) on the FusionAuth site. Please consider this when making changes here so that you don't break the tutorial.
