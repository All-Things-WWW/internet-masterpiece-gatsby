const _ = require('lodash')
const path = require('path')
const fs = require('fs')

const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

const DEFAULT_TEMPLATE = path.resolve(`src/templates/DefaultPageMDX.js`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMdx(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              template
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    // Create MDX pages
    const mdxFiles = result.data.allMdx.edges
    // you'll call `createPage` for each result
    mdxFiles.forEach(({ node }, index) => {
      const id = node.id
      const { template} = node.frontmatter
      const { slug } = node.fields

      if (template) {
        const component = function(){
          const Template_Path = path.resolve(
            `src/templates/${String(template)}.js`
          )

          if (fs.existsSync(Template_Path)){
            return Template_Path
          }
          console.log(`Template ${template} not found at ${Template_Path}`)
          return DEFAULT_TEMPLATE;
        }();
        
        
        createPage({
          path: slug || '/',
          component,

          context: { id }
        })
      }
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // convert frontmatter images
  fmImagesToRelative(node)

  // Create smart slugs
  // https://github.com/Vagr9K/gatsby-advanced-starter/blob/master/gatsby-node.js
  let slug

  if (node.internal.type === 'MarkdownRemark' || node.internal.type === 'Mdx') {
    const fileNode = getNode(node.parent)
    const parsedFilePath = path.parse(fileNode.relativePath)

    if (_.get(node, 'frontmatter.slug', '').length) {
      slug = `/${node.frontmatter.slug.toLowerCase()}/`
    } else if (
      // home page gets root slug
      parsedFilePath.name === 'home' &&
      parsedFilePath.dir === 'pages'
    ) {
      slug = `/`
    } else if (_.get(node, 'frontmatter.title')) {
      slug = `/${_.kebabCase(parsedFilePath.dir)}/${_.kebabCase(
        node.frontmatter.title
      )}/`
    } else if (parsedFilePath.dir === '') {
      slug = `/${parsedFilePath.name}/`
    } else {
      slug = `/${parsedFilePath.dir}/`
    }

    console.log(slug)

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })

    // Add contentType to node.fields
    createNodeField({
      node,
      name: 'contentType',
      value: parsedFilePath.dir
    })
  }
}

// Random fix for https://github.com/gatsbyjs/gatsby/issues/5700
module.exports.resolvableExtensions = () => ['.json']
