import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Card } from "../components/card"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
  query TopSitesQuery {
    allContentChefTopSite {
      edges {
        node {
          publicId
          payload {
            description
            image
            title
            url
          }
          requestContext {
            cloudName
          }
        }
      }
    }
  }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        {data.allContentChefTopSite.edges.map(
          ({node: 
            {publicId, 
              payload: {title, image, description, url},
              requestContext: {cloudName}}}
          ) => (
            <Link to={`/sites/${publicId}`}>
              <Card 
                title={title}
                description={description}
                image={image}
                url={url}
                cloudName={cloudName}
              />
            </Link>
          )
        )}
      </div>
    </Layout>
  )
}

export default IndexPage
