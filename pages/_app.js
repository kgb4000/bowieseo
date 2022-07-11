import 'react-modal-video/scss/modal-video.scss'
import '../styles/globals.css'
import { useState, useEffect } from 'react'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

import TagManager from 'react-gtm-module'

import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

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

// <!-- Meta Pixel Code -->
// <script>
// !function(f,b,e,v,n,t,s)
// {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
// n.callMethod.apply(n,arguments):n.queue.push(arguments)};
// if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
// n.queue=[];t=b.createElement(e);t.async=!0;
// t.src=v;s=b.getElementsByTagName(e)[0];
// s.parentNode.insertBefore(t,s)}(window, document,'script',
// 'https://connect.facebook.net/en_US/fbevents.js');
// fbq('init', '1742338286115682');
// fbq('track', 'PageView');
// </script>
// <noscript><img height="1" width="1" style="display:none"
// src="https://www.facebook.com/tr?id=1742338286115682&ev=PageView&noscript=1"
// /></noscript>
// <!-- End Meta Pixel Code -->
