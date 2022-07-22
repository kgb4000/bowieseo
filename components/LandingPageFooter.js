/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import OfferForm from './OfferFormSection'
import {
  NextSeo,
  LocalBusinessJsonLd,
  CorporateContactJsonLd,
  LogoJsonLd,
  SocialProfileJsonLd,
} from 'next-seo'

const FooterSection = () => {
  return (
    <>
      <LowerFooter>Bowie SEO &copy; {new Date().getFullYear()}</LowerFooter>
    </>
  )
}

const LowerFooter = styled.div`
  text-align: center;
  padding: 1rem 0;
  background: #fff;
  color: #2c3e50;
`
export default FooterSection
