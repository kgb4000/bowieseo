/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'
import Button from '../components/Button'
import PageHero from '../components/PageHeroSection'
import { Card, Container } from '../components/CardSection'
import Stats from '../components/Stats'

import { NextSeo } from 'next-seo'

const calendly = 'https://calendly.com/bowieseo/30min'

const LocalSEO = () => {
  const SEO = {
    title: 'Local SEO Maryland Services for Local Businesses',
    description:
      'We provide local SEO services for small business in Maryland. Get more customers, more web traffic, and increase revenue. Contact us today!',
    type: 'website',
    canonical: 'https://bowieseo.com/maryland-seo-company',
    openGraph: {
      title: 'Local SEO Maryland Services for Local Businesses',
      description:
        'We provide local SEO services for small business in Maryland. Get more customers, more web traffic, and increase revenue. Contact us today!',
      type: 'website',
      image: [{}],
    },
  }
  return (
    <>
      <NextSeo noindex={true} />
      <PageHero
        heading="Local SEO [Maryland]"
        subText="We provide Local SEO services to all businesses in Maryland. We help local businesses get more customers and leads, and make more money."
        heroBtnLink={calendly}
        buttonText="Book a call"
        heroBtnLink1="/free-mini-seo-audit"
        buttonText1="Free Mini SEO Audit"
      />
      <main>
        <section>
          <div className="container">
            <h2>Digital Marketing Can Be Tough For Local Business Owners</h2>
            <div className="side-by-side">
              <ul className="count">
                <li>
                  <img
                    src="/images/paying-for-seo.svg"
                    alt="Customers paying."
                    className="icons filter-green"
                    loading="lazy"
                  />
                  Wasting money because people keep clicking your social media
                  and PPC ads?
                </li>
                <li>
                  <img
                    src="/images/customers.svg"
                    alt="Local customers."
                    className="icons"
                    loading="lazy"
                  />
                  Not getting the customers from your website like you were
                  expecting.
                </li>
                <li>
                  <img
                    src="/images/losing-customers.svg"
                    alt="Customers leaving."
                    className="icons"
                    loading="lazy"
                  />
                  Not getting any traffic to your website either.
                </li>
                <li>
                  <img
                    src="/images/search-engines.svg"
                    alt="Search engines."
                    className="icons"
                    loading="lazy"
                  />
                  Tired of trying digital marketing yourself and getting zero
                  results?
                </li>
                <li>
                  <img
                    src="/images/search-engines.svg"
                    alt="Location icon."
                    className="icons"
                    loading="lazy"
                  />
                  Still relying on customer referrals to stay in business?
                </li>
                <li>
                  <img
                    src="/images/seo-experts.svg"
                    alt="Illustration of SEO experts."
                    className="icons"
                    loading="lazy"
                  />
                  <p>Tired of seeing your competitors growing and not you?</p>
                </li>
              </ul>
            </div>
            <p>
              If you didn't know, one of the best marketing channels to help
              your business rank higher in Google, get more web traffic, and get
              more leads is <b>local SEO</b>.
            </p>
            <p>
              Maryland businesses owners are missing a huge opportunity by not
              using local search engine optimization to help grow their
              business.
            </p>
          </div>
        </section>
        <p className="sub-text container">
          To learn more about how local SEO can help your business grow, or to
          start a campaign, book a call with us today.
        </p>
        <div className="btn">
          <a href={calendly} target="_blank" rel="noreferrer">
            <Button>Book a call today!</Button>
          </a>
        </div>
        <section>
          <div className="container">
            <h2>What is Local SEO?</h2>
            <p>
              Local SEO is the process of improving your website for search
              engines, your location, and your local audience.
            </p>
            <p>
              Unlike SEO which is not location specific, local SEO is a digital
              marketing channel that makes your website better.
            </p>
            <p>
              With a better, well optimized website, your website will appear in
              the search engines when people search for your products and
              services.
            </p>
            <h3>How does it make your website better?</h3>
            <p>Local SEO will make your website better by:</p>
            <Stats>
              <li>
                It can help to improve your website's visibility in search
                engine results pages (SERPs), making it easier for potential
                customers to find you online.
              </li>
              <li>
                <b>
                  Local SEO can also help to improve click-through rates (CTRs)
                  and organic traffic, as well as increase conversion rates by
                  targeting local customers who are more likely to convert.
                </b>
              </li>
              <li>
                Local SEO can help to build trust and credibility with potential
                customers, as well as improve your overall online reputation.
              </li>
              <li>
                <b>
                  Local SEO can also help you to Rank for More Keywords, which
                  can result in more organic traffic and leads for your
                  business.
                </b>
              </li>
              <li>
                Last but not least, Local SEO can be a Cost-Effective Marketing
                Strategy, since it targets customers who are already interested
                in your products or services in your local area.
              </li>
            </Stats>
            <p>
              Imagine you live in Annapolis and you're searching for a swimming
              pool builder because you just won the lottery and you want a pool.
            </p>
            <p>
              When you start searching on your smartphone or your desktop
              computer, Google already knows you're in Annapolis.
            </p>
            <p>
              Google will return a list of swimming pool builders in Annapolis
              in the Map Pack, and the organic search results.
            </p>

            <p>
              As more and more people use search engines to find local
              information, Maryland business owners should take advantage of
              this opportunity and invest in local search engine optimization.
            </p>
          </div>
        </section>
        <div className="btn">
          <a href={calendly} target="_blank" rel="noreferrer">
            <Button>Book a call today!</Button>
          </a>
        </div>
        <section>
          <div className="container">
            <h2>7 Reasons Maryland Businesses Need Local SEO [2022]</h2>
            <h3>
              #1. More People Use Search Engines to Find Local Information
            </h3>
            <p>
              More and more people are using search engines to find local
              information.
            </p>
            <p>
              In fact, a recent study showed that{' '}
              <a
                href="https://www.hubspot.com/marketing-statistics"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                97% of consumers
              </a>{' '}
              use the internet to find local businesses.
            </p>
            <p>
              This trend is only going to continue as more and more people get
              online. As a result, it's becoming increasingly important for
              businesses to invest in SEO so they can appear in the search
              results when potential customers are looking for what they offer.
            </p>
            <h3>#2. SEO Beats Every Other Marketing Channel Hands Down</h3>
            <p>
              One of the main reasons to invest in SEO is to rank higher in
              search engine results pages (SERPs). When your website appears
              higher up on SERPs, it increases your chances of being seen and
              clicked by potential customers.
            </p>
            <h3>#3. Organic Search Traffic is Free</h3>
            <p>
              Organic traffic refers to the visitors who come to your website
              without being paid or sponsored. In other words, they find your
              website through a search engine like Google. And since SEO helps
              you improve your ranking in search results, it also indirectly
              helps you drive more organic traffic to your website.
            </p>
            <h3>
              #4. It Will Help You Find Problems on Your Website So You Can Fix
              Them
            </h3>
            <p>
              Since you'll be getting more leads and customers through your
              website, you'll be able to achieve a higher return on investment
              (ROI) for your marketing campaigns. With this, you'll be able to
              reinvest your money back into your marketing efforts so that you
              can continue to see better results.
            </p>
            <h3>#5. Outrank Your Competitors</h3>
            <p>
              Search engine optimization makes your website better for search
              engines and your customers. When you do SEO and your competitors
              don't, your SEO efforts will create a more significant online
              presence, rank higher in the search rankings, get more traffic,
              and do more online business.   
            </p>
            <h3>
              #6. Local SEO Can Help You Reach Your Target Market and They Can
              Find You
            </h3>
            <p>
              Potential customers find your business because you use search
              engine optimization and perform keyword research to reach your
              target audience.  
            </p>
            <h3>#7. Search Engines are Not Going Away</h3>
            <p>
              Search engine optimization makes your website better for search
              engines and your customers. When you do SEO and your competitors
              don't, your SEO efforts will create a more significant online
              presence, rank higher in the search rankings, get more traffic,
              and do more online business.   
            </p>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>Why Work With Us Instead of Other Local SEO Agencies</h2>
            <h3>#1. All We Do is Search Engine Optimization</h3>
            <p>
              We are not like other digital marketing agencies that try to do
              everything.
            </p>
            <p>We don't do Google ads, website design, or web development.</p>
            <p>No social media management or reputation management here.</p>
            <p>
              We do one thing and we do it well, and that's getting you to rank
              higer in the search engines, getting more leads and customers, and
              making more money.
            </p>
            <h3>#2. No Long-term Contracts Here</h3>
            <p>You don't have any long-term contracts when you work with us.</p>
            <p>You just pay month-to-month.</p>
            <p>It's easier and simpler that way.</p>
            <p>
              Hopefully you understand that you need to commit to doing local
              SEO for at least three to six months.
            </p>
            <p>
              That's because it can take three to six months before we see any
              results from your campaign.
            </p>
            <h3>#3. We Leaders, We Don't Copy What Everyone Else is Doing!</h3>
            <p>
              We are{' '}
              <Link href="/maryland-seo-expert" passHref>
                <a>Maryland SEO experts</a>
              </Link>
              .
            </p>
            <p>
              We don't have any cookie cutter templates that we follow, or
              follow so called experts who've never don't SEO before.
            </p>
            <h3>#4. We're 100% Transparent</h3>
            <p>You don't have to wonder where we are or what we're doing.</p>
            <p>
              {' '}
              We're happy to show you everything we're doing to help get you
              more leads and customers.
            </p>
            <p>
              We'll never keep you in the dark and you'll never have wait a
              month to wonder what we're doing or what's going on with your
              campaign.
            </p>
            <h3>#5. Our SEO Company is Located in The DMV!</h3>
          </div>
        </section>
        {/* <div className="btn">
          <Link href="/contact" passHref target="_blank">
            <Button>Contact us today!</Button>
          </Link>
        </div> */}
        {/* <section>
          <div className="container">
            <h2>Cities We Offer Local SEO Services</h2>
            <div className="cities container">
              <ul>
                <li>Annapolis, MD</li>
                <li>Baltimore, MD</li>
                <li>Bethesda, MD</li>
                <li>Bowie, MD</li>
                <li>Capitol Heights</li>
                <li>Chevy Chase, MD</li>
                <li>Fort Washington, MD</li>
              </ul>
              <ul>
                <li>Glen Burnie</li>

                <li>Hyattsville, MD</li>
                <li>
                  <Link href="/laurel-maryland-local-seo-services" passHref>
                    <a>Laurel, MD</a>
                  </Link>
                </li>
                <li>
                  <Link href="/seo-services-ocean-city" passHref>
                    <a>Ocean City, MD</a>
                  </Link>
                </li>
                <li>Rockville, MD</li>
                <li>Silver Spring, MD</li>
                <li>Takoma Park, MD</li>
              </ul>
            </div>
          </div>
        </section> */}
        <div className="btn">
          <a href={calendly} target="_blank" rel="noreferrer">
            <Button>Book a Call Today!</Button>
          </a>
        </div>
        <section>
          <div className="container">
            <h2>Frequently Asked Questions</h2>
            <section>
              <h3>#1. How Long Does Local SEO Take To Work?</h3>
              <p>Local SEO is a long-term process.</p>
              <p>
                It can take 3 to 6 months or it can take 6 to 12 months to see
                any results from doing local SEO.
              </p>
              How long it takes to work will depend on different factors like:
              <ul>
                <li>The age of your website.</li>
                <li>The strength of your website.</li>
                <li>The amount of competition in your local area.</li>
                <li>
                  Your competitor's website strength and backlink profile.
                </li>
                <li>plus more.</li>
              </ul>
              <p>
                However, once you've begun to rank higher in search engine
                results pages (SERPs), you can expect a steady stream of
                targeted traffic headed your way.
              </p>
              <p>
                To see where your website ranks today, get a Free Mini SEO
                Audit.
              </p>
            </section>
            <div className="btn">
              <Link href="/free-website-audit" passHref target="_blank">
                <Button>Free Mini SEO Audit</Button>
              </Link>
            </div>
            <section>
              <h3>#2. How Much Do You Charge For Local SEO?</h3>
              <p>For local SEO, it depends.</p>
              <p>
                The cost of Local SEO services can vary depending on the size
                and location of your business, as well as the competition in
                your industry. However, we typically recommend a budget of{' '}
                <b>$1000 - $3000</b> per month for most businesses.
              </p>
              <p>
                If you have a very large or competitive business, you may need
                to increase your budget to get the results you need. Contact us
                today for a free consultation to discuss your specific needs and
                budget.
              </p>
              <p>
                If these numbers seem high to you, this type of marketing may
                not be the best solution for you at this present time.
              </p>
            </section>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Book a call today!</Button>
              </a>
            </div>
            <section>
              <h3>#3. What is The Difference between Local SEO and SEO?</h3>
              <p>
                The main difference between SEO and Local SEO is that Local SEO
                is more targeted towards bringing in traffic from a specific
                geographic area, while SEO is more concerned with getting
                traffic and increasing visibility on a national or global level.
              </p>
              <p>
                Let's say you're a swimming pool builder in Annapolis, Maryland.
              </p>
              <p>
                You most likely want to get traffic and leads from customers
                searching for a pool builder that live in Annapolis or nearby.
              </p>
              <p>
                They could live in Washington, DC, or Silver Spring, but it's
                not too far.
              </p>
              <p>
                Local SEO will help you target the right keywords, and make
                changes to your website to attract your local customers.
              </p>
              <p>
                If you have an ecommerce store that sells swimming pool supplies
                all over the country, then SEO will be the best option.
              </p>
            </section>
            <div className="btn">
              <Link href="/free-website-audit" passHref target="_blank">
                <Button>Free Mini SEO Audit</Button>
              </Link>
            </div>
            <section>
              <h3>#2. How Can SEO Help My Business?</h3>
              <p>SEO can help your business in a number of ways.</p>
              <p>
                First, by improving your website's search engine optimization,
                you can increase your visibility on the web, attract more
                qualified leads, and boost your sales.
              </p>
              <p>
                Additionally, SEO can help to build trust and credibility with
                potential and current customers.
              </p>
              <p>
                By providing relevant and useful content, you can show that
                you're an authority in your industry, which can encourage people
                to do business with you.
              </p>
              <p>
                Finally, SEO can also help you to save money on marketing and
                advertising costs by helping you to reach your target audience
                more effectively. If you're looking for ways to improve your
                business's bottom line, then investing in SEO is a smart choice.
              </p>
              <p>
                SEO can be a complex and time-consuming process, but it's worth
                the effort if you want to improve your business's bottom line.
                If you're not sure where to start, then consider hiring an SEO
                expert to help you get the most out of your website. With their
                help, you can take your business to the next level.
              </p>
              <p>
                If you want to learn more about how SEO can help your business,
                then contact us today. We'll be happy to answer any questions
                you have and help you get started on the path to success.
              </p>
            </section>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Book a call today!</Button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default LocalSEO
