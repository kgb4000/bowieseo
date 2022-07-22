/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { Suspense } from 'react'
import Link from 'next/link'
import Button from '../components/Button'
import AuditSection from '../components/AuditSection'
import { NextSeo } from 'next-seo'

const calendly = 'https://calendly.com/bowieseo/30min'

const FreeSEOAUDIT = () => {
  const SEO = {
    title: 'Free Mini Website Audit | Bowie SEO',
    description:
      'Find out what is stopping your website from ranking higher in the search engines, and why your competitors are beating you. Contact Bowie SEO today!',
    canonical: 'https://bowieseo.com/free-mini-audit',
    openGraph: {
      title: 'Free Mini SEO Website Audit | Bowie SEO',
      description:
        'Find out what is stopping your website from ranking higher in the search engines, and why your competitors are beating you. Contact Bowie SEO today!',
      type: 'website',
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <Suspense fallback={`loading`}>
        <AuditSection />
      </Suspense>
    </>
  )
}

export default FreeSEOAUDIT
