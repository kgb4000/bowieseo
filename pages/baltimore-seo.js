/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Button from '../components/Button'
import PageHero from '../components/PageHeroSection'
import HeroSection from '../components/HeroSection'
import { Card, Container } from '../components/CardSection'
import OfferForm from '../components/OfferFormSection'
import MainLayout from '../components/MainLayout'
import { Businesses, Business } from '../components/BusinessesWeWorkWith'

import { NextSeo, FAQPageJsonLd } from 'next-seo'

const calendly = 'https://calendly.com/bowieseo/30min'

const BaltimoreSEOCompany = () => {
  const SEO = {
    title:
      "Baltimore SEO | Search Engine Optimization for Businesses in B'more",
    description:
      "We create Baltimore SEO strategies for B'more business that want to increase leads, sales and revenue. Call Bowie SEO for your free consultation!",
    type: 'website',
    canonical: 'https://bowieseo.com/baltimore-seo',
    openGraph: {
      title:
        "Baltimore SEO | Search Engine Optimization for Businesses in B'more",
      description:
        "We create Baltimore SEO strategies for B'more business that want to increase leads, sales and revenue. Call Bowie SEO for your free consultation!",
      type: 'website',
      image: [{}],
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <MainLayout>
        <HeroSection
          heroText="Baltimore SEO - Grow Your Business With More Leads and More Customers"
          subText="We help businesses in Baltimore get more leads and increase sales and revenue search engine optimization."
          backgroundImage="/images/search-engine-optimization-header.webp"
          backgroundHeight="70vh"
          backgroundPosition="top center"
          buttonText="Schedule a free consultation today!"
          buttonLink={calendly}
        />
        <section>
          <div className="medium-container">
            <div className="grid">
              <img
                src="/images/how-search-engine-optimization-can-help-your-business.webp"
                className="page-img"
                width="1000"
                height="600"
                alt="Baltimore SEO."
                title="Baltimore SEO."
                loading="lazy"
              />
              <div>
                <h2>
                  Improve Your Rankings and Get Your Business in Front of the
                  Right Customers, or Else ...
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
            <h2>
              Improve Your Rankings and Get Your Business in Front of the Right
              Customers
            </h2>
            <p>
              If you're searching for Baltimore SEO or Baltimore SEO company,
              you know what search engine optimization can do for your business.
              SEO can make your website a magnet to reach and attract new leads
              and potential customers online.
            </p>
            <img
              src="images/baltimore-seo-company.jpg"
              alt="Baltimore SEO services - Bowie SEO"
              width="1200"
              height="450"
              loading="lazy"
            />
            <p>
              With different digital marketing solutions available to small
              businesses in Maryland, it's hard to decide which is the best
              service for your business.
            </p>
            <p>
              But if you want a solution that attracts people actively searching
              for your services and increases your website traffic, Baltimore
              SEO is your business's best digital marketing solution.
            </p>
            <p>
              Our Baltimore SEO firm can help you start an SEO strategy that
              will have your business website ranking higher on Google, attract
              your target audience, and increase your sales and business online.
            </p>
          </div>
        </section>

        <section>
          <div className="medium-container">
            <h2>What is Baltimore SEO?</h2>
            <p>
              Baltimore SEO is search engine optimization for Baltimore
              businesses.
            </p>
            <p>
              SEO is a process that helps you achieve higher rankings in the
              search engines that drive organic traffic to your site.
            </p>
            <p>
              When you rank higher in search engines, you increase your online
              visibility, attract new clients, and build trust with potential
              clients.
            </p>
            <p>
              You can have the best-looking website in the world, but if you
              don't optimize your site for search engines like Google, it will
              not appear on the search engine results pages (SERPs).
            </p>
            <p>
              Nobody will see your website when you don't appear on the SERPs.
            </p>
            <p>
              If you don't start doing SEO, your website may never appear in the
              search results when people search for services you offer.
            </p>
          </div>
        </section>
        <section className="reasons-section">
          <div className="medium-container">
            <h2>5 Reasons You Must Invest in Baltimore SEO in 2022</h2>
            <h3>
              #1. Local SEO Can Help You Reach Your Target Market, and They Can
              Find You
            </h3>
            <p>
              Local SEO can help improve your website's visibility in search
              engine results pages (SERPs), making it easier for potential
              customers to find you online. 
            </p>
            <p>
              It will help build trust and credibility with potential and
              existing clients and improve your reputation online.
            </p>
            <p>
              Local SEO can also help you rank for more keywords, resulting in
              more organic traffic and leads for your business.
            </p>
            <h3>
              #2. Your Website Will Become an Asset, Not Just an Online Flyer
            </h3>
            <p>Your website is one of your most essential marketing tools.</p>
            <p>
              It's a 24/7 salesperson working to promote your business and
              attract new customers.
            </p>
            <p>
              SEO helps you improve your site by making it an asset that
              generates leads and attracts potential clients.
            </p>
            <p>
              When people search for keywords related to your business, your
              site will appear in the search results. When you appear in the
              results, searchers are likelier to click through to your site and
              become customers.
            </p>
            <h3>
              #3. Your Competitors are using Search Engine Optimization [And
              Beating You]
            </h3>
            <p>
              If your competitors are using SEO and you're not, they will beat
              you in the search engine results pages.
            </p>
            <p>They'll get more web traffic, more leads, and more clients.</p>
            <p>
              You can't afford to lose any ground to your competition. SEO will
              level the playing field and help you compete with them for
              keywords.
            </p>
            <h3>#4. Search Engine Optimization is an Investment, Not a Cost</h3>
            <p>
              SEO is an investment in your business's future. It's a long-term
              strategy that will continue to bring more traffic and leads to
              your site for years to come.
            </p>
            <p>
              It's an essential part of your digital marketing strategy and
              should be included in your marketing budget.
            </p>
            <p>The sooner you start, the sooner you'll see results.</p>
            <h3>
              #5. You Need Search Engine Optimization to Survive in the Modern
              World
            </h3>
            <p>
              You need search engine optimization if you want your business to
              survive and thrive in the modern world. It's not an option; it's a
              necessity.
            </p>
            <p>
              Search engine optimization is essential for any business that
              wants to be visible online.
            </p>
            <p>
              If you don't appear in the search results, potential customers
              will never find you, and you'll miss out on valuable leads and
              sales.
            </p>
            <p>
              Don't let your competition beat you to the top of the search
              engines. Invest in Baltimore SEO today.
            </p>
            <p>Ready to take your business to the next level with SEO?</p>
            <p>
              <Link href="/contact" passHref>
                <a>Contact us</a>
              </Link>{' '}
              today and schedule a free consultation to learn how we can help
              you improve your website's visibility, attract new clients, and
              grow your business.
            </p>
          </div>
          <div className="btn">
            <a href={calendly} target="_blank" rel="noreferrer">
              <Button>Book a free consultation</Button>
            </a>
          </div>
        </section>
        <section className="bg-color">
          <div className="container">
            <h2 className="title">
              Our Baltimore SEO Services get You in Front of More Customers
              Searching For Your Services
            </h2>
            <p className="subtext">
              We study the search engines, and we know Baltimore businesses.
              Baltimore SEO will put your website on the first page so you can
              get more phone calls, leads, and sales than your competitors.
            </p>
            <Service>
              <div className="service-card">
                <img
                  src="/images/maryland-seo-company.webp"
                  alt="Baltimore search engine optimization."
                  width="1000"
                  height="665"
                  loading="lazy"
                />
                <div className="service">
                  <h3>Search Engine Optimization</h3>
                  <p>
                    Use search engine optimization to stand out from your
                    competition and get found when it counts. Let your customers
                    find your business, not your competitors.
                  </p>
                </div>
              </div>
              <div className="service-card">
                <img
                  src="/images/google-my-business.webp"
                  alt="Google My Business Management"
                  width="1000"
                  height="665"
                  loading="lazy"
                />
                <div className="service">
                  <h3>GMB Management</h3>
                  <p>
                    An optimized Google My Business page is crucial for you to
                    rank locally. Let us manage your GMB profile and use our
                    experience to boost your SEO performance.
                  </p>
                </div>
              </div>
              <div className="service-card">
                <img
                  src="/images/seo-audit.webp"
                  alt="Free Mini SEO Audit"
                  width="1000"
                  height="665"
                  loading="lazy"
                />
                <div className="service">
                  <h3>Free Mini SEO Audit</h3>
                  <p>
                    Get a free mini SEO audit on us and see how you can improve
                    your SEO rankings and performance to increase your sales and
                    revenue.
                  </p>
                </div>
              </div>
            </Service>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule Your Free Consultation Today!</Button>
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h2 className="title">What You Get With Baltimore SEO</h2>
            <p className="subtext">Our Baltimore SEO Services include:</p>
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
                  <h3>One-on-one Expert Support</h3>
                  <p>
                    Get free expert advice and support from our team of SEO
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
                    We find the best, most profitable, and most relevant
                    keywords that will bring you customers and sales. We build a
                    keyword database that you use to target and build content.
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
                  <h3>GMB Management</h3>
                  <p>
                    Let’s boost your local SEO game by managing your Google My
                    Business page. Get a fully optimized GMB page so that you
                    appear at the top of the map pack and the local search
                    results.
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
                    Set up Google Analytics and Google Console and improve your
                    website by letting you track its performance and activity.
                    These tools give information about how people are using and
                    accessing your site, so that changes can be made to enhance
                    the user experience.
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
                  <h3>Website Audit</h3>
                  <p>
                    Discover the elements stopping your website from ranking and
                    getting you the leads and customers you need. Our SEO audit
                    will show you the exact issues that must be fixed for your
                    SEO campaign to succeed.
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
                    it counts. Optimize your website, so local customers find
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
                  <h3>Weekly Updates</h3>
                  <p>
                    We update you weekly so you’ll always know what we’re doing.
                    You’ll always know what we’re doing, or progress, and even
                    our struggles and issues.
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
                  <h3>100% Transparency</h3>
                  <p>
                    You’ll never have to wonder, ‘What are those SEO guys
                    doing?’ We’ll keep you informed 100%. We’ll send you weekly
                    email updates, so you know we’re working and that your SEO
                    campaign is working.
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
                    Track and monitor your progress and make sure your campaign
                    delivers positive results: more traffic to your website,
                    more customers, more sales, and more revenue. We use tools
                    like Google Analytics, Google Search Console, Ahrefs, SEO
                    Screaming Frog, and SEMRush.
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
        </section>
        <section>
          <div className="container">
            <div className="grid">
              <img
                src="/images/home-service-business.webp"
                className="page-img"
                alt="Baltimore SEO company"
                title="Home service businesses we work with."
                loading="lazy"
              />
              <div>
                <h2>Home Service Businesses We Work With in Baltimore</h2>
                <p>
                  Our SEO agency works with home service businesses in Baltimore
                  that provide services to customers homes. Our goal is to help
                  home service businesses like yours increase your online
                  presence and profitability.
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
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule a Free Consultation!</Button>
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="medium-container">
            <h2 className="title">Areas We Serve Near and Around Baltimore</h2>
            <p className="center">We provide local SEO for busniess in:</p>
            <Cities>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Hampden, MD"
                  title="Hampden, MD"
                  loading="lazy"
                />
                <p>Hampden, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Rosedale, MD"
                  title="Rosedale, MD"
                  loading="lazy"
                />
                <p>Rosedale, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Essex, MD"
                  title="Essex, MD"
                  loading="lazy"
                />
                <p>Essex, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Woodlawn, MD"
                  title="Woodlawn, MD"
                  loading="lazy"
                />
                <p>Woodlawn, MD</p>
              </City>
              <City>
                <img src="/images/icons/map-location.png" loading="lazy" />
                <p>Pikesville, MD</p>
              </City>
              <City>
                <img src="/images/icons/map-location.png" loading="lazy" />
                <p>Towson, MD</p>
              </City>
              <City>
                <img src="/images/icons/map-location.png" loading="lazy" />
                <p>Dundalk, MD</p>
              </City>

              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Catonsville, MD"
                  loading="lazy"
                />
                <p>Catonsville, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Ellicott City, MD"
                  loading="lazy"
                />
                <p>Ellicott City, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Columbia, MD"
                  loading="lazy"
                />
                <p>Columbia, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Lochearn, MD"
                  loading="lazy"
                />
                <p>Lochearn, MD</p>
              </City>

              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Arbutus, MD"
                  loading="lazy"
                />
                <p>Arbutus, MD</p>
              </City>
            </Cities>
          </div>
        </section>
        <section>
          <div className="medium-container">
            <h2 className="title">
              Why Choose Us Instead of Other Baltimore SEO Agencies?
            </h2>
            <p className="subtext">
              We know that there are many Baltimore SEO companies you can work
              with. However, working with our agency has advantages.
            </p>
            <div className="grid">
              <div>
                <div className="reasons">
                  <h3>We're 100% Transparent</h3>
                  <p>
                    We're not like other SEO companies in B'more that only show
                    up at the end of the month when it's time to get paid. We
                    don't hide anything from you. We keep you informed and in
                    the loop about everything we do. You'll never have to ask
                    what we're doing because you'll always know.
                  </p>
                  <h3>No Long-term Contracts</h3>
                  <p>
                    We do monthly retainers, not long-term contracts. If you
                    want to stop at the end of the month, just let us know. We
                    understand that committing to an SEO campaign can be a big
                    step for a small business, but think about this. It can take
                    anywhere from three to twelve months to see any improvements
                    in your SEO performance.
                  </p>
                </div>
                <div className="reasons">
                  <h3>We’re Partners in This</h3>
                  <p>
                    We want the same things you want. For you to make more
                    money, grow your business, and have a happy life. If we can
                    help you in any other way, just ask, and we’ll see what we
                    can do.
                  </p>
                </div>
              </div>
              <img
                src="/images/maryland-seo-firm.webp"
                className="page-img-left "
                width="1000"
                height="600"
                alt="Our Baltimore SEO agency is ready to help grow your business."
                title="Our Baltimore SEO agency is ready to help grow your business"
                loading="lazy"
              />
            </div>
            <div className="text">
              <p>
                We work with small business owners who want to increase their
                organic traffic, web presence, and revenue. We’re not driven by
                superficial metrics like the amount of website traffic you get
                or the number of keywords you rank for. As professional SEO
                consultants, we’re only driven by how many phone calls you get,
                how much money you made, and if it was more than the last
                quarter.
              </p>
            </div>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule a Free Consultation Today!</Button>
              </a>
            </div>
          </div>
        </section>
        <FAQPageJsonLd
          mainEntity={[
            {
              questionName:
                'What is local SEO and how can it help my business in Baltimore?',
              acceptedAnswerText: `Local SEO is the process of optimizing your website and online presence for local search results. This can include optimizing your website for specific keywords related to your business, as well as making sure your site is listed in local directories and on maps. Local SEO can help improve your visibility in local search results, which can lead to more customers finding your business.`,
            },
            {
              questionName: 'How Long Does SEO Take To Work?',
              acceptedAnswerText:
                'It can take anywhere from three to twelve months to see any improvements in your SEO performance.',
            },
            {
              questionName: 'How Do I Know if My SEO Company is Working?',
              acceptedAnswerText:
                "If you're not seeing any improvements in your website's organic search engine ranking, traffic, or income, your SEO company might not be doing its job.",
            },
            {
              questionName: 'Is SEO Right For My Business?',
              acceptedAnswerText:
                "If you're trying to expand your company's online presence, raise your search engine position, and increase income for your business, then SEO might be proper for you.",
            },
            {
              questionName: 'How Long Does SEO Take Before You See Results?',
              acceptedAnswerText:
                'There are some general benchmarks, but you can expect to see results from your SEO within three to six months or six to twelve months. Again, the time you see results depends on the factors mentioned previously. If you do not see any results after six months, it is likely that your campaign is not being executed effectively and you may need to revisit your strategy.',
            },
            {
              questionName:
                'Can You Guarantee Me a Position on the First Page?',
              acceptedAnswerText:
                'No one can guarantee you a position on the first page, but our Baltimore SEO agency will do our best to get you there.',
            },
          ]}
        />
        <section>
          <div className="medium-container">
            <h2 className="title">Frequently Asked Questions</h2>
            <ReasonSec>
              <div>
                <div className="question">
                  <h3>
                    What is local SEO and how can it help my business in
                    Baltimore?
                  </h3>
                  <p>
                    Local SEO is the process of optimizing your website and
                    online presence for local search results. This can include
                    optimizing your website for specific keywords related to
                    your business, as well as making sure your site is listed in
                    local directories and on maps. Local SEO can help improve
                    your visibility in local search results, which can lead to
                    more customers finding your business.
                  </p>
                </div>
                <div className="question">
                  <h3>Why is SEO important for businesses in Baltimore? </h3>
                  <p>
                    There are a few key reasons why SEO is important for
                    businesses in Baltimore. First, local SEO can help you rank
                    higher in search engine results for searches related to your
                    business or industry in your local area. This can help you
                    get more website visitors and potential customers, which can
                    lead to more sales and revenue for your business. Second,
                    SEO can help you build trust and credibility with potential
                    customers. If they see that your website is ranking high for
                    relevant searches, they’ll be more likely to trust your
                    business and consider using your products or services.
                    Finally, SEO can help you stay ahead of the competition. If
                    your competitors are not doing SEO, you can get a leg up on
                    them by investing in SEO and getting your website to rank
                    higher than theirs.
                  </p>
                  <p>
                    So, if you’re looking to boost your business in Baltimore,
                    investing in local SEO is a great place to start.
                  </p>
                </div>
                <div className="question">
                  <h3>What is the cost of Baltimore SEO?</h3>
                  <p>
                    Baltimore SEO will cost between $1000 and $5000. The cost
                    depends on the size of your business and website, the
                    competitiveness of your industry, and the number of keywords
                    you want to target. Generally, the more keywords you want to
                    target, the higher the cost will be. Baltimore SEO is an
                    investment that can pay off handsomely, though, so it's
                    important to consider the ROI before making a decision.
                  </p>
                </div>
                <div className="question">
                  <h3>How can I improve my local SEO rankings in Baltimore?</h3>
                  <p>
                    There are a few things you can do to improve your local SEO
                    rankings in Baltimore.
                  </p>
                  <p>
                    First, make sure you have your business listed on popular
                    local directories like Yelp and Google My Business.
                  </p>
                  <p>
                    Secondly, create local content on your website and blog that
                    includes relevant keywords for Baltimore searchers.
                  </p>
                  <p>
                    Finally, cultivate positive customer reviews to help boost
                    your local SEO rankings.
                  </p>
                  <p>
                    By following these tips, you can improve your local SEO
                    rankings and make it easier for Baltimore residents to find
                    your business online.
                  </p>
                </div>
                <div className="question">
                  <h3>What is the Difference between SEO and Local SEO?</h3>
                  <p>
                    Local SEO is focused on optimizing a website for local
                    search results, whereas SEO is focused on optimizing a
                    website for organic (non-local) search results.
                  </p>
                  <p>
                    There are a few key differences between local SEO and SEO:
                  </p>
                  <ul>
                    <li>
                      Keywords: Local SEO keywords are typically more specific
                      than general SEO keywords (e.g., "plumber in baltimore"
                      vs. "plumber").
                    </li>
                    <li>
                      Search intent: Local SEO is focused on searchers who are
                      looking for local businesses, while SEO is focused on
                      searchers who may be looking for anything from local
                      businesses to general information.
                    </li>
                    <li>
                      Location: Local SEO takes into account the searcher's
                      location, while SEO does not.
                    </li>
                    <li>
                      Citation building: Building local citations (i.e.,
                      mentions of your business on other websites) is a key part
                      of local SEO, while it is not as important for SEO.
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="question">
                  <h3>
                    What are some red flags to watch out for when hiring an SEO
                    company in Baltimore?
                  </h3>
                  <p>
                    When looking for an SEO company to help improve your local
                    SEO rankings, there are a few red flags to watch out for.
                    Make sure to avoid any companies that guarantee results, use
                    black hat techniques, or make unrealistic promises. Instead,
                    look for a company with a proven track record of success,
                    that uses ethical white hat techniques, and that can provide
                    a realistic plan for improving your local SEO. With the
                    right partner, you can see a significant improvement in your
                    local SEO rankings.
                  </p>
                </div>
                <div className="question">
                  <h3>Can I Do Baltimore SEO Myself?</h3>
                  <p>
                    If you're willing to put in the work, you can definitely do
                    SEO yourself. However, if you want to see results more
                    quickly, it might be worth hiring a Baltimore SEO company or
                    consultant to help you out.
                  </p>
                </div>
                <div className="question">
                  <h3>How Long is Your Contract for Baltimore SEO services?</h3>
                  <p>Our contracts are month-to-month.</p>
                  <p>
                    We have found that this works best for our clients because
                    it allows them to cancel at any time. We do require a
                    6-month minimum commitment to begin with, however. This is
                    because SEO generally takes at least 6 months to show
                    results. After the initial 6-month period, you are free to
                    cancel at any time.
                  </p>
                </div>
                <div className="question">
                  <h3>
                    Can You gurantee My Website Will Be on the first page?
                  </h3>
                  <p>
                    No one can guarantee that your website will be on the first
                    page because there is so much competition and search engines
                    are constantly changing their algorithms.
                  </p>
                  <p>
                    However, we do guarantee that we will do our best to get
                    your website on the first page for local searches in
                    Baltimore. We have a team of experienced SEO specialists who
                    have extensive knowledge of how local SEO works and how to
                    optimize websites for the best results.{' '}
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
                <div className="question">
                  <h3>How long would it take to rank my website?</h3>
                  <p>
                    This is a difficult question to answer, as it depends on a
                    number of factors, including the age of your website, the
                    competitiveness of your industry, the quality of your
                    content, and the strength of your backlink profile. However,
                    if you take the necessary steps to optimize your website for
                    search engines, you could see results within a few months.
                  </p>
                </div>
              </div>
            </ReasonSec>
          </div>
        </section>
        <div className="call-to-action-grid">
          <img
            src="/images/man-calling-baltimore-seo-company.webp"
            alt="A man calling to inquire about Baltimore SEO company."
            title="A man calling to inquire about Baltimore SEO company."
            width="1000px"
            height="667px"
          />
          <div className="container">
            <h2>Ready to Grow Your Business with Baltimore SEO?</h2>
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

export default BaltimoreSEOCompany

const ReasonSec = styled.div`
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
  }
`

const Service = styled.div`
  .service-card {
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 20px;
    margin-bottom: 2rem;
    @media screen and (min-width: 1024px) {
      box-shadow: 13px 20px 0;
    }

    img {
      margin: 0;
      border-radius: 20px 20px 0 0;
    }

    .service {
      padding: 2rem 2rem;

      h3 {
        margin-top: 0;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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
      grid-template-columns: repeat(3, 1fr);
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
