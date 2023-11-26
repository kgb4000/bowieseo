import 'react-modal-video/scss/modal-video.scss'
import '../styles/globals.scss'
import Script from 'next/script'
// import { useEffect } from 'react'

// import TagManager from 'react-gtm-module'

import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   TagManager.initialize({ gtmId: 'GTM-K5LS529' })
  // }, [])

  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <Script id="google-analytics">
        {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'G-XM8W1P9PJH ', 'auto');
          ga('send', 'pageview');
        `}
      </Script>
      <Script src="https://www.google-analytics.com/analytics.js" />
    </>
  )
}

export default MyApp
