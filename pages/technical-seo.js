/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import MainLayout from '../components/MainLayout'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'
import { Business, Businesses } from '../components/BusinessesWeWorkWith'
import {
  ReasonSec,
  Deliverable,
  Deliverables,
  Service,
} from '../components/LocatioPageEssentials'

import { NextSeo } from 'next-seo'

const calendly = 'https://calendly.com/bowieseo/30min'

export default function keywordResearch() {
  const SEO = {
    title: 'Technical SEO for Small Business | Bowie SEO',
    description: `Technical SEO helps improve site speed, mobile optimization, structured data and to boost rankings. Trust Bowie's SEO experts to maximize visibility.`,
    canonical: 'https://bowieseo.com/technical-seo',
    openGraph: {
      title: 'Technical SEO for Small Business | Bowie SEO',
      description: `Technical SEO helps improve site speed, mobile optimization, structured data and to boost rankings. Trust Bowie's SEO experts to maximize visibility.`,
      image: [{}],
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <MainLayout>
        <HeroSection
          heroText="Technical SEO is Crucial for SEO: Skip this Element and You're Done"
          subText="Find and fix technical issues that are stopping you r site from showing up in the SERPS."
          backgroundImage="/images/keyword-research-cover.webp"
          backgroundHeight="80vh"
          backgroundPosition="center left"
          buttonText="Get Your Free SEO Audit &#8594;"
          buttonLink="/free-seo-audit"
        />
        <section>
          <div className="medium-container">
            <div className="grid">
              <img
                src="/images/local-seo-columbia-md.jpg"
                className="page-img"
                width="1000px"
                height="600px"
                alt="A business owner asking what is techincal SEO."
                title="A business owner asking what is techincal SEO."
                loading="lazy"
              />
              <div>
                <h2>What is Technical SEO?</h2>
                <p>
                  Technical SEO is the process of improving the technical
                  aspects of your website to increase rankings and visibility in
                  search engines.
                </p>
                <p>
                  It is a crucial part of the{' '}
                  <Link href="/search-engine-optimization">
                    search engine optimization
                  </Link>{' '}
                  process along with
                  <Link href="/keyword-research">keyword research</Link> and
                  on-page SEO.
                </p>
                <p>
                  Technical SEO lays the groundwork to ensure that your website
                  can be crawled and indexed by search engines without any
                  hiccups.
                </p>
                <p>
                  It's the behind-the-scenes elements that makes sure Google's
                  bots can access your web pages and website, and understand
                  what your pages are about.
                </p>
                <p>Key elements that in technical SEO include:</p>
                <p>
                  <strong>Crawlability:</strong> Search engine must be able to
                  crawl and index your website. If they can't, you will not
                  appear in any search results.
                </p>
                <p>
                  <strong>Site Speed:</strong> Slow load times are a conversion
                  killer. The faster your site, the happier the user—and Google.
                </p>
                <p>
                  <strong>HTTPS:</strong> Secure sites rank better and give your
                  users peace of mind. That 's' in 'https' matters more than you
                  think.
                </p>
                <p>
                  <strong>Internal Linking:</strong> These are the road signs
                  that guide Google through your website, affecting how search
                  engines read, understand, and rank your content.
                </p>
                <p>
                  <strong>404 Errors and Redirects:</strong> Dead-end pages and
                  poor redirects can hurt your SEO. The goal is to keep the user
                  journey as smooth as possible.
                </p>
                <p>
                  <strong>Website Structure:</strong> Dead-end pages and poor
                  redirects can hurt your SEO. The goal is to keep the user
                  journey as smooth as possible.
                </p>
                <p>Core Web Vitals:</p>
              </div>
            </div>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Get Your Free SEO Consultation!</Button>
              </a>
            </div>
            <p className="subtext">
              Or get your{' '}
              <Link href="/free-seo-audit">Free SEO Audit &#8594;</Link>
            </p>
          </div>
        </section>
        <section>
          <div className="medium-container">
            <h2 className="title">
              What Happens to your website you don't perform Technical SEO?
            </h2>
            <p className="subtext">
              A business not doing keyword research is like a ship sailing
              without a compass—you might move, but you're less likely to get
              where you want to go. Here are some potential setbacks that could
              hit your business if your skip this crucial step.
            </p>
            <Deliverables>
              <Deliverable>
                <img
                  src="/images/icons/x-button.png"
                  className="check"
                  alt="X-button"
                  loading="lazy"
                />
                <div>
                  <h3>Slow Website: The Snail's Pace Nightmare</h3>
                  <p>
                    A sluggish website isn't just frustrating for your visitors;
                    it's a deal-breaker. Every extra second your site takes to
                    load, you're hemorrhaging conversions and skyrocketing your
                    bounce rate. Translation? Bye-bye, sales and hello, lost
                    revenue.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/x-button.png"
                  className="check"
                  alt="X-button"
                  loading="lazy"
                />
                <div>
                  <h3>"Page Not Found" Fiascos</h3>
                  <p>
                    Neglected 404 errors can make your site a virtual labyrinth
                    with dead-ends, leaving visitors frustrated and search
                    engines clueless about ranking your pages. Result? Lower
                    rankings and a lousy user experience.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/x-button.png"
                  className="check"
                  alt="X-button"
                  loading="lazy"
                />
                <div>
                  <h3>Trust Issues</h3>
                  <p>
                    If your website isn't secure (no HTTPS), then browsers like
                    Chrome will flag it as 'Not Secure'. Imagine the red flags
                    that'll raise in your visitor's mind. Reduced trust means
                    fewer sales. Period.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/x-button.png"
                  className="check"
                  alt="X-button"
                  loading="lazy"
                />
                <div>
                  <h3>Lower Rankings in Google</h3>
                  <p>
                    Neglecting mobile optimization? Well, Google's not going to
                    give you the time of day when it comes to ranking you in its
                    mobile-first index. You'll be voluntarily relinquishing an
                    enormous chunk of mobile users that could be yours.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/x-button.png"
                  className="check"
                  alt="X-button"
                  loading="lazy"
                />
                <div>
                  <h3>A Tangled Web</h3>
                  <p>
                    Poorly managed internal linking and site structure is like
                    inviting Google's crawlers into a maze without a map. The
                    harder it is for search engines to crawl your site, the
                    lower you’ll rank.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/x-button.png"
                  className="check"
                  alt="X-button"
                  loading="lazy"
                />
                <div>
                  <h3>Mixed Messages</h3>
                  <p>
                    Without structured data, you're missing out on the chance to
                    control how your brand appears in search results. The
                    absence of this critical info will make your listing less
                    appealing, leading to lower click-through rates and,
                    subsequently, lower rankings.
                  </p>
                </div>
              </Deliverable>
            </Deliverables>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule Your Free Consultation Today!</Button>
              </a>
            </div>
            <p className="subtext">
              Or get your{' '}
              <Link href="/free-seo-audit">Free SEO Audit &#8594;</Link>
            </p>
          </div>
        </section>
        <section>
          <div className="small-container">
            <h2 className="title">
              What are the benefits of doing technical SEO on your website?
            </h2>
            <p className="subtext">
              Why keyword research is like the Swiss Army knife of digital
              marketing.
            </p>
            <div>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Check mark."
                  loading="lazy"
                />
                <div>
                  <h3>Better Search Engine Rankings:</h3>
                  <p>
                    Improved website crawlability and indexation can lead to
                    higher search engine rankings, increasing the site's
                    visibility and attracting more organic traffic.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Check mark."
                  loading="lazy"
                />
                <div>
                  <h3>Boosted User Experience:</h3>
                  <p>
                    A technically optimized, well-structured, and
                    mobile-friendly website offers a seamless and enjoyable user
                    experience, encouraging users to spend more time on the site
                    and engage with the content.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Check mark."
                  loading="lazy"
                />
                <div>
                  <h3>Increased Site Security:</h3>
                  <p>
                    Implementing HTTPS and addressing security issues increase
                    the safety of user data and build trust with visitors,
                    impacting user interaction and conversion rates positively.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Check mark."
                  loading="lazy"
                />
                <div>
                  <h3>Optimized Conversion Rates:</h3>
                  <p>
                    An enhanced user experience and increased user trust can
                    lead to higher conversion rates, promoting user actions such
                    as purchases, sign-ups, and form submissions.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Check mark."
                  loading="lazy"
                />
                <div>
                  <h3>Elimination of Duplicate Content Issues:</h3>
                  <p>
                    Resolving duplicate content problems ensures search engines
                    can identify the authoritative version, concentrating link
                    equity and value.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Check mark."
                  loading="lazy"
                />
                <div>
                  <h3>Improved Website Performance:</h3>
                  <p>
                    Optimizing page load times and addressing Core Web Vitals
                    result in a faster and more responsive website, reducing
                    bounce rates and promoting user engagement.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Check mark."
                  loading="lazy"
                />
                <div>
                  <h3>Access to Rich Results and Advanced Features:</h3>
                  <p>
                    Structured data implementation can yield rich results and
                    additional SERP features, enhancing click-through rates and
                    driving additional traffic.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Check mark."
                  loading="lazy"
                />
                <div>
                  <h3>Efficient Resource Utilization:</h3>
                  <p>
                    Properly optimized websites allow search engine bots to
                    crawl and index content more efficiently, ensuring that
                    important pages are indexed and that the crawl budget is
                    used effectively.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Check mark."
                  loading="lazy"
                />
                <div>
                  <h3>Gaining a Competitive Advantage:</h3>
                  <p>
                    A technically sound website can gain an edge over
                    competitors, particularly those who have neglected technical
                    SEO, and secure a larger market share.
                  </p>
                </div>
              </Deliverable>
            </div>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule Your Free Consultation Today!</Button>
              </a>
            </div>
            <p className="subtext">
              Or get your{' '}
              <Link href="/free-seo-audit">Free SEO Audit &#8594;</Link>
            </p>
          </div>
        </section>
        <div className="container"></div>
        <section>
          <div className="container">
            <h2 className="title">Why Work With Us?</h2>
            <p className="subtext">
              Partner with our{' '}
              <Link href="/maryland-seo-company">
                Maryland Local SEO Company
              </Link>{' '}
              and save time and money, and acheive your sales and revenue
              goals.. We work only for you, never your competition in your local
              area.
            </p>
            <Service>
              <div className="service-card">
                <img
                  src="/images/save-time.webp"
                  alt="Focus on your business."
                  width="1000px"
                  height="665px"
                  loading="lazy"
                />
                <div className="service">
                  <h3>
                    We let you focus On Your Business, not on digital Marketing
                  </h3>
                  <p>
                    Concentrate on running your business and not on doing
                    keyword research, writing copy, and competitor analysis.
                  </p>
                </div>
              </div>
              <div className="service-card">
                <img
                  src="/images/google-my-business.webp"
                  alt="Save time."
                  width="1000px"
                  height="665px"
                  loading="lazy"
                />
                <div className="service">
                  <h3>
                    You Save Time and Money With Advanced Keyword Research
                  </h3>
                  <p>
                    Save money with the best search marketing methods that are
                    proven to boost your website traffic and generate leads for
                    your business.
                  </p>
                </div>
              </div>
              <div className="service-card">
                <img
                  src="/images/digital-marketing-team.webp"
                  alt="Get your own SEO team."
                  width="1000px"
                  height="665px"
                  loading="lazy"
                />
                <div className="service">
                  <h3>You Get Your Own SEO Team for Your Business</h3>
                  <p>
                    Have your own team of SEO specialists helping you grow your
                    business. Discover new opportunities to expose your company
                    new customers.
                  </p>
                </div>
              </div>
            </Service>
            <p className="subtext">
              Want to see how we can help you grow your business with SEO?
            </p>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule Your Free Consultation Today!</Button>
              </a>
            </div>
            <p className="subtext">
              Or get your{' '}
              <Link href="/free-seo-audit">Free SEO Audit &#8594;</Link>
            </p>
          </div>
        </section>
        <section>
          <div className="medium-container">
            <h2 className="title">
              Frequently Asked Questions about Technical SEO
            </h2>
            <ReasonSec>
              <div className="question">
                <h3>Why is technical SEO important?</h3>
                <p>
                  Technical SEO is crucial as it helps search engines crawl,
                  interpret, and index a website effectively, which is
                  fundamental for achieving higher search rankings, improving
                  visibility, and attracting organic traffic. It also ensures a
                  better user experience, fostering user trust and engagement.
                </p>
              </div>
              <div className="question">
                <h3> How does page speed impact technical SEO?</h3>
                <p>
                  Page speed is a critical factor in technical SEO as it affects
                  user experience and search engine rankings. Slow-loading pages
                  can lead to higher bounce rates and lower time spent on the
                  site, and search engines may penalize slow sites by ranking
                  them lower.
                </p>
              </div>
              <div className="question">
                <h3>How does mobile-friendliness affect SEO rankings?</h3>
                <p>
                  Mobile-friendliness is a ranking factor for search engines. If
                  a site is not optimized for mobile devices, it may rank lower
                  in mobile search results, potentially leading to a loss of
                  mobile traffic.
                </p>
              </div>
              <div className="question">
                <h3>What is the role of structured data in technical SEO?</h3>
                <p>
                  Structured data helps search engines understand the content on
                  a page more effectively. It can lead to rich results in search
                  engine results pages (SERPs), enhancing visibility and
                  click-through rates.
                </p>
              </div>
              <div className="question">
                <h3>Is HTTPS necessary for technical SEO?</h3>
                <p>
                  Yes, HTTPS is essential for technical SEO. It encrypts data
                  transferred between the user and the site, improving security.
                  Search engines, like Google, consider HTTPS as a ranking
                  factor, and browsers may warn users when visiting non-HTTPS
                  sites.
                </p>
              </div>
              <div className="question">
                <h3>How does mobile-friendliness affect SEO rankings?</h3>
                <p>
                  Mobile-friendliness is a ranking factor for search engines. If
                  a site is not optimized for mobile devices, it may rank lower
                  in mobile search results, potentially leading to a loss of
                  mobile traffic.
                </p>
              </div>
              <div className="question">
                <h3>How do crawl errors affect technical SEO?</h3>
                <p>
                  Crawl errors can prevent search engines from accessing,
                  reading, or indexing pages on your site, which can hinder your
                  site's visibility in search results and negatively impact
                  organic traffic.
                </p>
              </div>
              <div className="question">
                <h3>
                  Can I do technical SEO myself, or should I hire a
                  professional?
                </h3>
                <p>
                  While some aspects of technical SEO can be managed with online
                  resources and SEO tools, complex websites or specific
                  technical issues may require the expertise of an SEO
                  professional or consultant to optimize effectively.
                </p>
              </div>
            </ReasonSec>
          </div>
        </section>
        <div className="call-to-action-grid">
          <img
            src="/images/seo-services-columbia-md.webp"
            alt="Business man an calling about getting technical SEO."
            title="Business man an calling about getting technical SEO."
            width="1000px"
            height="65px"
            loading="lazy"
          />
          <div className="container">
            <h2>
              Ready to Tackle Your Technical SEO and Increase your Search
              Ranking and Performance?
            </h2>
            <p>
              Call us and let's optimize your website and increase your SEO
              performance.
            </p>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Book Your Free SEO Call!</Button>
              </a>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}
