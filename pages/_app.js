import '../styles/globals.css'
import { useState, useEffect } from 'react'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

import TagManager from 'react-gtm-module'

import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

import 'react-modal-video/scss/modal-video.scss'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-K5LS529' })
  }, [])
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <DefaultSeo {...SEO} />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
