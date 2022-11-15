# Ticketing - A demo microservices project

A mini project to simulate a ticketing system using microservices for learning purposes

## Architecture

![Alt text](https://user-images.githubusercontent.com/23608297/201879392-578a3986-b50c-4896-baab-6c6afa91876e.png "Design System")

## Features

![Alt text](https://user-images.githubusercontent.com/23608297/201879424-5189ea12-7d12-448a-b2a2-ced641955be4.png "Features")

## Installation

### Prerequisites

- [Docker](https://docs.docker.com/desktop/install/mac-install/) - Install Docker Desktop
- [Kubernetes](https://kubernetes.io/docs/tasks/tools/) - Install Kubernetes command-line tool
- [Skaffold](https://skaffold.dev/docs/quickstart/) - Install Install Skaffold tool
- [Stripe](https://stripe.com/docs/keys/) - Generate a Stripe API key

Clone the project

```bash
  git clone https://github.com/hanknguyen14/ticketing
```

Go to the project directory

```bash
  cd ticketing
```

Create Kubernetes Secrets

```bash
  kubectl create secret generic jwt-secret --from-literal JWT_KEY=<your_key>
  kubectl create secret generic stripe-secret --from-literal STRIPE_KEY=<your_stripe_key>
```

Install Ingress-nginx

- [Ingress-nginx](https://kubernetes.github.io/ingress-nginx/deploy/#quick-start) - Install the NGINX ingress controller

Run start application

```bash
  skaffold dev
```

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Feedback

If you have any feedback, please reach out to me at hungnguyen.dhg@gmail.com
