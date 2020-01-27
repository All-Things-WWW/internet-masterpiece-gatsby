import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components';

import PageHeader from '../components/PageHeader'
import ContentMDX from '../components/ContentMDX'
import Layout from '../components/Layout'
import SVGIcon from '../components/SVGIcon'

// Export Template for use in CMS preview
export const DefaultPageMDXTemplate = ({
  title,
  subtitle,
  featuredImage,
  body,
  children
}) => (
  <main className="DefaultPage">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
      {children || <ContentMDX source={body} />}
        <SVGIcon src="/images/calendar.svg" />
      </div>
    </section>
  </main>
)

const DefaultPage = (props) => (
  <Layout
    meta={props.meta || false}
    title={props.title || false}
  >
    <DefaultPageMDXTemplate {...props} body={props.body} />
  </Layout>
)



const DefaultPageMDX = ({ data: { page } }) => {
  return <DefaultPage {...page.frontmatter} body={page.body} />
}


export default DefaultPageMDX

export const pageQuery = graphql`
  query DefaultPageMDX($id: String!) {
    page: mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`
