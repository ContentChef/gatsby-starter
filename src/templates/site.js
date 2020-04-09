import React from "react"

import Layout from "../components/layout"
import { getImageUrl } from "../helpers";

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
        <img src={getImageUrl(site.image)} alt=""/>
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
