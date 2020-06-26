# Express + Liquid Project Template

## Node.js and Express server
The site runs in a Node.js application running an Express server.

In order to start the server for development we need to install the node dependencies with `npm install` and then start the server in development mode: `npm run start:dev`. This will start the server with `nodemon` monitoring our changes.

### The site structure explained
The main script and entrypoint of the server is `server.js`. This script configures the express server to use `Liquid` templates, some sample routes and starts the server on a port defined by the environment variable `PORT`.

`.env` file provides the environment variables needed to start the server. This file has the variables for DEV enviroment, on production we should set the same variables on the enviroment with the correct values for produciton in them.

In the directory `routes` we have the modules for each navigation we're going to do. These modules export an instance of Express Router for an especific URL. These routers will receive a request, process it and use liquid templates to respond to the client.

## The views
For the html returned by the express server, we're using `Liquid`. There we can find [the tags supported](https://liquidjs.com/tags/overview.html) in Liquid templating system.

The liquid template live in the directory `views` and the partials that we can use to compose an html response with different templates are in `views/partials`.

## Using Express and Liquid together
In order to use one of the templates from express, we only need to render the template, with the variables that we need to use in it, from the response on the routers, i.e. this fragment of the route for `link-1`:
```javascript
router.get('/', (req, res) => {
  res.render('index.liquid', {
    page: 'link-1'
  });
});
```
When we navigate to the route this routers is handling, we are picking `index.liquid` as a template and we're passing the variable `page` with value `link-1`.

`index.liquid` then uses the variable `page` to decide what partial will load in the main part of the site.
