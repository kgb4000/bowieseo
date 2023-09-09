import { NextSeo, FAQPageJsonLd } from 'next-seo'
import Link from 'next/link'
import MainLayout from '../components/MainLayout'
import OfferForm from '../components/OfferFormSection'
import OfferVideo from '../components/OfferVideo'

const FreeSEOAudit = () => {
  const SEO = {
    title: 'Get Your Free SEO Audit and Fix Your Website | Bowie SEO',
    description: `A free SEO audit that will allow you to see 1) where you're at, 2 where your competitors are at, and 3) how to dominate the local market. Call us today!`,
    type: 'website',
    canonical: 'https://bowieseo.com/free-seo-audit',
    openGraph: {
      title: 'Get Your Free SEO Audit and Fix Your Website | Bowie SEO',
      description: `A free SEO audit that will allow you to see 1) where you're at, 2 where your competitors are at, and 3) how to dominate the local market. Call us today!`,
      type: 'website',
      image: [{}],
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <MainLayout>
        <section>
          <div className="small-container">
            <h1>The Best Free SEO Audit You'll Ever Get in Maryland</h1>
            <OfferVideo />
            <p>
              Get{' '}
              <Link href="/search-engine-optimization">
                search engine optimization
              </Link>{' '}
              for your website, the right way.
            </p>
            <p>
              Ditch those confusing, automated SEO analysis tools that drown you
              in indecipherable graphs and stats.
            </p>
            <p>Instead, welcome a human touch.</p>
            <p>
              When you connect with <Link href="/">Bowie SEO</Link>, you're
              connecting directly with the <strong>Director of SEO</strong>.
            </p>
            <p>I don't believe in generic, machine-generated reports.</p>
            <p>
              Instead, I invest my time and expertise to handcraft a
              personalized SEO audit tailored specifically to your business's
              needs.
            </p>
            <p>
              Expect insights that resonate, strategies that ignite growth, and
              clarity that inspires action.
            </p>
            <p>And the best part?</p>
            <p>
              You'll have all this invaluable knowledge in your hands within
              just 48 hours.
            </p>
            <p>The real kicker?</p>
            <p>It's all commitment-free.</p>
            <p>Discover the Bowie SEO difference today!</p>
            <p>You'll get the audit within 48 hours.</p>
            <p>No strings attached!</p>
            <h2>Fill out the form below for your Free SEO Audit!</h2>
            <OfferForm />
          </div>
        </section>
      </MainLayout>
    </>
  )
}

export default FreeSEOAudit
