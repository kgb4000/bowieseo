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
    title: 'Search Engine Optimization Services for Home Service Businesses',
    description:
      'We provide local SEO services for small businesses in Maryland and DC. Get more customers and web traffic, and increase revenue. Contact us today!',
    type: 'website',
    canonical: 'https://bowieseo.com/search-engine-optimization',
    openGraph: {
      title: 'Local SEO Services for Small Business in Maryland and DC',
      description:
        'We provide local SEO services for small businesses in Maryland and DC. Get more customers and web traffic, and increase revenue. Contact us today!',
      type: 'website',
      image: [{}],
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <MainLayout>
        <HeroSection
          heroText="Search Engine Optimization"
          subText="Use this powerful inbound marketing method to get customers to find your business online and stop paying for ads!"
          backgroundImage="/images/search-engine-optimization-header.webp"
          backgroundHeight="70vh"
          backgroundPosition="top center"
          buttonText="Schedule a free consultation today!"
          buttonLink={calendly}
        />
        <section>
          <div className="medium-container">
            <div className="grid">
              <div>
                <h2>
                  Did You Know You’re Losing Money Every Month Because You’re
                  Not Showing Up On the First Page of Google?
                </h2>
                <p>
                  If one of your services costs <b>$1000 to $4,000</b>, what
                  would three extra monthly jobs do for your business ?
                </p>
                <p>
                  What if one of your services costs <b>$500 to $1,500</b>, what
                  would six extra jobs a month do for your business?
                </p>
                <p>
                  Every day when someone searches for your services and you
                  don’t appear in the search results, you’re losing money.
                </p>
                <p>How?</p>
                <p>
                  Because they're buying from your competitors instead of you.
                </p>
                <p>Try it yourself.</p>
                <p>
                  Search for one of your services and see if your website
                  appears on the first page.
                </p>
                <p>If it does, that’s fantastic.</p>
                <p>If it doesn't, you’re losing money.</p>
                <p>
                  You’re losing money that’s going to your competitors, who are
                  showing up in the search results when people search for your
                  services.
                </p>
                <p>Is this ok with you?</p>
                <p>I think not.</p>
                <p>
                  And it will only get worse if you don’t do something about it.
                </p>
                <p>
                  You’ll have to keep spending money on Facebook and Google ads
                  to get people to come to your website.
                </p>
                <p>And ad costs keep getting more and more expensive.</p>
                <p>But there is a better way.</p>
                <p>
                  A way to get customers to find your business online when
                  they’re ready to spend.
                </p>
                <p>
                  It’s called search engine optimization, and it can bring more
                  leads and customers to your business, without paying for any
                  ads.
                </p>
                <p>
                  Want to see how search engine optimization could help your
                  business?
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
                <Button>Schedule Your Free Consultation Today!</Button>
              </a>
            </div>
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
                  93% of people use search engines like Google to find local
                  businesses like yours.
                </p>
                <p>
                  That’s a lot of people searching, and that’s why you need SEO
                  or{' '}
                  <Link href="/local-seo-services" passHref>
                    local SEO
                  </Link>
                  .
                </p>
                <p>
                  Imagine coming to work, and your email inbox is full of people
                  requesting quotes for your services.
                </p>
                <p>How did they find you?</p>
                <p>
                  Because you show up on the first page when they search for
                  your services.
                </p>
                <p>
                  Your website is getting 50,000 visitors per month, and you
                  started doing SEO one year ago.
                </p>
                <p>And you stopped paying for ads.</p>
                <p>
                  Your customer service department is busy with phone calls
                  every day, and your technicians have work booked out 6 months
                  into the year.
                </p>
                <p>People see you as the expert in your industry.</p>
                <p>
                  Your business is growing, and you need to hire more staff and
                  technicians and buy more equipment.
                </p>
                <p>
                  While other businesses are struggling to get work for their
                  employees, your business is thriving.
                </p>
                <p>Search engine optimization (SEO) can make this happen.</p>
                <p>
                  SEO is a practice that improves your website and increases
                  your online visibility in search engines.
                </p>
                <p>
                  With more online visibility, you expose your business to more
                  people searching for your services.
                </p>
                <p>
                  More people seeing your website means more website visits and
                  the opportunity to convert those leads into paying customers.
                </p>
                <p>
                  When you practice SEO, you get free organic traffic without
                  paying for any online ads.
                </p>
                <p>Want to learn more?</p>
              </div>
            </div>

            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule Your Free Consultation Today!</Button>
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="medium-container">
            <h2 className="title">
              Our SEO Process that Makes You Stand Out from Your Competition on
              Google
            </h2>
            <Deliverables>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Perform an SEO Audit."
                />
                <div>
                  <h3>SEO Audit</h3>
                  <p>
                    An SEO audit finds elements on your website that stop your
                    site from ranking higher in search engines and your website
                    presence.
                  </p>
                  <p>
                    We find the problems on every page of your website, and we
                    also determine what improvements can be made to make your
                    site perform better and rank higher. After your SEO audit,
                    we have data and information to make better decisions.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Get an action plan."
                />
                <div>
                  <h3>Action Plan</h3>
                  <p>After your SEO audit, we develop your action plan.</p>
                  <p>
                    Your action plan will detail the tactics and strategies we
                    will implement to get your website ranking on the first
                    page. After overseeing many SEO campaigns, we can tell you
                    what we need to do to improve your SEO performance.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Do technical SEO."
                />
                <div>
                  <h3>Technical SEO</h3>
                  <p>We perform a Technical SEO audit.</p>
                  <p>
                    We find and fix any technical elements that can affect your
                    website and lower your chances of ranking in search engines.
                    We find and fix elements such as 404 errors, core web
                    vitals, crawl depth, broken links, and indexation issues.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Do keyword research."
                />
                <div>
                  <h3>Keyword Research</h3>
                  <p>
                    One of the most important factors that determine if your
                    website appears in the search results or not is choosing the
                    right keywords.
                  </p>
                  <p>
                    To find the right keywords, we do extensive keyword
                    research. We find the best and most profitable keywords with
                    keyword research tools and through competitor analysis and
                    expanding on keywords you already rank for.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Create and optimize your existing content."
                />
                <div>
                  <h3>Create and Optimize Existing Content</h3>
                  <p>
                    A crucial part of your SEO strategy is creating and
                    optimizing your content.
                  </p>
                  <p>
                    Your content is the main element in inbound marketing which
                    will attract customers actively looking for your services.
                    We use keywords found in the keyword research process to
                    write content that will boost your rankings and attract
                    links.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Build links to your website."
                />
                <div>
                  <h3>Link Building</h3>
                  <p>We build links to your website.</p>
                  <p>
                    Backlinks are one of the top-ranking factors. Without them,
                    you will not rank on the first page for some of your more
                    competitive keywords.
                  </p>
                  <p>
                    You need backlinks because they send signals to the search
                    engines of how popular your website is.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Track and monitor your SEO performance."
                />
                <div>
                  <h3>Tracking and Monitoring Your Progress</h3>
                  <p>
                    Not finished yet. We must track and monitor our actions to
                    ensure your campaign’s success.
                  </p>
                  <p>
                    We track and monitor your keyword rankings, your position in
                    the search results, your competitor’s websites and keywords,
                    and any algorithm updates.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Repeating the Process."
                />
                <div>
                  <h3>Repeating the Process</h3>
                  <p>
                    We repeat the entire process every 6 months. We find new
                    keywords, optimize existing pages, build more links, write
                    more content, and keep an eye on your competitors.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Weekly Updates."
                />
                <div>
                  <h3>Weekly Updates</h3>
                  <p>
                    We repeat the entire process every 6 months. We find new
                    keywords, optimize existing pages, build more links, write
                    more content, and keep an eye on your competitors.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Monthly one-on-one Talks."
                />
                <div>
                  <h3>Monthly One-on-one Talks</h3>
                  <p>
                    We meet and talk with you every month to discuss any
                    opportunities we discover, and to ensire that your SEO
                    strategy is on track, and that your business is growing.
                  </p>
                </div>
              </Deliverable>
            </Deliverables>
            <p className="subtext">
              P.S. We only perform ‘White Hat’ SEO which conforms to the rules
              and policies of the search engines. With white hat SEO practices,
              your website will not get penalized or banned.
            </p>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule a Free Consultation Today!</Button>
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="grid">
              <img
                src="/images/home-service-business-general-contractor.webp"
                className="page-img"
                alt="Home service businesses we work with - General Contractors."
                title="Home service businesses we work with - General Contractors."
              />
              <div>
                <h2>Small Businesses We Want to Work With</h2>
                <Businesses>
                  <Business>
                    <img
                      src="/images/icons/asphalt-paving-contractor.png"
                      className="business-icon"
                      alt="Businesses our company works with - Asphalt paving companies."
                      title="Businesses we work with - Asphalt paving companies."
                    />
                    <p>Asphalt Paving Companies</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/plumbing-contractors.png"
                      className="business-icon"
                      alt="Businesses our company works with - Plumbing Contractors."
                      title="Businesses our company works with - Plumbing Contractors."
                    />
                    <p>Plumbing Contractors</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/hvac-contractors.png"
                      className="business-icon"
                      alt="Businesses we work with - HVAC Contractors."
                      title="Businesses we work with - HVAC Contractors."
                    />
                    <p>HVAC Contractors</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/roofing-contractors.png"
                      className="business-icon"
                      alt="Businesses we work with - Roofing Contractors."
                      title="Businesses we work with - Roofing Contractors."
                    />
                    <p>Roofing Contractors</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/landscaping-companies.png"
                      className="business-icon"
                      alt="Businesses we work with - Landscaping Companies."
                      title="Businesses we work with - Landscaping Companies."
                    />
                    <p>Landscaping Companies</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/pest-control-companies.png"
                      className="business-icon"
                      alt="Businesses we work with - Pest Control Companies."
                      title="Businesses we work with - Pest Control Companies."
                    />
                    <p>Pest Control Companies</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/electrical-contractors.png"
                      className="business-icon"
                      alt="Businesses we work with - Electrical Contractors."
                      title="Businesses we work with - Electrical Contractors."
                    />
                    <p>Electrical Contractors</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/swimming-pool-builders.png"
                      className="business-icon"
                      alt="Businesses we work with - Swimming Pool Builders."
                      title="Businesses we work with - Swimming Pool Builders."
                    />
                    <p>Swimming Pool Builders</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/junk-removal-companies.png"
                      className="business-icon"
                      alt="Asphalt paving companies - Businesses we work with."
                      title="Businesses we work with - Asphalt paving companies."
                    />
                    <p>Junk Removal Companies</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/general-contractors.png"
                      className="business-icon"
                      alt="Businesses we work with - General Contractors."
                      title="Businesses we work with - General Contractors."
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
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule a Free Consultation Today!</Button>
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h2 className="title">Areas We Cover with SEO</h2>
            <p className="center">We provide local SEO for busniess in:</p>
            <Cities>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Annapolis SEO"
                  title="Annapolis SEO"
                />
                <p>Annapolis</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Baltimore SEO"
                  title="Baltimore SEO"
                />
                <Link href="/baltimore-seo" passHref>
                  <a>Baltimore, MD</a>
                </Link>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Bowie SEO"
                  title="Bowie SEO"
                />
                <Link href="/" passHref>
                  <a>Bowie, MD</a>
                </Link>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="SEO Company Bethesda, MD"
                  title="SEO Company Bethesda, MD"
                />
                <Link href="/seo-company-bethesda-md" passHref>
                  <a>Bethesda, MD</a>
                </Link>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Columbia, MD"
                  title="Columbia, MD"
                />
                <Link href="/local-seo-columbia-md" passHref>
                  <a>Columbia, MD</a>
                </Link>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Crofton, MD"
                  title="Crofton, MD"
                />
                <Link href="/seo-services-crofton-md" passHref>
                  <a>Crofton, MD</a>
                </Link>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="SEO Company Chesapeake Beach, MD"
                  title="SEO Company Chesapeake Beach, MD"
                />
                <p>Chesapeake Beach, MD</p>
              </City>
              <City>
                <img src="/images/icons/map-location.png" />
                <p>Glen Burnie</p>
              </City>
              <City>
                <img src="/images/icons/map-location.png" />
                <p>Hyattsville, MD</p>
              </City>
              <City>
                <img src="/images/icons/map-location.png" />
                <Link href="/seo-company-laurel-md" passHref>
                  <a>Laurel, MD</a>
                </Link>
              </City>
              <City>
                <img src="/images/icons/map-location.png" />
                <Link href="/seo-services-ocean-city" passHref>
                  <a>Ocean City, MD</a>
                </Link>
              </City>
              <City>
                <img src="/images/icons/map-location.png" />
                <p>Odenton, MD</p>
              </City>
              <City>
                <img src="/images/icons/map-location.png" />
                <p>Potomac, MD</p>
              </City>
              <City>
                <img src="/images/icons/map-location.png" />
                <Link href="/rockville-seo-company" passHref>
                  <a>Rockville, MD</a>
                </Link>
              </City>
              <City>
                <img src="/images/icons/map-location.png" />
                <Link href="/seo-services-salisbury-md" passHref>
                  <a>Salisbury, MD</a>
                </Link>
              </City>
              <City>
                <img src="/images/icons/map-location.png" />
                <p>Gaithersburg, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="SEO Company Kensington, MD"
                  title="SEO Company Kensington, MD"
                />
                <Link href="/seo-company-kensington-md" passHref>
                  <a>Kensington, MD</a>
                </Link>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="SEO Company Silver Spring, MD"
                  title="SEO Company Silver Spring, MD"
                />
                <p>Silver Spring, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="SEO Company Greenbelt, MD"
                  title="SEO Company Greenbelt, MD"
                />
                <p>Greenbelt, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="SEO Company Walkersville, MD"
                  title="SEO Company Walkersville, MD"
                />
                <p>Walkersville, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="SEO Company Waldorf MD"
                  title="SEO Company Waldorf MD"
                />
                <Link href="/seo-services-waldorf-md" passHref>
                  <a>Waldorf, MD</a>
                </Link>
              </City>
            </Cities>
            <div className="btn">
              <a href="tel:+2402660588">
                <Button>Call (240) 266-0588 today!</Button>
              </a>
            </div>
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
                <Button>Schedule a Free Consultation Today!</Button>
              </a>
            </div>
          </div>
        </section>
        <section className="bg-color">
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
                <Button>Schedule a Free Consultation!</Button>
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
    grid-gap: 40px;
  }
`

const Deliverable = styled.div`
  margin: 1rem 0;
  display: flex;

  img.check {
    margin: 0;
    margin-right: 1.5rem;
    width: 54px;
    height: 54px;
    }

    h3 {
      margin: 0;
    }

  }
`
