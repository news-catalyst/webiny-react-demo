This is a demo app that's built using React, with data from graphql via Apollo, all on top of Webiny. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Expectations

You must have a working webiny setup, including the admin, before starting this app. Follow the tutorial at [https://docs.webiny.com/docs/get-started/quick-start](https://docs.webiny.com/docs/get-started/quick-start).

You should also have the following content group: Articles. Within the `Articles` content group you'll need an `Author` and an `Article` model. The `Article` model should have a `byline` field that references the `Author` `fullName`. The `Article` also expects to have a `headline` and a `body` field. These content models are used in the graphql query that retrieves data on the index page; see `src/graphql/queries.js` for reference. 

I'm trying to stand up an installation of `Webiny` in one place that we can all then use; it's a bit complicated though and I don't really know what I'm doing (yet🤞).

## Development

To start, run:

```
yarn start
```

It seems like the graphql api expects this to run on localhost:3000 - I accidentally ran it on another port and had CORS problems trying to retrieve data. Just FYI.