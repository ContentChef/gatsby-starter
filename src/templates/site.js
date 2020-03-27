import React from "react"

import Layout from "../components/layout"
import { createUrl } from "../cloudinary";

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
}

const Site = ({pageContext: site}) => (
  <Layout>
    <div style={containerStyle}>
        <h1>
            {site.title}
        </h1>
        <img src={createUrl(site.image, site.cloudName)} alt=""/>
        <a href={site.url}>
            {site.url}
        </a>
        <p>
            {site.description}
        </p>
    </div>
  </Layout>
)

export default Site;
