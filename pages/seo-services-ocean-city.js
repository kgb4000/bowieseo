/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import MainLayout from '../components/MainLayout'
import PageHero from '../components/PageHeroSection'
import Button from '../components/Button'
import HeroSection from '../components/HeroSection'
import { Business, Businesses } from '../components/BusinessesWeWorkWith'
import { City, Cities } from '../components/CitySection'
import { ReasonSec } from '../components/LocatioPageEssentials'
import { getPosts } from '../lib/data'

import { NextSeo, FAQPageJsonLd } from 'next-seo'

const calendly = 'https://calendly.com/bowieseo/30min'

export const getStaticProps = async () => {
  const data = await getPosts()

  return {
    props: {
      data,
    },
  }
}

const SEOAgency = 'SEO services in Ocean City'

export default function OceanCitySEO() {
  const SEO = {
    title: 'SEO Services Ocean City MD | Increase Leads, Boost Revenue',
    description:
      'We provide SEO services in Ocean City, Maryland. Our experts help businesses get found by customers searching for services like yours. Call us today!',
    canonical: 'https://bowieseo.com/seo-services-ocean-city',
    openGraph: {
      title: 'SEO Services Ocean City MD | Increase Leads, Boost Revenue',
      description:
        'We provide SEO services in Ocean City, Maryland. Our experts help businesses get found by customers searching for services like yours. Call us today!',
      image: [
        {
          url: 'https://bowieseo.com/images/ocean-city-seo-company.jpg',
          width: 1200,
          height: 450,
          alt: 'Ocean City SEO Company',
          type: 'image/jpg',
        },
      ],
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <MainLayout>
        <HeroSection
          heroText="Get SEO Services in Ocean City, MD [Increase Leads and Boost Revenue]"
          subText="We provide SEO solutions to help businesses in Ocean City get more customers and grow."
          backgroundImage="/images/seo-services-ocean-city-maryland-cover.webp"
          backgroundHeight="80vh"
          backgroundPosition="bottom"
          buttonText="Get Your Free SEO Audit &#8594;"
          buttonLink="/free-seo-audit"
        />
        <section>
          <div className="container">
            <div className="grid">
              <div>
                <h2>
                  You Have 2 Options: Lose Money Every Month or Get SEO Services
                  in Ocean City and Generate Profits
                </h2>
                <p>You have a business in Ocean City.</p>
                <p>
                  You're trying to figure out how to get more leads and
                  customers coming in, but despite your best efforts, you're not
                  getting the results you're hoping for.
                </p>
                <p>
                  You've tried digital marketing strategies like Facebook and
                  Instagram ads, Google ads, and even invested in lead
                  generation services from HomeAdvisor, Thumbtack, and Angie's
                  List.
                </p>
                <p>But you'r e not getting leads.</p>
                <p>
                  Despite your efforts, you get poor-quality leads and come to
                  the realization that you're simply wasting your valuable time
                  and money.
                </p>
                <p>
                  You need a system to get quality leads and customers into your
                  business regularly, and you need to own that system.
                </p>
                <p>That’s where we come in.</p>
                <p>
                  We’re a{' '}
                  <Link href="/maryland-seo-company" passHref>
                    <a>Maryland SEO Company</a>
                  </Link>{' '}
                  offering SEO services in Ocean City.
                </p>
                <p>
                  Search engine optimization can get you more leads and
                  customers, and help you building your lead generation system
                  specifically for your business.
                </p>
                <p>
                  You don't have to worry about digital marketing that doesn’t
                  work or paying for leads from lead generation companies that
                  just take your money.
                </p>
                <p>
                  We’ll help you build a system to generate your leads while you
                  concentrate on running your business with SEO.
                </p>
                <p>Call us to get started or to learn more.</p>
              </div>
              <img
                src="/images/seo-services-ocean-city-md.webp"
                className="page-img-left"
                alt="SEO Services in Ocean City, MD."
                title="SEO Services in Ocean City, MD."
                width="600"
                height="1000"
              />
            </div>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule Your Free Consultation Today!</Button>
              </a>
            </div>
          </div>
        </section>
        <section className="reasons-section">
          <div className="medium-container">
            <h2 className="title">
              7 Reasons Ocean City Business Owners Must Invest in SEO
            </h2>
            <p className="sub-text">
              Partner with an SEO company that can build your online presence,
              and bring more leads and customers fro your business.
            </p>
            <h3>#1. SEO Can Get Leads and Sales 24 Hours a Day</h3>
            <p>
              Search engine optimization sends you qualified traffic and leads
              interested in your services and more likely to buy something from
              you than people who happen to stumble across your site.
            </p>
            <h3>#2. SEO Can Help You Save Money on Online Advertising</h3>
            <p>
              Another great thing about SEO is that it can help you save money
              online advertising. If you're spending money on Google AdWords or
              other forms of online advertising, you can use SEO to improve your
              website so that you get more traffic from organic search results.
              This can help you save money on your advertising budget and get
              more leads and sales from your website.
            </p>
            <h3>
              #3. SEO Can Help You Get More Leads and Sales from Your Website
            </h3>
            <p>
              SEO can help you get more leads and sales from your website. By
              appearing on the first page of search results, you can get more
              traffic to your website and generate more leads and sales for your
              business. Also, when more people see your website on the first
              page, you build trust and credibility with potential customers.
            </p>
            <h3>#4. You can Save Money on Facebook and Google Ads</h3>
            <p>
              Like most companies, you're always searching for methods to save
              money. Reducing your reliance on paid advertising (Facebook and
              Google ads) is one of the finest methods. An experienced{' '}
              <Link href="/maryland-seo-company" passHref>
                <a>SEO company</a>
              </Link>{' '}
              can assist you in growing your traffic organically and avoiding
              having to rely as much (or at all) on sponsored material. This
              saves you money and gives you a more sustainable long-term growth
              strategy.
            </p>
            <h3>#5. SEO Can Help You Build Better Websites</h3>
            <p>
              SEO can also help you build better websites. Using the correct
              keyword phrases and ensuring your website is well-optimized, you
              can make your website more user-friendly and easier to navigate.
              This can help improve your website's conversion rate and increase
              your leads and sales.
            </p>
            <h3>#6. SEO Can Help You Stay Ahead of Your Competition</h3>
            <p>
              You'll always be behind your competition if you're not using
              search engine optimization. By ranking higher in search, you can
              get more traffic to your website and attract leads. Also, by using
              SEO, you can stay ahead of your competition by appearing in the
              search results before they do.
            </p>
            <h3>#7. Search Engines are Not Going Away</h3>
            <p>
              Search engines are not going away. They are becoming more critical
              as more people use them to find information online. SEO will be
              necessary for businesses as long as people use search engines. If
              you're not using SEO, you're missing out on a lot of traffic and
              potential customers.
            </p>
          </div>
          <div className="container">
            <p className="center sub-text">
              You have nothing to lose. Book a free consultaion and learn how
              SEO can help grow your business!
            </p>
          </div>
          <div className="btn">
            <a href={calendly} target="_blank" rel="noreferrer">
              <Button>Schedule Your Free Consultation!</Button>
            </a>
          </div>
        </section>
        <section>
          <div className="medium-container">
            <h2 className="title">
              What is Search Engine Optimization, and How Can it Help Businesses
              in Ocean City?
            </h2>
            <p>
              SEO stands for{' '}
              <Link href="/search-engine-optimization" passHref>
                Search Engine Optimization
              </Link>
              , which is the practice of optimizing a website's content,
              structure, and other elements to rank higher in search engine
              results pages (SERPs) for relevant keywords and phrases. In simple
              terms, SEO helps businesses improve their online visibility,
              attract more website traffic, and ultimately, generate more leads
              and sales.
            </p>
            <p>
              In Ocean City, SEO can be a game-changer for businesses looking to
              stand out in a highly competitive market.
            </p>
            <p>
              With the growing importance of online search, having a strong
              online presence is critical for businesses to succeed. By
              optimizing your website for search engines, businesses can reach a
              wider audience, attract more qualified leads, and ultimately
              increase their revenue.
            </p>
            <p>
              For instance, if you own a plumbing business in Ocean City, SEO
              can help you appear at the top of search results when potential
              customers search for "best plumber in Ocean City." By optimizing
              your website's content, metadata, and local citations, you can
              increase your chances of showing up in the top search results and
              attract more customers to call your business.
            </p>
            <p>
              In short, SEO is a powerful tool for businesses in Ocean City,
              Maryland, to improve their online visibility, attract more website
              traffic, and ultimately increase their revenue.
            </p>
            <h3>We offer SEO and Local SEO in these cities near Ocean City:</h3>
            <ul>
              <li>Ocean Pines, MD</li>
              <li>Easton, MD</li>
              <li>Berlin, MD</li>
              <li>Snow Hill, MD</li>
              <li>
                <Link href="seo-services-salisbury-md" passHref>
                  <a>Salisbury, MD</a>
                </Link>
              </li>
              <li>St. Michaels, MD</li>
            </ul>
          </div>
          <div className="container">
            <p className="sub-text">
              You have nothing to lose. Book a free consultaion and learn how
              over time, SEO can help increase leads, customers and boost your
              revenue.
            </p>
          </div>
          <div className="btn">
            <a href={calendly} target="_blank" rel="noreferrer">
              <Button>Book a Free Consultation!</Button>
            </a>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="grid">
              <img
                src="/images/seo-services-ocean-city-md-businesses.webp"
                className="page-img"
                alt="Home service buisnesses we work with in Ocean City."
                title="Home service businesses we work with in Ocean City."
              />
              <div>
                <h2>Businesses We Work With in Ocean City, Maryland.</h2>
                <p>
                  We work with businesses in Ocean City that provide services to
                  homeowners and businesses. We focus on helping you increase
                  your online presence, leads, and sales.
                </p>
                <Businesses>
                  <Business>
                    <img
                      src="/images/icons/asphalt-paving-contractor.png"
                      className="business-icon"
                      alt="Businesses our company works with - Asphalt paving companies."
                      title="Businesses we work with - Asphalt paving companies."
                      loading="lazy"
                    />
                    <p>Asphalt Paving Companies</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/plumbing-contractors.png"
                      className="business-icon"
                      alt="Businesses our company works with - Plumbing Contractors."
                      title="Businesses our company works with - Plumbing Contractors."
                      loading="lazy"
                    />
                    <p>Plumbing Contractors</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/hvac-contractors.png"
                      className="business-icon"
                      alt="Businesses we work with - HVAC Contractors."
                      title="Businesses we work with - HVAC Contractors."
                      loading="lazy"
                    />
                    <p>HVAC Contractors</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/roofing-contractors.png"
                      className="business-icon"
                      alt="Businesses we work with - Roofing Contractors."
                      title="Businesses we work with - Roofing Contractors."
                      loading="lazy"
                    />
                    <p>Roofing Contractors</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/landscaping-companies.png"
                      className="business-icon"
                      alt="Businesses we work with - Landscaping Companies."
                      title="Businesses we work with - Landscaping Companies."
                      loading="lazy"
                    />
                    <p>Landscaping Companies</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/pest-control-companies.png"
                      className="business-icon"
                      alt="Businesses we work with - Pest Control Companies."
                      title="Businesses we work with - Pest Control Companies."
                      loading="lazy"
                    />
                    <p>Pest Control Companies</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/electrical-contractors.png"
                      className="business-icon"
                      alt="Businesses we work with - Electrical Contractors."
                      title="Businesses we work with - Electrical Contractors."
                      loading="lazy"
                    />
                    <p>Electrical Contractors</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/swimming-pool-builders.png"
                      className="business-icon"
                      alt="Businesses we work with - Swimming Pool Builders."
                      title="Businesses we work with - Swimming Pool Builders."
                      loading="lazy"
                    />
                    <p>Swimming Pool Builders</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/junk-removal-companies.png"
                      className="business-icon"
                      alt="Asphalt paving companies - Businesses we work with."
                      title="Businesses we work with - Asphalt paving companies."
                      loading="lazy"
                    />
                    <p>Junk Removal Companies</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/general-contractors.png"
                      className="business-icon"
                      alt="Businesses we work with - General Contractors."
                      title="Businesses we work with - General Contractors."
                      loading="lazy"
                    />
                    <p>General Contractors</p>
                  </Business>
                </Businesses>
                <p>
                  Call us today and let’s see how we can help find opportunities
                  to help boost your sales and revenue.
                </p>
              </div>
            </div>
            <div className="container">
              <p className="center sub-text">
                You have nothing to lose. Book a free consultaion today!
              </p>
            </div>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Book a Free Consultation Today!</Button>
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="medium-container">
            <h2 className="title">
              In a Sea of Ocean City SEO Companies, Why Work With Us?
            </h2>
            <p className="sub-text">
              Work with Bowie SEO and experience the difference between our
              company and other SEO companies.
            </p>
            <div className="grid">
              <img
                src="/images/seo-company-in-ocean-city-md.webp"
                className="page-img"
                width="1000"
                height="600"
                alt="SEO services company in Ocean City."
                title="SEO services company in Ocean City."
                loading="lazy"
              />
              <div>
                <div className="reasons">
                  <h3>#1. We Create Customized SEO Solutions</h3>
                  <p>
                    As SEO consultants, we know every business and website will
                    need different services. That's why we offer custom SEO
                    services to help your business succeed. We create a custom
                    SEO strategy for each company we work with.
                  </p>
                </div>
                <div className="reasons">
                  <h3>#2. No Long-Term Contracts</h3>
                  <p>
                    We don't have any long-term contracts for our SEO services.
                  </p>
                  <p>Just pay monthly.</p>
                </div>
                <div className="reasons">
                  <div>
                    <h3>
                      #3. We Don't Work With Your Competitors in Ocean City
                    </h3>
                    <p>
                      As your SEO company, we won't work with your competitors.
                      Some SEO companies don't care who they work with. They'll
                      work with you and your competition in the same city.
                      That's crazy.
                    </p>
                  </div>
                </div>
                <div className="reasons">
                  <div>
                    <h3>
                      #4. We Become Your Partners, Not an SEO Company You Just
                      Hired!
                    </h3>
                    <p>
                      When you work with us, we look at your business as if it
                      was our business. We want to see your business succeed! We
                      don't just want to get you to rank higher for a few
                      keywords and then disappear. We want to help you grow your
                      business, for years to come.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule a Free Consultation Today!</Button>
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="medium-container">
            <h2 className="title">Frequently Asked Questions</h2>
            <ReasonSec>
              <div>
                <div className="question">
                  <h3>What is SEO and how does it work?</h3>
                  <p>
                    SEO is short form for “Search engine optimization”. It is a
                    way to make a website show up higher on a search engine,
                    like Google, so more people can find it. It involves using
                    special techniques to make the website easier for the search
                    engine to understand and show it to people who are looking
                    for information on a certain topic. This can help more
                    people visit the website and learn about what it offers.
                  </p>
                </div>
                <div className="question">
                  <h3>Is SEO worth it for small business?</h3>
                  <p>Yes, SEO can be very worth it for small businesses.</p>
                  <p>
                    For small businesses, SEO can be an extremely effective
                    marketing strategy that can significantly enhance their
                    visibility and attract new customers. By optimizing their
                    website and online presence for search engines, small
                    businesses can improve their rankings in search results, and
                    ultimately generate more organic traffic. The result is
                    often increased brand awareness, more website traffic, and
                    potential leads or sales. Even though SEO may require
                    substantial time and effort to achieve results, the
                    long-term benefits can be substantial. It is also an
                    economical approach for small businesses to compete with
                    larger companies in their industry.
                  </p>
                  <h3>How much does SEO cost in Ocean City?</h3>
                  <p>
                    The cost for SEO ranges from $1000 to $5,000. The cost will
                    vary depending on the competitiveness of your industry and
                    the keywords you are targeting.
                  </p>
                </div>
                <div className="question">
                  <h3>How long does it take for SEO to work?</h3>
                  <p>
                    It usually takes about three to six months before you see
                    results, but it's important to keep working hard at it to
                    make sure it stays good. If you use SEO best practices, make
                    really good content, and get good backlinks, your website
                    can slowly get better and better in search results. This
                    will attract more people to your website and maybe even help
                    you sell more services!
                  </p>
                </div>
                <div className="question">
                  <h3>What is better PPC or SEO?</h3>
                  <p>
                    The answer to this question depends on your goals. If you
                    require quick outcomes, Google Ads is the better
                    alternative. Nonetheless, if you seek a long-term marketing
                    tactic to expand your brand, and gradually generate more
                    traffic and leads from Google, then SEO would be the
                    preferred choice.
                  </p>
                </div>
              </div>
              <div>
                <div className="question">
                  <h3>What is the Difference between SEO and Local SEO?</h3>
                  <p>
                    SEO can be thought of as participating in a worldwide race,
                    trying to be the best among countless other competitors.
                    However, for businesses that operate only in one area, Local
                    SEO is like participating in a race that is limited to your
                    town. This is especially important for local stores,
                    restaurants, and services that want to be easily discovered
                    by people in their community who are searching for services
                    or products in their area, such as "pizza places near me" or
                    "hair salons in my area." Through Local SEO, these
                    businesses can increase their visibility and make sure they
                    don't get lost in the highly competitive global market, as
                    they stand a better chance of being discovered by customers
                    who are looking for services nearby.
                  </p>
                </div>
                <div className="question">
                  <h3>How long would it take to rank my website?</h3>
                  <p>
                    Ranking a website in search engines like Google is like
                    playing a game. It takes time and practice to get better and
                    win. Just like in a game, you have to work hard to make your
                    website better and easier to find by people who are looking
                    for it. This can take a few months or longer depending on
                    how well you play the game and how many other players are
                    trying to win too. The most important thing is to keep
                    trying and making your website the best it can be, so that
                    more people can find it and use it.
                  </p>
                </div>

                <div className="question">
                  <h3>Can You Guarantee Me #1 Rankings on Google?</h3>
                  <p>
                    Achieving a top spot in Google's search rankings is similar
                    to competing in a race. You need to have remarkable skills
                    and speed to outdo all the other competitors. Just as it is
                    uncertain who will win a race, it is also difficult to know
                    who will be ranked first in Google. However, you can improve
                    your chances of success by refining your skills, and
                    implementing strategies to improve your website. SEO experts
                    help to enhance your website's SEO performance so that it
                    can be one of the best contenders in the race. Although
                    success is not guaranteed, continuous practice and
                    improvement will increase the likelihood of achieving better
                    results in the race.
                  </p>
                </div>
                <div className="question">
                  <h3>Do You Have to Change My site for SEO to work?</h3>
                  <p>We might have to.</p>
                  <p>
                    If your website is not user-friendly, we may need to modify
                    the design to make it better. We will also develop or update
                    your website's sitemap to assist search engines in easily
                    finding and indexing your site. Moreover, we will set up
                    Google Analytics for you to track your SEO progress over
                    time. We will also making changes to your website's title,
                    meta tags, and content to ensure they include the most
                    profitable keywords for your business.
                  </p>
                </div>
              </div>
            </ReasonSec>
          </div>
        </section>
        <div className="call-to-action-grid">
          <img
            src="/images/seo-services-ocean-city-maryland.webp"
            alt="Man calling to get SEO services in Ocean City."
            title="Man calling to get SEO services in Ocean City."
            width="1000px"
            height="65px"
            loading="lazy"
          />
          <div className="container">
            <h2>Ready to Get More Leads and Boost Your Sales and Revenue?</h2>
            <p>
              Get our {SEOAgency} and we'll show you how SEO can help you get
              more Ocean City customers.
            </p>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule a Free Consultation!</Button>
              </a>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}
