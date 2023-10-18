/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'
import MainLayout from '../components/MainLayout'
import Button from '../components/Button'
import HeroSection from '../components/HeroSection'
import { Business, Businesses } from '../components/BusinessesWeWorkWith'

import { NextSeo, FAQPageJsonLd } from 'next-seo'
import styled from 'styled-components'

const calendly = 'https://calendly.com/bowieseo/30min'

const Rockville = () => {
  const SEO = {
    title: 'Search Engine Optimization | Bowie SEO',
    description:
      'We provide local SEO services for small businesses. Get more customers and web traffic, and increase revenue. Contact us today!',
    type: 'website',
    canonical: 'https://bowieseo.com/search-engine-optimization',
    openGraph: {
      title: 'Search Engine Optimization | Bowie SEO',
      description:
        'We provide local SEO services for small businesses. Get more customers and web traffic, and increase revenue. Contact us today!',
      type: 'website',
      image: [{}],
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <MainLayout>
        <HeroSection
          heroText="Search Engine Optimization for Small Businesses"
          subText="Use this powerful inbound marketing method to get customers to find your business when it counts."
          backgroundImage="/images/search-engine-optimization-header.webp"
          backgroundHeight="70vh"
          backgroundPosition="top center"
          buttonText="Get Your Free SEO Audit &#8594;"
          buttonLink="/free-seo-audit"
        />
        <section>
          <div className="medium-container">
            <div className="grid">
              <div>
                <h2>What is Search Engine Optimization?</h2>
                <p>
                  Search engine optimization, or SEO, isn't just a buzzword:
                  it's a necessity in today's hyperconnected world.
                </p>
                <p>
                  <strong>Imagine this is you:</strong>
                </p>
                <p>
                  You own an electrical company, or pool company, or landscaping
                  company in Frederick, MD.
                </p>
                <p>
                  Peter, who just bought a house with his family, is looking for
                  an electrician, a landscaper, and a pool maintenance company
                  to do some work at his new house.
                </p>
                <p>
                  Rather than flipping through the Yellow pages or asking a new
                  neighbor, Peter is likely to take out his smartphone or open
                  his laptop and type a query into a search engine—something
                  along the lines of "pool service company near me."
                </p>
                <p>
                  With <strong>local SEO</strong>, your company could be the
                  first listing Peter sees, enticing him to click on your
                  listing and call or contact your company.
                </p>
                <p>
                  Optimizing your company's website for local search can
                  drastically increase the chances of your business appearing as
                  the top result, or at least on the first page, when Peter
                  makes his search.
                </p>
                <p>
                  This doesn't just mean you've won the digital lottery; it
                  translates to real-world gains.{' '}
                </p>
                <p>
                  Studies have shown that the first three organic search results
                  account for approximately{' '}
                  <a
                    href="https://backlinko.com/google-ctr-stats"
                    target="_blank"
                  >
                    54.4% of all clicks
                  </a>
                  .
                </p>
                <p>
                  Therefore, the higher your site ranks, the more clicks you'll
                  get, and those clicks translate into potential leads and
                  sales.
                </p>
                <p>
                  Want to see how local search engine optimization could help
                  your business?
                </p>
              </div>
              <img
                src="/images/how-search-engine-optimization-can-help-your-business.webp"
                className="page-img-left"
                width="1000"
                height="600"
                alt="A business owner considering working with our SEO company to get his own leads without paying for online ads."
                title="A business owner considering working with our SEO company to get his own leads without paying for online ads."
              />
            </div>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Book Your Free SEO Call Now!</Button>
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
            <div className="grid">
              <img
                src="/images/search-engine-optimization-can-help-your-business.webp"
                className="page-img"
                width="1000"
                height="600"
                alt="A business owner considering working with our SEO company to get his own leads without paying for online ads."
                title="A business owner considering working with our SEO company to get his own leads without paying for online ads."
              />
              <div>
                <h2>
                  How Search Engine Optimization Can Take Your Business to the
                  Next Level
                </h2>
                <p>Think about this.</p>
                <p>
                  A staggering{' '}
                  <a
                    href="https://99firms.com/blog/search-engine-statistics/#gref"
                    target="_blank"
                  >
                    43% of people
                  </a>{' '}
                  use search engines like Google to discover local businesses.
                </p>
                <p>What does that mean for you?</p>
                <p>
                  It means that almost four out of every ten individuals looking
                  for services like yours aren't just stumbling upon your
                  business by chance; they're actively searching for it.
                </p>
                <p>
                  <strong>
                    When users like our hypothetical homeowner Peter type
                    something into Google, they're not merely looking for
                    information.
                  </strong>
                </p>
                <p>
                  <strong>They have an intent behind their search.</strong>
                </p>
                <p>
                  It could be transactional, like finding a local electrician to
                  fix a malfunctioning switch, or informational, like
                  understanding how to maintain a swimming pool.
                </p>
                <p>
                  Either way, each search query is an opportunity for your
                  business to meet that specific need—provided you've optimized
                  your online presence to do so.
                </p>
                <p>Want to learn more?</p>
              </div>
            </div>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Book Your Free SEO Call Now!</Button>
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
            <div>
              <h2>Google's Algorithm: Four Key Signals</h2>
              <p>
                Understanding{' '}
                <a
                  href="https://www.google.com/search/howsearchworks/how-search-works/ranking-results/"
                  target="_blank"
                >
                  how Google's algorithm works
                </a>{' '}
                can offer invaluable insights into climbing up those precious
                search result rankings.
              </p>
              <p>
                Google looks at several different signals to determine which
                page should be shown first, but for local searches, four primary
                signals take center stage:
              </p>
              <div>
                <h3>Search Query Keywords:</h3>
                <p>
                  When Peter types "pool service company near me," the algorithm
                  instantly scans for webpages that contain those words. This is
                  the most basic form of matching, and it’s where{' '}
                  <Link href="/keyword-research">keyword optimization</Link>{' '}
                  plays a crucial role. By using targeted keywords in your
                  website content, meta descriptions, and even image alt texts,
                  you increase the likelihood of your page matching the user's
                  query.
                </p>
              </div>
              <div>
                <h3>Page Relevance:</h3>
                <p>
                  Google doesn’t just look for keywords; it evaluates how
                  relevant your entire page is to the search query. The search
                  engine uses complex algorithms to assess whether the content
                  on your page actually meets the needs expressed in the search
                  query. High-quality, relevant{' '}
                  <Link href="/content-for-seo">SEO content</Link> is rewarded
                  with higher rankings.
                </p>
              </div>
              <div>
                <h3>Subject Expertise:</h3>
                <p>
                  Your website's credibility is another significant factor.
                  Google evaluates this through the quality and quantity of
                  backlinks your site has, the depth of content you offer, and
                  your online reputation. Accurate, well-researched content,
                  positive customer reviews, and authoritative backlinks can go
                  a long way in establishing you as an expert in your field.
                </p>
              </div>
              <div>
                <h3>Location Proximity:</h3>
                <p>
                  For local searches, proximity is a massive determining factor.
                  Google uses geolocation data to provide users with the most
                  relevant and nearest options. That's why it's crucial to
                  optimize your Google My Business listing and make sure your
                  website mentions your location, ideally in key places like the
                  title tag, meta description, and content body.
                </p>
              </div>
              <p>Want to see how your website stacks up?</p>
            </div>
            <div className="btn">
              <Link href="/free-seo-audit">
                <Button>Get Your Free SEO Audit &#8594;</Button>
              </Link>
            </div>
            <p className="subtext">
              Or{' '}
              <a href={calendly} target="_blank">
                book a Free SEO call now &#8594;
              </a>
            </p>
          </div>
        </section>
        {/* <section>
          <div className="medium-container">
            <h2 className="title">
              What Happens To Your Business When You Don't Invest In Search
              Engine Optimization?
            </h2>
            <p className="subtext">
              Here are the downsides of not investing in local SEO.
            </p>
            <Deliverables>
              <Deliverable>
                <img
                  src="/images/icons/x-button.png"
                  className="check"
                  alt="X mark."
                />
                <div>
                  <h3>You Become Invisible in Local Searches</h3>
                  <p>
                    You know the old saying, "Out of sight, out of mind." Well,
                    this also holds true in digital marketing.
                  </p>
                  <p>
                    If your business doesn't appear in the local searches, you
                    become invisible to customers searching for your services.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/x-button.png"
                  className="check"
                  alt="X mark."
                />
                <div>
                  <h3>Reduced Foot Traffic</h3>
                  <p>
                    If people don't know your store exists, they cannot visit
                    your store.
                  </p>
                  <p>
                    Even if you're on a busy street, you miss out on all the
                    customers searching online before they decide where to go.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/x-button.png"
                  className="check"
                  alt="X mark."
                />
                <div>
                  <h3>Lost Leads, Sales, and Revenue</h3>
                  <p>
                    Less visibility and fewer customers lead to reduced revenue.
                  </p>
                  <p>
                    Meanwhile, competitors who invest in local SEO get more of
                    the local business.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/x-button.png"
                  className="check"
                  alt="X mark."
                />
                <div>
                  <h3>Loss of Trust and Credibility</h3>
                  <p>
                    When people search for services and find verified, ranked
                    websites, they will likely trust those businesses.
                  </p>
                  <p>
                    If you're not one of them, your trust factor takes a hit.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/x-button.png"
                  className="check"
                  alt="X mark."
                />
                <div>
                  <h3>Competitive Disadvantage</h3>
                  <p>
                    Think about it. If your competitors are ramping up their
                    local SEO game and you're not, they'll easily outrank you in
                    the search results.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/x-button.png"
                  className="check"
                  alt="X mark."
                />
                <div>
                  <h3>Costly to Catch-up</h3>
                  <p>
                    The longer you ignore local SEO, the time consuming and
                    expensive it will be to establish a strong online presence
                    later on.
                  </p>
                  <p>
                    You'll be starting from scratch while your competition is
                    miles ahead.
                  </p>
                </div>
              </Deliverable>
            </Deliverables>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Book Your Free SEO Call Now!</Button>
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
              How Your Business Can Benefit By Investing in Search Engine
              Optimization?
            </h2>
            <p className="subtext">
              Here are the perks you get when you start doing local SEO.
            </p>
            <Deliverables>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Check mark."
                />
                <div>
                  <h3>Boost in Local Visibility</h3>
                  <p>
                    With a solid Local SEO strategy, your business can be the
                    first in the local listings and in the Map Pack.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Check mark."
                />
                <div>
                  <h3>Increased Foot Traffic</h3>
                  <p>
                    Ranking higher means more online visibility and more
                    visibility translates to more foot traffic.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Check mark."
                />
                <div>
                  <h3>Higher Conversions</h3>
                  <p>
                    Local searches are often more intentional and ready to
                    convert.
                  </p>
                  <p>
                    A person looking for "pool maintenance," is more likely
                    looking for a company to perform the service than someone
                    looking for "how to do pool maintenance,"
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Check mark."
                />
                <div>
                  <h3>Out Rank Your Local Competitors</h3>
                  <p>
                    This is your chance to get ahead of your competitors because
                    you are doing local SEO, and your competitors aren't.
                  </p>
                  <p>
                    If they're doing local SEO, then you also need to do it to
                    remain competitive.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Check mark."
                />
                <div>
                  <h3>Builds Credibility and Trust</h3>
                  <p>
                    When you always appear in the local searches, and your
                    Google My Business profile is filled with positive reviews,
                    you build trust and credibility with your local community.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Check mark."
                />
                <div>
                  <h3>Cost Effective Marketing</h3>
                  <p>
                    Unlike paid ads, organic traffic generated through local SEO
                    comes at no cost per click.
                  </p>
                  <p>
                    It's an upfront investment but pays off in substantial,
                    long-term results.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Check mark."
                />
                <div>
                  <h3>Enhanced Customer Engagement:</h3>
                  <p>
                    With features like{' '}
                    <a href="https://businessmessages.google/" target="_blank">
                      Google My Business Messaging
                    </a>
                    , customers can interact with you directly from the search
                    results.
                  </p>
                  <p>
                    You can answer questions, resolve issues, and build
                    relationships even before they walk through your door.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Check mark."
                />
                <div>
                  <h3>Transparent ROI</h3>
                  <p>
                    One of the best parts of local SEO is the ability to track
                    your return on investment through analytics.
                  </p>
                  <p>
                    You can measure key metrics like search rankings, web
                    traffic, and conversion rates to understand how effective
                    your local SEO strategies are.
                  </p>
                </div>
              </Deliverable>
            </Deliverables>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Book Your Free SEO Call Now!</Button>
              </a>
            </div>
            <p className="subtext">
              Or get your{' '}
              <Link href="/free-seo-audit">Free SEO Audit &#8594;</Link>
            </p>
          </div>
        </section> */}
        <section>
          <div className="medium-container">
            <h2 className="title">
              Cities We Help Businesses with Search Engine Optimization
            </h2>
            <p className="center">
              Our <Link href="/maryland-seo-company">Maryland SEO company</Link>{' '}
              works with businesses in:
            </p>
            <Cities>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Annapolis, MD."
                  title="Annapolis, MD."
                  loading="lazy"
                />
                <Link href="/search-engine-optimization-annapolis-md">
                  Annapolis
                </Link>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Baltimore, MD."
                  title="Baltimore, MD."
                  loading="lazy"
                />
                <Link href="/baltimore-seo" passHref>
                  <a>Baltimore, MD</a>
                </Link>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Bowie, MD."
                  title="Bowie, MD."
                  loading="lazy"
                />
                <Link href="/" passHref>
                  <a>Bowie, MD</a>
                </Link>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Bethesda, MD."
                  title="Bethesda, MD."
                  loading="lazy"
                />
                <Link href="/seo-company-bethesda-md" passHref>
                  <a>Bethesda, MD</a>
                </Link>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Columbia, MD."
                  title="Columbia, MD."
                  loading="lazy"
                />
                <Link href="/local-seo-columbia-md" passHref>
                  <a>Columbia, MD</a>
                </Link>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Crofton, MD."
                  title="Crofton, MD."
                  loading="lazy"
                />
                <Link href="/seo-services-crofton-md" passHref>
                  <a>Crofton, MD</a>
                </Link>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Clinton, MD."
                  title="Clinton, MD."
                  loading="lazy"
                />
                <p>Clinton, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Glen Burnie, MD."
                  title="Glen Burnie, MD."
                  loading="lazy"
                />
                <Link href="/seo-company-glen-burnie-md">Glen Burnie, MD</Link>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Laurel, MD."
                  title="Laurel, MD."
                  loading="lazy"
                />
                <Link href="/seo-company-laurel-md" passHref>
                  <a>Laurel, MD</a>
                </Link>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Ocean City, MD."
                  title="Ocean City, MD."
                  loading="lazy"
                />
                <Link href="/seo-services-ocean-city-md" passHref>
                  <a>Ocean City, MD</a>
                </Link>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Odenton, MD."
                  title="Odenton, MD."
                  loading="lazy"
                />
                <Link href="/seo-company-odenton-md" passHref>
                  <a>Odenton, MD</a>
                </Link>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Potomac, MD."
                  title="Potomac, MD."
                  loading="lazy"
                />
                <Link href="/potomac-md-seo-company" passHref>
                  <a>Potomac, MD</a>
                </Link>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  title="Rockville, MD."
                  alt="Rockville, MD."
                  loading="lazy"
                />
                <Link href="/rockville-seo-company" passHref>
                  <a>Rockville, MD</a>
                </Link>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  title="Ellicott City, MD."
                  alt="Ellicott City, MD."
                  loading="lazy"
                />
                <Link href="/seo-company-ellicott-city-md" passHref>
                  <a>Ellicott City, MD</a>
                </Link>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  title="Gaithersburg, MD."
                  alt="Gaithersburg, MD."
                  loading="lazy"
                />
                <Link href="/seo-company-gaithersburg-md">
                  Gaithersburg, MD
                </Link>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  title="Germantown, MD."
                  alt="Germantown, MD."
                  loading="lazy"
                />
                <p>Germantown, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Kensington, MD."
                  title="Kensington, MD."
                  loading="lazy"
                />
                <Link href="/seo-company-kensington-md" passHref>
                  <a>Kensington, MD</a>
                </Link>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Silver Spring, MD."
                  title="Silver Spring, MD."
                  loading="lazy"
                />
                <Link href="/silver-spring-md-seo-company">
                  Silver Spring, MD
                </Link>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Silver Spring, MD."
                  title="Silver Spring, MD."
                  loading="lazy"
                />
                <Link href="/seo-services-salisbury-md">Salisbury, MD</Link>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Frederick, MD."
                  title="Frederick, MD."
                  loading="lazy"
                />
                <Link href="/seo-company-frederick-md">Frederick, MD</Link>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Wheaton, MD."
                  title="Wheaton, MD."
                  loading="lazy"
                />
                <p>Wheaton, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Waldorf MD."
                  title="Waldorf MD."
                  loading="lazy"
                />
                <Link href="/seo-services-waldorf-md" passHref>
                  <a>Waldorf, MD</a>
                </Link>
              </City>
            </Cities>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Book Your Free SEO Call Now!</Button>
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
            <div className="grid">
              <div>
                <h2>Why Work With Us?</h2>
                <div>
                  <div>
                    <h3>1. All We Do is SEO</h3>
                    <p>
                      All we do is SEO. We live, sleep, and breathe SEO. Whether
                      developing strategies, executing campaigns, or analyzing
                      data, our team is 100% focused on getting you results.
                    </p>
                  </div>
                  <div>
                    <h3>2. We're Partners in This</h3>
                    <p>
                      We don't succeed unless you do. We take your success
                      personally and will work tirelessly to ensure your
                      campaign is successful. We're not satisfied with "good
                      enough." We want to deliver results that blow the
                      competition out of the water and help you dominate your
                      market.
                    </p>
                  </div>
                  <div>
                    <h3>3. We’re an All-in-one SEO Solution</h3>
                    <p>
                      We offer everything you need to rank your website in
                      search engines, from keyword research and strategy
                      development to on-page optimization and link building.
                      Plus, we have a team of experienced SEO copywriters who
                      can create quality copy for your website.
                    </p>
                  </div>
                </div>
              </div>
              <img
                src="/images/seo-experts.webp"
                className="page-img-left"
                width="1000px"
                height="600px"
                alt="Search engine optimization experts ready to help grow your business."
                title="Search engine optimization experts ready to help grow your business."
              />
            </div>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Book Your Free SEO Call Now!</Button>
              </a>
            </div>
            <p className="subtext">
              Or get your{' '}
              <Link href="/free-seo-audit">Free SEO Audit &#8594;</Link>
            </p>
          </div>
        </section>
        {/* <section>
          <div className="container">
            <h2 className="title">Why Work With Us</h2>
            <p className="subtext">When you work with us, you get:</p>
          </div>
          <div className="medium-container">
            <Deliverables>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="One-on-one expert support."
                  loading="lazy"
                />
                <div>
                  <h3>Expert one-on-one support</h3>
                  <p>
                    Get free expert advice and support from Maryland Local SEO
                    experts, available to answer all your questions via email or
                    on a call. We’re here to help you grow your business, boost
                    your ranking, and increase your online presence.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="You get keyword research."
                  loading="lazy"
                />
                <div>
                  <h3>Keyword Research</h3>
                  <p>
                    Laser-focused{' '}
                    <Link href="/keyword-research">keyword research</Link> will
                    uncover the most profitable and relevant terms to attract
                    customers and create sales. We'll construct a database of
                    these keywords for you to create SEO content.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="You get Google My Business Management."
                  loading="lazy"
                />
                <div>
                  <h3>Google My Business Management</h3>
                  <p>
                    Improve your local SEO ranking by managing your Google My
                    Business page. Get a fully optimized GMB page to appear at
                    the top of both the map pack and local search results.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="You get Google Analytics and Google Search Console set up."
                  loading="lazy"
                />
                <div>
                  <h3>Google Analytics and Google Console Setup</h3>
                  <p>
                    Set up Google Analytics and Google Console to track your
                    website's performance and activity. These tools help you
                    understand how your site is being used and accessed, so you
                    can make changes to improve your user experience.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="You get a website audit."
                  loading="lazy"
                />
                <div>
                  <h3>SEO Audit</h3>
                  <p>
                    Find out what's holding your website back from ranking
                    higher and getting the leads and customers you need. Our{' '}
                    <Link href="/free-seo-audit">SEO Audit</Link> will pinpoint
                    the specific issues that must be fixed for your SEO campaign
                    to achieve success.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="You get local SEO."
                  loading="lazy"
                />
                <div>
                  <h3>Local SEO</h3>
                  <p>
                    Local SEO gets your website in front of local customers when
                    it counts. We optimize your website, so local customers find
                    your business, not your competitors. Get optimized content,
                    a fast website, a better user experience, and more so you
                    rank on the first page above your competitors.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="You get weekly updates."
                  loading="lazy"
                />
                <div>
                  <h3>We Give You Weekly Updates</h3>
                  <p>
                    We know that you’re busy and you might not have time to
                    check in with us every day. That’s why we send out a weekly
                    update email. This way, you can always be in the loop
                    without having to put in any extra effort.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="You get content / service page creation and optimization."
                  loading="lazy"
                />
                <div>
                  <h3>Content / Service Page Creation / Optimization</h3>
                  <p>
                    We write content and service pages for your website, so you
                    don’t have to. We use data from our SEO audit, keyword
                    research, and competitor analysis to write the best pages
                    that bring the most sales and revenue.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="You get to know everything we're doing- 100% transparency."
                  loading="lazy"
                />
                <div>
                  <h3>You'll Know Everything We're Doing</h3>
                  <p>
                    We're 100% transparent. You’ll never have to wonder what
                    we're doing or if we're working on your campaign. Our goal
                    is to make sure that you're always in the loop, so you can
                    feel confident that your campaign is in good hands.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="One-on-one expert support."
                  loading="lazy"
                />
                <div>
                  <h3>Tracking and Monitoring</h3>
                  <p>
                    We track and monitor your progress to ensure your campaign
                    delivers positive results: more traffic to your website,
                    more customers, more sales, and more revenue. We use tools
                    like Google Analytics, Google Search Console, Ahrefs, and
                    SEMRush.
                  </p>
                </div>
              </Deliverable>
            </Deliverables>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule Your Free Consultation Today!</Button>
              </a>
            </div>
          </div>
        </section> */}
        <section>
          <FAQPageJsonLd
            mainEntity={[
              {
                questionName: 'Why Do I Need SEO?',
                acceptedAnswerText:
                  'If you want to reach more potential customers and want them to see your business when they search for your services,you’ll need an SEO strategy.',
              },
              {
                questionName: 'How Do You Know If You Need Local SEO?',
                acceptedAnswerText:
                  'You need local SEO if the customers you serve are in the same location or city as your business. If you want to target customers in surrounding cities, you’ll still need local SEO.',
              },
              {
                questionName: 'What is the Cost of SEO?',
                acceptedAnswerText:
                  'SEO services start at $1000 - $5000 for local businesses. This depends on the type of business, the competition, the location, and the marketing budget.',
              },
              {
                questionName: 'Why Does SEO Cost So Much?',
                acceptedAnswerText:
                  'It takes time to show results, it requires a lot of resources to build and maintain a campaign, and it often relies on the expertise of an SEO specialist to develop and grow your strategy.',
              },
              {
                questionName: 'How Long Does SEO Take to See Results?',
                acceptedAnswerText:
                  'SEO can take three to six months before you see any results from your campaign. This depends on the location, the competition, and any website authority your business has already. Remember that SEO is a long-term strategy and will pay off long after you’ve started. The main thing is to start.',
              },
              {
                questionName:
                  'What is the Difference between SEO and Local SEO?',
                acceptedAnswerText:
                  'SEO (search engine optimization) is the process of improving the visibility and ranking of your website in search engine results pages (SERPs). Local SEO, on the other hand, is focused on optimizing your website for local search results.',
              },
              {
                questionName: 'How Long is Your Contract for Doing SEO?',
                acceptedAnswerText:
                  'Our contracts are month-to-month. You can cancel your contract 30 day prior to the end of the month. But why would you cancel if you’re making more money after you hired us?',
              },
              {
                questionName: 'Can You Guarantee Me #1 Rankings?',
                acceptedAnswerText:
                  'We cannot guarantee first-place rankings. No one can. No one can guarantee rankings because search algorithms are always changing.',
              },
              {
                questionName: 'Do You Have to Change Anything on My Website?',
                acceptedAnswerText:
                  'Sometimes we will have to make changes to your website. If your website is not user-friendly, or we have to improve user experience to help improve your SEO, we will advise  that you make changes. Examples of changes would be adding clickable phone numbers, adding more pages, and improving the design of the web page.',
              },
            ]}
          />
          <div className="medium-container">
            <h2 className="title">Frequently Asked Questions</h2>
            <ReasonSec>
              <div>
                <div className="question">
                  <h3>Why Do I Need SEO?</h3>
                  <p>
                    If you want to reach more potential customers and want them
                    to see your business when they search for your services,
                    you’ll need an SEO strategy.
                  </p>
                  <h3>How Do You Know If You Need Local SEO?</h3>
                  <p>
                    You need local SEO if the customers you serve are in the
                    same location or city as your business. If you want to
                    target customers in surrounding cities, you’ll still need
                    local SEO.
                  </p>
                </div>
                <div className="question">
                  <h3>What are the benefits of SEO?</h3>
                  <p>
                    SEO can be a very effective way to drive organic traffic to
                    your website. It is a long-term strategy that can result in
                    increased website visitors, leads and sales. SEO can also
                    help to improve your brand awareness and visibility online.
                  </p>
                </div>
                <div className="question">
                  <h3>How long does it take for SEO to work?</h3>
                  <p>
                    The effects of SEO can often take weeks or even months to
                    show, depending on the competitiveness of your industry and
                    the effectiveness of your SEO strategy. However, it is
                    important to remember that SEO is a long-term marketing
                    strategy, so the more effort you put into it, the more you
                    will see results.
                  </p>
                </div>
                <div className="question">
                  <h3>What is on-page optimization?</h3>
                  <p>
                    On-page optimization is optimizing the content and structure
                    of your website to improve your visibility in search
                    engines. This can be achieved by optimizing your website's
                    title tags, meta descriptions, and other elements.
                  </p>
                </div>
                <div className="question">
                  <h3>What is the Difference between SEO and Local SEO?</h3>
                  <p>
                    SEO (search engine optimization) is the process of improving
                    the visibility and ranking of your website in search engine
                    results pages (SERPs). Local SEO, on the other hand, is
                    focused on optimizing your website for local search results.
                  </p>
                </div>
                <div className="question">
                  <h3>What is Technical SEO?</h3>
                  <p>
                    Technical SEO includes things like improving site speed,
                    making sure the website is mobile-friendly, and fixing crawl
                    errors.
                  </p>
                  <p>
                    Basically, anything that makes it easier for Google to index
                    and understand your website falls under the umbrella of
                    technical SEO. And while it might sound complicated, there
                    are a few simple things you can do to get started.
                  </p>
                </div>
              </div>
              <div>
                <div className="question">
                  <h3>What is an SEO consultant?</h3>
                  <p>
                    An SEO consultant is an individual who specializes in
                    helping businesses improve their visibility in search
                    engines. They can help with keyword research, on-page
                    optimization, link building, and content marketing.
                  </p>
                </div>
                <div className="question">
                  <h3>What are Keywords?</h3>
                  <p>
                    Keywords are the words and phrases that people enter into
                    search engines when they are looking for information. They
                    are also the words and phrases that describe the topics of
                    your web pages. Using the right keywords on your website can
                    help potential customers find your site more easily.
                  </p>
                </div>
                <div className="question">
                  <h3>What is a Backlink?</h3>
                  <p>
                    A backlink is a link that points from one website to
                    another. If site A links to site B, then site A is said to
                    have given site B a "backlink." Backlinks are also sometimes
                    called "inbound links" or "incoming links."
                  </p>
                  <p>
                    Search engines use backlinks as a way to measure the
                    popularity and importance of a website. If many websites
                    link to a particular website, then that website is likely to
                    be high in quality and relevant to its topic. On the other
                    hand, if few websites link to a particular website, then
                    that website is likely to be less important and less
                    popular.
                  </p>
                </div>
                <div className="question">
                  <h3>What is link building?</h3>
                  <p>
                    Link building is creating high-quality inbound links to your
                    website from other websites. This is done by creating
                    valuable and interesting content and then reaching out to
                    other website owners and asking them to link to it.
                  </p>
                </div>
                <div className="question">
                  <h3>Can I Do SEO Myself?</h3>
                  <p>Yes, you can do SEO yourself!</p>
                  <p>
                    However, it is important to keep in mind that SEO is a
                    complex and time-consuming process, so it is important to be
                    realistic about the amount of time and effort you are able
                    to put into it. There are also a lot of different moving
                    parts to SEO, so it can be helpful to hire an experienced
                    SEO professional to help you with the process.
                  </p>
                </div>
                <div className="question">
                  <h3>What is Website UX?</h3>
                  <p>
                    Website UX is all about how a website's users interact with
                    and experience the site. It encompasses everything from how
                    easy it is to navigate the site and find what you're looking
                    for, to the overall look and feel of the site. Creating a
                    positive UX for your website's visitors can help to ensure
                    that they have a good experience on your site, and are more
                    likely to return in the future.
                  </p>
                </div>
              </div>
            </ReasonSec>
          </div>
        </section>
        <div className="call-to-action-grid">
          <img
            src="/images/business-man-calling-about-seo-services.webp"
            alt="A man calling to inquire about SEO and how it could help his business."
            title="A man calling to inquire about SEO and how it could help his business."
            width="1000px"
            height="667px"
          />
          <div className="container">
            <h2>
              Ready to Grow Your Business with Search Engine Optimization?
            </h2>
            <p>
              Contact us today and we'll show you how SEO can help get leads
              without paying for online ads.
            </p>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Book Your Free SEO Call Today &#8594;</Button>
              </a>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default Rockville

const ReasonSec = styled.div`
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
  }
`

const Cities = styled.div`
  margin: 0 auto;
  @media screen and (min-width: 508px) {
    @media (min-width: 768px) {
      margin: 3rem 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
    }
  }

  @media screen and (min-width: 1024px) {
    @media (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`

const City = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  img {
    width: 40px;
    height: 40px;
    margin: 0;
    margin-right: 0.5rem;
  }

  a,
  p {
    margin: 0;
    font-weight: 700;
  }
`

const Deliverables = styled.div`
  margin: 2rem 0;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
`

const Deliverable = styled.div`
  margin: 1rem 0;
  display: flex;

  img.check {
    margin: 0;
    margin-right: 1.5rem;
    width: 50px;
    height: 50px;
    }

    h3 {
      margin: 1rem 0;
    }

  }
`
