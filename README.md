# CAPS

## Problem Domain

A real-time service that allows for vendors,to alert a system of a package needing to be delivered, for drivers to instantly see what’s in their pickup queue, and then to alert the vendors as to the state of the deliveries (in transit, and then delivered).

Goal is to increase the visibility on the state of packages in the delivery process.

## Business Requirements

We have 2 major clients for this service: Vendors and Drivers. Each need to have full and live visibility into the state of a package as it’s being delivered to a customer.

Ideally, these notifications should be visible in real time on any device (screen, app, browser, etc).

**Vendor (store owner) perspective**
As products are sold that need to be delivered, we need to alert the drivers that a package is ready for pickup/delivery.

As a driver picks up a package, the store owner should know that the package is now “in transit”.

Once the driver delivers a package, the store owner should know that the package has been delivered.

**Driver’s perspective**
As stores sell product and need a package delivered, Drivers need an instant notification to pick the package up.

Drivers need a way to scan a package and alert the vendors that the package is in transit.

Drivers need a way to scan a package and alert the vendors that the package has been delivered.

**Company perspective**
We don’t want our clients having to refresh their browser to get the latest status updates.

We also are aware that they will not always have their browser open …
So, if they leave & come back, it’s imperative that they can the state of things since they last logged in.

### Authors: Teresa Phillips

- tests report

#### Technical Requirements

    **.env** requirement
    - PORT - 3001
    Node.js
    Socket.io for realtime event management
    ES6 Classes and best practices
    ExpressJS Web Server
    For simulating pickup requests
    For simulating delivery scans
    In-Memory messaging queue
    Test Driven Development, using Jest
    Tests will be runnable locally
    Tests will auto-execute (CI) in your repo using GitHub actions
    Tests will use a 3rd party library called supergoose to:
    “mock” the mongo running database
    “mock” the running Express server
    Deployment to Heroku

#### Tests

    - Unit Tests: npm run test
    - Lint Tests: npm run lint

#### UML

![UML](https://www.figma.com/file/iPrHyigOyH4YzDBuvina4x/Event-Driven-Application?node-id=0%3A1&t=kG0ypY2S4vC9poY8-1)

## Links

- Latest PR on GitHub:
- Render link:
