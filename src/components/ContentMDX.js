import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

import components from '../registerMdxComponents';

export default function PageTemplate({ source }) {
  
  return (
    <MDXProvider components={components}>
      <MDXRenderer>{source}</MDXRenderer>
    </MDXProvider>
  )
}
