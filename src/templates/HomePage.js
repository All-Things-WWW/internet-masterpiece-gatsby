import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import ContentMDX from '../components/ContentMDX'
import Layout from '../components/Layout'

// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, featuredImage, body, children }) => (
  <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        {children|| <ContentMDX source={body} />}
      </div>
    </section>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.body} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: mdx(id: { eq: $id }) {
      ...Meta
      body
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`
