/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import './cms-utils'
import MDX from '@mdx-js/runtime'
import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import ErrorBoundary from 'react-error-boundary'

import components from '../registerMdxComponents'

import { DefaultPageMDXTemplate } from '../templates/DefaultPage'
import { HomePageTemplate } from '../templates/HomePage'
import { ComponentsPageTemplate } from '../templates/ComponentsPage'
import { ContactPageTemplate } from '../templates/ContactPage'
import { BlogIndexTemplate } from '../templates/BlogIndex'
import { SinglePostTemplate } from '../templates/SinglePost'

CMS.registerMediaLibrary(uploadcare)

if (
  window.location.hostname === 'localhost' &&
  window.localStorage.getItem('netlifySiteURL')
) {
  CMS.registerPreviewStyle(
    window.localStorage.getItem('netlifySiteURL') + '/styles.css'
  )
} else {
  CMS.registerPreviewStyle('/styles.css')
}

const previewTemplateGenerator = () => {
  return data => {
    const { entry } = data
    const { template, body, ...props } = entry.toJS().data
    const Component = Templates[template] || Templates.default
    return (
      <Component {...props} preview>
        <ErrorBoundary key={body}>
          <MDX components={components} scope={{}}>
            {body}
          </MDX>
        </ErrorBoundary>
      </Component>
    )
  }
}

const Templates = {
  default: DefaultPageMDXTemplate,
  'home-page': HomePageTemplate,
  'components-page': ComponentsPageTemplate,
  'contact-page': ContactPageTemplate,
  'info-page': DefaultPageTemplate,
  'blog-page': BlogIndexTemplate,
  'posts': SinglePostTemplate
}

Object.keys(Templates).forEach(key =>{
  CMS.registerPreviewTemplate(key, previewTemplateGenerator())
})


CMS.registerPreviewTemplate('permanent-pages', previewTemplateGenerator())
CMS.registerPreviewTemplate('optional-pages', previewTemplateGenerator())

