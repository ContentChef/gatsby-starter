<div align="center">
  <img src="src/images/contentchef_logo.svg" height="64"/>
</div>

GatsbyJs Starter for [ContentChef - Headless CMS](https://www.contentchef.io/)
===========================

[ContentChef](https://www.contentchef.io/) is an Headless CMS designed to accelerate the development of modern,cross channel digital products.

This starter is a simple [Gatsby.Js](https://www.gatsbyjs.org/) integrated with our Delivery API using the [ContentChef JS/Typescript SDK](https://github.com/ContentChef/contentchef-node)

In this example plain JS is used, but our SDK is primarily written for **Typescript** applications!

# Requirements

In order to use make this starter work, you will need

* An active ContentChef account (sign up for a 30-day free trial [here](https://www.contentchef.io/registration))
* Node JS >= 10.13

# Clone & Installation

Clone the starter repo and install all the deps

```bash
    git clone https://github.com/ContentChef/gatsby-starter.git
    cd gatsby-starter
    npm install
```

Get your SpaceID, Online API Key from your dashboard home page.

![ContentChef Dashboard - Home](https://res.cloudinary.com/contentchef/image/upload/v1/chefsite-2910/I49Zi00Uf7S/spaceid)

Open `./gatbsy-config.js` and copy your data in the client configuration and use "example-ch" for your channel now.
 
``` typescript

   {
      resolve: `gatsby-source-contentchef`,
      options: {
        apiKey: '<your api key>',
        spaceId: '<your spaceId>',
        channel: '<your channel>',       
      }
    }

```

You are now ready to start the gatsby server

``` bash

    npm run develop

```

Enjoy!

You can now visit [https://localhost:8000/](https://localhost:8000/) and see the list of content fetched from Content Chef!

To Learns More
===========================

* [ContentChef Website](https://wwww.contentchef.io)
* [ContentChef Docs](https://docs.contentchef.io)
* [ContentChef Blog](https://www.contentchef.io/blog)
* [Gatsby.js Documentation](https://www.gatsbyjs.org/docs/) - learn about Gatsby.js features and API.
* [Learn Gatsby.js](https://www.gatsbyjs.org/tutorial/) - a Gatsby.js tutorial.
