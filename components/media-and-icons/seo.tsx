import { NextSeo, NextSeoProps } from 'next-seo'
import React from 'react'
import config from '@/configs/site.json'

export type SEOProps = Pick<NextSeoProps, 'title' | 'description'>

export const SEO = ({ title, description }: SEOProps) => (
  <NextSeo
    title={title}
    description={description}
    openGraph={{ title, description }}
    titleTemplate={config.seo.titleTemplate}
  />
)