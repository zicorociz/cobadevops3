# E-Commerce Website

A modern and responsive E-commerce web application that allows users to browse, filter, and purchase products online. The website is designed to showcase a variety of product categories including electronics, jewelry, and clothing.

## Overview
This document describes the CI/CD (Continuous Integration & Continuous Deployment) pipeline setup for the E-Commerce Website project. The pipeline automates the steps from code commit to production deployment, ensuring faster and more reliable delivery.

## Tech Stack

* [React.js](https://reactjs.org)
* [Jest](https://jestjs.io/)
* [SonarCloud](https://sonarcloud.io/)
* [Github Action](https://github.com/features/actions)
* [Docker](https://www.docker.com/)
* [DockerHub](https://hub.docker.com/)
* [VPS](https://www.niagahoster.co.id/)

## CI/CD Pipeline
GitHub Actions automates testing, building, and deployment.
### Staging Branch (staging)
1. Run Jest tests
2. Run ESLint
3. Analyze code quality via SonarCloud
4. Build & push Docker image (my-app:staging)

### Production Branch (main)
1. Build & push Docker image (my-app:production)
2. SSH into server and deploy via Docker:
```
docker pull
docker stop && remove old container
docker run -d -p 8090:8090
```
