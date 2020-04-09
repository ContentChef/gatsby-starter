# Installation

* clone repo and install dependencies
```zsh
git clone git@github.com:ContentChef/gatsby-starter.git
cd gatsby-starter
npm install
```
* change plugin's options in `./gatsby-config.js` 
```typescript
   {
      resolve: `gatsby-source-contentchef`,
      options: {
        apiKey: '<your api key>',
        spaceId: '<your spaceId>',
        channel: '<your channel>'
        host?: '<contentchef host>',
      }
    }
```
* and then run the following command
```zsh
npm run develop
```
