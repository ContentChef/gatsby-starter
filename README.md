# Installation

* clone repo and install dependencies
```zsh
git clone git@github.com:ContentChef/gatsby-starter.git
cd gatsby-starter
npm install
```
* change plugin's options in `./gatsby-config.js` 
```javascript
   {
      resolve: `gatsby-source-contentchef`,
      options: {
        apiKey: '<your api key>',
        host: '<contentchef host>',
        spaceId: '<your spaceId>',
        channel: '<your channel>'
      }
    }
```
* and then run the following command
```zsh
npm run develop
```
