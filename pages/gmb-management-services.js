/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'
import MainLayout from '../components/MainLayout'
import Button from '../components/Button'
import HeroSection from '../components/HeroSection'
import OfferForm from '../components/OfferFormSection'
import { Business, Businesses } from '../components/BusinessesWeWorkWith'

import { NextSeo, FAQPageJsonLd } from 'next-seo'
import styled from 'styled-components'

const calendly = 'https://calendly.com/bowieseo/30min'

const SEOAgency = 'our SEO company'

const LocalSEO = () => {
  const SEO = {
    title:
      'Google My Business Management Services for Small Businesses | Bowie SEO',
    description:
      'We provide Google My Business Management for small businesses in Maryland and DC. Get more customers and web traffic, and increase revenue. Contact us today!',
    type: 'website',
    canonical: 'https://bowieseo.com/gmb-management-services',
    openGraph: {
      title:
        'Google My Business Management Services for Small Businesses | Bowie SEO',
      description:
        'We provide Google My Business Management for small businesses in Maryland and DC. Get more customers and web traffic, and increase revenue. Contact us today!',
      type: 'website',
      image: [{}],
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <MainLayout>
        <HeroSection
          heroText="Google My Business Management Services"
          subText="Let us manage your Google Business Profile and bring you leads and paying customers."
          backgroundImage="/images/search-engine-optimization-header.webp"
          backgroundHeight="70vh"
          backgroundPosition="top center"
          buttonText="Schedule a free consultation today!"
          buttonLink={calendly}
        />
        <section>
          <div className="container">
            <div className="grid">
              <div>
                <h2>
                  Is Your Google Business Profile Showing Up in Local Search
                  Results When People Search For Your Services?
                </h2>
                <p>Can anyone find your business or services on Google?</p>
                <p>
                  Your website is not showing up in the map pack, or the Google
                  local listings.
                </p>
                <p>
                  You tried to optimize your website and your Google My Business
                  page yourself, but you don’t know what you’re doing.
                </p>
                <p>
                  Do you add more images, create more posts, get more reviews or
                  just give up?
                </p>
                <p>
                  You add posts every week, post pictures of your work, even
                  post videos, but it’s not working.
                </p>
                <p>Your website still doesn’t come up.</p>
                <p>
                  But when you search for your services, you see your
                  competitors' websites.
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
                <h2>What is GMB Management?</h2>
                <p>GMB stands for Google My Business.</p>
                <p>
                  GMB management refers to managing and maintaining a business's
                  listing on Google My Business.
                </p>
                <p>
                  This includes keeping the business's information up-to-date
                  and accurate, responding to customer reviews and messages, and
                  using the platform to connect with customers and promote the
                  business.
                </p>
                <p>
                  GMB management is important because it can help improve a
                  business's online visibility and reputation, and make it
                  easier for customers to find and connect with the business.
                </p>
                <p>
                  A GMB (Google My Business) manager is responsible for managing
                  and maintaining a business's listing on Google My Business.
                </p>
                <p>
                  This includes ensuring that the business's information is
                  up-to-date and accurate, responding to customer reviews and
                  messages, and using the platform to connect with customers and
                  promote the business.
                </p>
                <p>
                  A GMB manager may also use the insights and analytics provided
                  by Google My Business to track the performance of the
                  business's listing and make data-driven decisions about how to
                  improve it.
                </p>
                <p>
                  In general, the goal of a GMB manager is to help a business
                  improve its online visibility and reputation, and make it
                  easier for customers to find and connect with the business.
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
            <h2 className="title">
              What are the benefits of having a Google My Business Page?
            </h2>
            <p className="subtext">
              Having a Google My Business (GMB) profile can provide a number of
              benefits for a business. Some of these benefits include:
            </p>
            <Benefits>
              <Benefit>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Expert one-on-one support."
                />
                <div>
                  <h3>Improved online visibility</h3>
                  <p>
                    A GMB profile can help a business show up in relevant search
                    results on Google, making it easier for customers to find
                    the business.
                  </p>
                </div>
              </Benefit>
              <Benefit>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Expert one-on-one support."
                />
                <div>
                  <h3>Greater control over how the business is presented</h3>
                  <p>
                    With a GMB profile, a business can control how it appears on
                    Google and provide important information, such as the
                    business's address, phone number, and hours of operation.
                  </p>
                </div>
              </Benefit>
              <Benefit>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Expert one-on-one support."
                />
                <div>
                  <h3>Increased credibility</h3>
                  <p>
                    Having a GMB profile can help a business appear more
                    credible to potential customers.
                  </p>
                </div>
              </Benefit>
              <Benefit>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Expert one-on-one support."
                />
                <div>
                  <h3>More customer reviews</h3>
                  <p>
                    A GMB profile allows customers to leave reviews, which can
                    help a business build trust and credibility with potential
                    customers.
                  </p>
                </div>
              </Benefit>
              <Benefit>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Expert one-on-one support."
                />
                <div>
                  <h3>Better communication with customers</h3>
                  <p>
                    A GMB profile allows a business to respond to customer
                    reviews and messages, which can help improve customer
                    satisfaction and build stronger relationships with
                    customers.
                  </p>
                </div>
              </Benefit>
              <Benefit>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Expert one-on-one support."
                />
                <div>
                  <h3>Enhanced local SEO</h3>
                  <p>
                    GMB profiles are considered an important factor in local
                    search engine optimization (SEO), which can help a business
                    rank higher in search results for relevant local searches.
                  </p>
                </div>
              </Benefit>
              <Benefit>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Expert one-on-one support."
                />
                <div>
                  <h3>Improved customer insights</h3>
                  <p>
                    A GMB profile provides access to valuable insights and
                    analytics about a business's customers, such as how they
                    found the business and what actions they took on the
                    business's listing. This can help a business understand its
                    customers better and make more informed decisions about its
                    marketing efforts.
                  </p>
                </div>
              </Benefit>
              <Benefit>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Expert one-on-one support."
                />
                <div>
                  <h3>Free advertising</h3>
                  <p>
                    Having a Google My Business profile is a free advertising
                    opportunity, as it allows you to promote your business to a
                    large audience at no cost.
                  </p>
                </div>
              </Benefit>
            </Benefits>
          </div>
        </section>
        <section>
          <div className="medium-container">
            <h2 className="title">
              What You Get With Our GMB Management Services
            </h2>
            <Deliverables>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Expert one-on-one support."
                />
                <div>
                  <h3>Expert one-on-one support</h3>
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
                  alt="SEO audit."
                />
                <div>
                  <h3>SEO Audit</h3>
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
                  alt="Do weekly Google My Business posts."
                />
                <div>
                  <h3>Weekly Google My Business Posts</h3>
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
                  <h3>An Optimized GMB Listing</h3>
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
                  <h3>You Own Custom strategy</h3>
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
                  <h3>Photo / Video Uploads</h3>
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
                  <h3>Listing Updates</h3>
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
                  <h3>Review Management</h3>
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
                  <h3>Managed Content</h3>
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
                  <h3>Competitor Analysis</h3>
                  <p>
                    We meet and talk with you every month to discuss any
                    opportunities we discover, and to ensire that your SEO
                    strategy is on track, and that your business is growing.
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
                  <h3>Ongoing Optimization</h3>
                  <p>
                    We meet and talk with you every month to discuss any
                    opportunities we discover, and to ensire that your SEO
                    strategy is on track, and that your business is growing.
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
                  <h3>Tracking and Monitoring</h3>
                  <p>
                    We meet and talk with you every month to discuss any
                    opportunities we discover, and to ensire that your SEO
                    strategy is on track, and that your business is growing.
                  </p>
                </div>
              </Deliverable>
            </Deliverables>
            <p className="subtext">
              P.S. You can get GMB Management Services as part of our search
              engine optimization services.
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
                <h2>
                  We Provide GMB Management Services to These Businesses and
                  More
                </h2>
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
                questionName: 'Is there a fee to set up my GMB Page?',
                acceptedAnswerText:
                  'No. There is no fee to set it up, just a monthly management fee.',
              },
              {
                questionName: 'Is there a long-term contract?',
                acceptedAnswerText:
                  'No, all of our GMB management services are 30-day contracts and renew every 30 days until you say when.',
              },
              {
                questionName: 'Do I Need to have a website for this service?',
                acceptedAnswerText:
                  'No, you don’t need a website to use Google My Business. The great thing is that Google My Business is like its own website.',
              },
              {
                questionName: 'Is Google My Business Worth it?',
                acceptedAnswerText:
                  'The simple answer is YES. Google My Business is a huge and ever-growing factor for local search. It is a very important element for any local SEO campaign.',
              },
              {
                questionName: 'Does Google My Business Help My SEO Rankings?',
                acceptedAnswerText:
                  'Yes. Your GMB Page can help with your rankings in the local map pack and the organic search results.',
              },
              {
                questionName: 'Does GMB Help Get Me More Customers?',
                acceptedAnswerText:
                  'GMB helps with your local SEO. The higher you rank in the map pack, the more conversions and customer inquiries, and phone calls you should receive.',
              },
              {
                questionName: 'Do you have to pay for a Google listing?',
                acceptedAnswerText:
                  'The answer is no. Google does not charge for local business listings. It is free no matter how many businesses you want to list.',
              },
              {
                questionName:
                  'Why Should You Claim Your Google My Business Page?',
                acceptedAnswerText:
                  'You should claim your GMB Page because it’s like having an extra website given to you for free by the most used search engine in the world.',
              },
              {
                questionName: 'Do You Provide Support?',
                acceptedAnswerText:
                  'Yes. We provide expert GMB support and are ready to answer any questions you have.',
              },
              {
                questionName: 'Do You Offer SEO and Local SEO Services?',
                acceptedAnswerText:
                  'Yes, we do. GMB management is part of our SEO service to businesses.',
              },
              {
                questionName: 'What Does GMB Management Cost?',
                acceptedAnswerText:
                  'Our GMB management costs $300.00 per month. This includes setup, maintenance, weekly posts, optimization, and more.',
              },
            ]}
          />
          <div className="medium-container">
            <h2 className="title">
              Frequently Asked Questions about Our GMB Management Services
            </h2>
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
                  <h3>Do I Need to have a website for this service?</h3>
                  <p>
                    No, you do not need to have a website to create a Google My
                    Business (GMB) listing. However, having a website can be
                    beneficial for your business because it provides a central
                    online location where potential customers can learn more
                    about your products or services, see examples of your work,
                    and contact you.
                  </p>
                  <p>
                    If you do not have a website, you can still create a GMB
                    listing and provide information about your business, such as
                    your address, phone number, and hours of operation.
                    Customers will be able to find your business in Google
                    search results and on Google Maps, and can contact you
                    through the information provided in your GMB listing.
                  </p>
                  <p>
                    That being said, it's generally a good idea for businesses
                    to have a website, as it can help establish credibility,
                    provide more information about your products or services,
                    and give customers a way to learn more and contact you
                    directly. If you don't have a website, you may want to
                    consider creating one as it can be an important part of your
                    overall marketing and customer acquisition strategy.
                  </p>
                </div>
              </div>
              <div>
                <div className="question">
                  <h3>Is Google My Business Worth it?</h3>
                  <p>
                    The simple answer is YES. Google My Business is a huge and
                    ever-growing factor for local search. It is a very important
                    element for any local SEO campaign.
                  </p>
                </div>
                <div className="question">
                  <h3>Does Google My Business Help My SEO Rankings?</h3>
                  <p>
                    Yes, having a Google My Business (GMB) listing can help
                    improve your SEO rankings by providing Google with
                    information about your business, such as your address, phone
                    number, and hours of operation, which can help with local
                    SEO and increase the relevance of your business to specific
                    keywords. GMB also allows you to interact with customers
                    through reviews, which can improve the overall user
                    experience with your business and potentially increase
                    engagement, which can be a ranking factor in Google's
                    algorithm. However, it's important to note that GMB is just
                    one of many factors that can impact your rankings and a
                    well-rounded SEO strategy that includes a variety of
                    tactics, such as high-quality content and backlinks, is
                    necessary to achieve the best results.
                  </p>
                </div>
                <div className="question">
                  <h3>Does GMB Help Get Me More Customers?</h3>
                  <p>
                    Google My Business helps with your local SEO. The higher you
                    rank in the map pack, the more conversions and customer
                    inquiries, and phone calls you should receive.
                  </p>
                </div>
                <div className="question">
                  <h3>Do you have to pay for a Google listing?</h3>
                  <p>
                    The answer is no. Google does not charge for local business
                    listings. GMB is a free service provided by Google that
                    allows businesses to manage their online presence across
                    Google, including in search results and on Google Maps.
                  </p>
                </div>
                <div className="question">
                  <h3>Why Should You Claim Your Google My Business Page?</h3>
                  <p>
                    You should claim your GMB Page because it helps improve your
                    local SEO by providing Google with accurate and up-to-date
                    information about your business, increases the visibility of
                    your business in search results by allowing you to add
                    photos, a description, and categories, allows you to manage
                    your online reputation by responding to customer reviews,
                    and provides insights and analytics about how customers are
                    interacting with your business online. Overall, claiming
                    your GMB page can help improve the visibility and reputation
                    of your business online, as well as provide valuable
                    insights and analytics.
                  </p>
                </div>
                <div className="question">
                  <h3>Do You Provide Support?</h3>
                  <p>
                    Yes. We provide expert GMB support and are ready to answer
                    any questions you have.
                  </p>
                </div>
                <div className="question">
                  <h3>Do You Offer SEO and Local SEO Services?</h3>
                  <p>
                    Yes, we do. GMB management is part of our local SEO services
                    to businesses.
                  </p>
                </div>
                <div className="question">
                  <h3>What Does GMB Management Cost?</h3>
                  <p>
                    Our GMB management costs $300.00 per month. This includes
                    setup, maintenance, weekly posts, optimization, and more.
                  </p>
                </div>
              </div>
            </ReasonSec>
          </div>
        </section>
        <div className="call-to-action-grid">
          <img
            src="/images/business-man-calling-about-seo-services.webp"
            alt="A man calling to inquire about our GMB Management Services."
            title="A man calling to inquire about our GMB Management Services."
            width="1000px"
            height="667px"
          />
          <div className="container">
            <h2>Ready to Grow Your Business with GMB Management Services?</h2>
            <p>
              Contact us today and we'll show you how our Google My Business
              Management can help get more leads and customers calling you.
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

export default LocalSEO

const ReasonSec = styled.div`
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
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
const Benefits = styled.div`
  margin: 2rem 0;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
  }
`
const Benefit = styled.div`
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
