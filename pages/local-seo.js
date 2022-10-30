/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'
import MainLayout from '../components/MainLayout'
import Button from '../components/Button'
import PageHero from '../components/PageHeroSection'
import { Card, Container } from '../components/CardSection'
import OfferForm from '../components/OfferFormSection'
import ProcessSection from '../components/ProcessSection'
import {
  localSEO1,
  localSEO2,
  localSEO3,
  localSEO4,
  localSEO5,
  localSEO6,
  localSEO7,
} from '../components/ProcessSection/Data/Process1'

import { NextSeo } from 'next-seo'

const calendly = 'https://calendly.com/bowieseo/30min'

const LocalSEO = () => {
  const SEO = {
    title: 'Local SEO Services for Small Business in Maryland and DC',
    description:
      'We provide local SEO services for small businesses in Maryland and DC. Get more customers and web traffic, and increase revenue. Contact us today!',
    type: 'website',
    canonical: 'https://bowieseo.com/local-seo',
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
        <PageHero
          heading="Search Engine Optimization"
          subText="Get Local SEO services and get more customers to call your business instead of calling someone else."
          heroBtnLink="tel:+2402660588"
          buttonText="Call (240) 266-0588"
          heroBtnLink1="/free-mini-seo-audit"
          buttonText1="Get a Free Mini SEO Audit"
        />
        {/* We use our expertise in search engine optimization to turn insights into
        strategies that generate results */}
        {/* <section>
          <h2 className="title">
            Get in Front of More Customers with Local SEO
          </h2>
          <div className="medium-container grid">
            <img
              src="images/local-seo-services.jpg"
              alt="Local SEO Company - Bowie SEO"
              width="1000"
              height="450"
              className="img-info short"
            />
            <img
              src="images/local-seo-services.jpg"
              alt="Local SEO Company - Bowie SEO"
              width="1000"
              height="450"
              className="img-info long"
            />
            <div className="text-info">
              <p>
                If you're a business owner in Maryland or Washington, DC, and
                want to get your business in front of more customers online,
                Local SEO is one of the best solutions for you.
              </p>
              <p>
                Local SEO not only turns your website into a valuable asset, it
                will make your website a magnet that will attract your ideal
                customers and customers searching for your products and
                services.
              </p>
              <p>
                When you do local SEO and land on the first page for your
                targeted keywords, you get <b>free organic traffic</b> from
                search engines instead of having to pay for traffic and leads
                from social media marketing or ppc ads.
              </p>
              <p>
                If your thinking about starting an SEO strategy for your local
                business, give us a call today.
              </p>
            </div>
          </div>
        </section>
        <div className="btn">
          <a href="tel:+2402660588">
            <Button>Call (240) 266-0588</Button>
          </a>
        </div>
        <section>
          <h2 className="title">What is Local SEO?</h2>
          <div className="medium-container grid">
            <img
              src="images/seo-guys.jpg"
              alt="Maryland SEO Company - Bowie SEO"
              width="1000"
              height="450"
              className="img-info short"
            />
            <img
              src="images/maryland-seo-company.jpg"
              alt="Maryland SEO Company - Bowie SEO"
              width="1000"
              height="450"
              className="img-info long"
            />
            <div className="text-info">
              <p>
                Local SEO is the process of improving your website for search
                engines, your location, and your local audience.
              </p>
              <p>
                Unlike other forms of digital marketing, local SEO makes your
                website better and an asset to your company. An asset that
                attracts free organic traffic from search engines like Google
                and Bing.
              </p>
              <p>
                With a better, well optimized website, your website will appear
                in the search engines when people search for your products and
                services.
              </p>
            </div>
          </div>
        </section>
        <div className="btn">
          <a href={calendly} target="_blank" rel="noreferrer">
            <Button>Book a call today!</Button>
          </a>
        </div>
        <section className="dots-background">
          <div className="medium-container">
            <div className="offer-section">
              <h2>Other Businesses Beating You in the Search Results?</h2>
              <p className="big-p">
                Fix the Issues Stopping You From Beating Your Competition and
                Start Ranking Higher Today!
              </p>
              <img
                src="/images/seo-guys.jpg"
                alt="Maryland SEO experts - Bowie SEO"
                width="1000"
                height="700"
              />
              <ul>
                <li>
                  Get a personalized video audit for your company's website
                  delivered to your email
                </li>
                <li>
                  Learn what's stopping you from ranking higher and fix it.
                </li>
              </ul>
              <OfferForm />
            </div>
          </div>
        </section>
        <section className="reasons-section">
          <div className="medium-container">
            <h2 className="title">5 Benefits of Doing Local SEO</h2>
            <h3>#1. Local SEO Can Help You Rank Higher in Search Engines</h3>
            <p>
              If you want your website to rank higher in search engines like
              Google, then you need an SEO expert on your team. We can help
              optimize your site so that it appears as high as possible in
              search results. This is important because the higher your site
              ranks, the more likely people are to find it. And, of course, the
              more traffic you get to your site, the more potential customers
              you have.
            </p>
            <h3>
              #2. Local SEO Can Help You Stay Up-to-Date on the Latest Industry
              and Algorithm Changes
            </h3>
            <p>
              The world of SEO is always changing. Google makes hundreds of
              algorithm changes every year, and new technologies and trends are
              always emerging. It can be tough to keep up with all of these
              changes, but it’s important if you want to maintain a high ranking
              in search results. Luckily, a local SEO expert can help you stay
              on top of all the latest industry changes and ensure that your
              website is always optimized for the latest best practices.
            </p>
            <h3>#3. Organic Search Traffic is Free</h3>
            <p>
              Unlike Facebook and Google Ads, you don't have to pay to get
              traffic to your website.
            </p>
            <p>
              If your website is relevant to what a searcher is looking for, and
              supplies the best information, your website will appear on the
              first page of the organic search or the Map Pack.
            </p>
            <h3>
              #4. Local SEO Can Help You Increase Your Website’s Conversion Rate
            </h3>
            <p>
              Once you have more traffic coming to your website, it’s important
              to make sure that as many of those visitors as possible are taking
              the desired action. That’s where an expert in conversion rate
              optimization (CRO) comes in. We can help improve your website’s
              design, copy, and overall user experience so that more visitors
              take the desired action, whether that’s signing up for your email
              list, making a purchase, or contacting you for more information.
            </p>
            <h3>#5. You Will Outrank Your Competitors in the Search Results</h3>
            <p>
              Search engine optimization makes your website better. When you do
              local SEO you will create a more significant online presence,
              appear higher in the search rankings, get more traffic, more
              customers will see you and find your business.   
            </p>
          </div>
          <div className="btn">
            <a href="tel:+2402660588">
              <Button>Call (240) 266-0588</Button>
            </a>
          </div>
        </section>

        <section>
          <div className="services-container">
            <h2 className="title">How Does Local SEO Work?</h2>
            <p className="sub-text">
              Our local SEO process generates more leads and customers. Let's
              develop an SEO strategy for your business today!
            </p>
          </div>
          <div className="btn">
            <a href="tel:+2402660588">
              <Button>Call (240) 266-0588</Button>
            </a>
          </div>
          <ProcessSection {...localSEO1} />
          <ProcessSection {...localSEO2} />
          <ProcessSection {...localSEO3} />
          <ProcessSection {...localSEO4} />
          <ProcessSection {...localSEO5} />
          <ProcessSection {...localSEO6} />
          <ProcessSection {...localSEO7} />
        </section>
        <section className="reasons-section">
          <div className="services-container">
            <h2 className="title">
              Attract More Leads and Customers with Local SEO!
            </h2>
            <p className="center">
              Call us and let's start your SEO strategy today!
            </p>
            <div className="btn">
              <a href="tel:+2402660588">
                <Button>Call (240) 266-0588</Button>
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="container grid">
            <img
              src="images/maryland-seo-company.jpg"
              alt="Maryland SEO Company - Bowie SEO"
              width="1000"
              height="450"
              className="img-info"
            />
            <div className="text-info">
              <h2 className="title">
                4 Reasons Why You Must Invest in Local SEO Services
              </h2>
              <h3>1. Search Engines are Not Going Away</h3>
              <p>
                Search engines are the #1 way to search for information online.
                As more and more people use Google and other search engines to
                find information, it very unlikely that search engines will be
                replaced by anything else.
              </p>
              <h3>
                2. More People use Search Engines to Find Local Information
              </h3>
              <p>
                More and more people are using search engines to find local
                information.
              </p>
              <p>
                In fact,{' '}
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
                results when potential customers look for your services.
              </p>
              <h3>3. Your Competitors are Doing Local SEO</h3>
              <p>
                If your competitors are ranking higher than you in the search
                results, they may already be doing Local SEO.
              </p>
              <p>
                To compete and rank above your competitors, you will also have
                to use Local SEO to find opprotunities to beat them in the
                search results and the Map Pack.
              </p>
              <h3>4. To Get to the First Page</h3>
              <p>Why do you want to get to the first page?</p>
              <p>Because the first page gett all the traffic.</p>
              <p>
                <a
                  href="https://www.smallbizgenius.net/by-the-numbers/seo-statistics/#gref"
                  target="_blank"
                >
                  75% of searchers
                </a>{' '}
                never go past the first page of search results. The second page
                only get about 6%, and the third page gets even less.
              </p>
            </div>
          </div>
          <div className="btn">
            <a href="tel:+2402660588">
              <Button>Call (240) 266-0588</Button>
            </a>
          </div>
        </section>
        <section>
          <div className="services-container">
            <h2>Your Local SEO Services Include...</h2>
            <p className="sub-text">
              Our SEO services are designed to help search engines crawl, index,
              and render your website and increase SEO performance.
            </p>
            <div className="services">
              <Container>
                <Link href="/seo-audit">
                  <Card>
                    <div className="card-info">
                      <img
                        src="/images/local.svg"
                        alt="Keyword ranking image"
                        loading="lazy"
                      />
                      <h3>Site Audit</h3>
                      <p>
                        Identify and find technical issues affecting your
                        website and stopping it from performing well in the
                        search engines.
                      </p>
                    </div>
                    <p>Learn More</p>
                  </Card>
                </Link>
                <Card>
                  <div className="card-info">
                    <img
                      src="/images/audit.svg"
                      alt="Keyword ranking image"
                      loading="lazy"
                    />
                    <h3>Keyword Research</h3>
                    <p>
                      Build a site structure that is easy for search engines to
                      crawl and for users to navigate.
                    </p>
                  </div>
                </Card>
                <Link href="/technical-seo">
                  <Card>
                    <div className="card-info one">
                      <img
                        src="/images/keyword-research.svg"
                        alt="Keyword ranking image"
                        loading="lazy"
                      />
                      <h3>Technical SEO</h3>
                      <p>
                        Spread link juice and ranking power around your site
                        with internal linking and help boost your site
                        authority.
                      </p>
                    </div>
                    <p>Learn More</p>
                  </Card>
                </Link>
                <Card>
                  <div className="card-info one">
                    <img
                      src="/images/keyword-research.svg"
                      alt="Keyword ranking image"
                      loading="lazy"
                    />
                    <h3>Competitor Analysis</h3>
                    <p>
                      Spread link juice and ranking power around your site with
                      internal linking and help boost your site authority.
                    </p>
                  </div>
                </Card>
                <Card>
                  <div className="card-info">
                    <img
                      src="/images/analysis.svg"
                      alt="Man analyzing data"
                      loading="lazy"
                    />
                    <h3>GMB Optimization</h3>
                    <p>
                      Win SERP features by adding structured data to your site.
                      Structured data helps search engines understand what your
                      content is about.
                    </p>
                  </div>
                </Card>
                <Card>
                  <div className="card-info">
                    <img
                      src="/images/competitive-analysis.svg"
                      alt="Man analyzing data"
                      loading="lazy"
                    />
                    <h3>Link Building</h3>
                    <p>
                      Slow websites affect your website’s SEO performance. Fix
                      slow websites and improve your user experience,
                      conversions, and rankings.
                    </p>
                  </div>
                </Card>
                <Card>
                  <div className="card-info">
                    <img
                      src="/images/competitive-analysis.svg"
                      alt="Man analyzing data"
                      loading="lazy"
                    />
                    <h3>Content Creation / Optimization</h3>
                    <p>
                      Identify and remove any manual penalties affecting your
                      rankings and conversions.
                    </p>
                  </div>
                </Card>
                <Link href="/free-website-audit">
                  <Card>
                    <div className="card-info">
                      <img
                        src="/images/thinking.svg"
                        alt="Woman thiniking about getting a free mini SEO audit."
                        loading="lazy"
                      />
                      <h3>Monitoring / Tracking</h3>
                      <p>
                        Get actionable advice and recommendations from technical
                        SEO consultants with SEO knowledge and experience.
                      </p>
                    </div>
                  </Card>
                </Link>
                <Link href="/free-mini-audit">
                  <Card>
                    <div className="card-info">
                      <img
                        src="/images/thinking.svg"
                        alt="Woman thiniking about getting a free mini SEO audit."
                        loading="lazy"
                      />
                      <h3>Free Website Audit</h3>
                      <p>
                        Find out what's stopping your business website from
                        performing better in Google searches with a free website
                        audit.
                      </p>
                    </div>
                    <p>Learn more</p>
                  </Card>
                </Link>
              </Container>
            </div>
          </div>
        </section>
        <div className="btn">
          <Link href="/contact" passHref target="_blank">
            <Button>Contact us today!</Button>
          </Link>
        </div>
        <section className="why-choose">
          <div className="medium-container">
            <h2 className="title">
              Why Work With Bowie SEO for Your Local SEO?
            </h2>
            <p className="sub-text">
              Work with Bowie SEO and experience the difference between our
              company and other SEO companies.
            </p>
            <div className="white">
              <h3>#1. Monthly Contracts, Not 12 Month Contracts</h3>
              <p>We only have monthly contracts.</p>
              <p>
                Whenever you want to stop (why would you if you're making
                money), you can. Unlike other companies, we don't force you into
                anything long-term.
              </p>
              <p>It works out great for both of us.</p>
            </div>
            <div className="white">
              <h3>#2. We Don't Work With Your Competition</h3>
              <p>
                If we're doing Local SEO for your contracting business in
                Annapolis, Maryland, we cannot work with any other contracting
                company in Annapolis.
              </p>
              <p>
                That would be unfair to our clients as we will be working for
                you and the competition.
              </p>
              <p>That's not ok.</p>
              <p>
                Some digital marketing companies don't care and will do SEO for
                you and your competitors in the same area.
              </p>
              <p>Think about it.</p>
              <p>
                Would you want one of your employees working for you and one of
                your competitiors?
              </p>
            </div>
            <div className="white">
              <h3>#3. We Reachable!</h3>
              <p>
                When you work with us, we look at your business as if it was our
                business. We want to see your business succeed! We don't just
                want to get you to rank higher for a few keywords and then
                disappear. We want to help you grow your business, and we will
                be your SEO team.
              </p>
              <p>
                Plus, you get a local SEO company working on your campaign, not
                interns.
              </p>
              <p>
                You get a team of SEO experts working together to bring you the
                best results possible.
              </p>
            </div>
            <div className="white">
              <h3>#4. All We Do is Search Engine Optimization</h3>
              <p>We only specialize in SEO.</p>
              <p>
                Unlike other marketing companies, we don't offer a plethora of
                digital marketing solutions.
              </p>
              <p>
                We don't offer web design, web development, social media
                management, Google ads, custom software development, or other
                online advertising services.
              </p>
              <p>We only offer SEO services.</p>
              <p>
                We're a boutique SEO company that focuses on bringing you
                quality traffic and higher rankings in all the major search
                engines.
              </p>
            </div>
          </div>
          <div className="btn">
            <a href="tel:+2402660588">
              <Button>Call (240) 266-0588</Button>
            </a>
          </div>
        </section>
        <section>
          <div className="medium-container">
            <h2 className="title">FAQs</h2>
            <div className="faq-question-1">
              <div className="large-number">1.</div>
              <div className="question">
                <div>
                  <h3>How Long Does Local SEO Take To Start Working?</h3>
                  <p>Always remeber that local SEO is a long-term process.</p>
                  <p>
                    It can take 3 to 6 months or it can take 6 to 12 months to
                    see any results from doing local SEO.
                  </p>
                  <p>How long it takes to work will depend on factors like:</p>
                </div>

                <ul>
                  <li>The strength of your domain.</li>
                  <li>The competition in your local area.</li>
                  <li>
                    Your competitor's website strength and backlink profile, and
                    more.
                  </li>
                </ul>
                <p>
                  However, once you start ranking higher in search engine
                  results pages (SERPs), you can expect a steady stream of
                  targeted traffic headed your way.
                </p>
                <p>
                  To see where your website ranks, get a Free Mini SEO Audit
                  from us today.
                </p>
              </div>
            </div>
            <div className="btn">
              <a href="tel:+2402660588">
                <Button>Call (240) 266-0588</Button>
              </a>
            </div>
            <div className="faq-question-2">
              <div className="question">
                <h3>What is the Cost of Local SEO?</h3>
                <p>
                  The cost of Local SEO services will vary depending on the size
                  and location of your business. The cost will also consider the
                  competition in your industry, the amount of work to be done,
                  and more. We recommend budgeting around <b>$1000 - $3000</b>{' '}
                  per month for local SEO services.
                </p>
                <p>
                  If you're in a competitive industry, you may need to increase
                  your budget to get the results you need. Contact us today for
                  a free consultation to discuss your specific needs and budget.
                </p>
                <p>
                  If these numbers seem high to you, this type of marketing may
                  not be the best solution for you at this present time.
                </p>
              </div>
              <div className="large-number">2.</div>
            </div>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Book a call today!</Button>
              </a>
            </div>
            <div className="faq-question-3">
              <div className="large-number">3.</div>
              <div className="question">
                <h3>What is The Difference between Local SEO and SEO?</h3>
                <p>
                  The main difference between SEO and Local SEO is that Local
                  SEO is more targeted towards bringing in traffic from a
                  specific geographic area, while SEO is more concerned with
                  getting traffic and increasing visibility on a national or
                  global level.
                </p>
                <p>
                  Let's say you're a swimming pool builder in Annapolis,
                  Maryland.
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
                  If you have an ecommerce store that sells swimming pool
                  supplies all over the country, then SEO will be the best
                  option.
                </p>
              </div>
            </div>
            <div className="btn">
              <Link href="/free-website-audit" passHref target="_blank">
                <Button>Free Mini SEO Audit</Button>
              </Link>
            </div>
            <div className="faq-question-4">
              <div className="question">
                <h3>How Can SEO Help My Business?</h3>
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
                  you're an authority in your industry, which can encourage
                  people to do business with you.
                </p>
                <p>
                  Finally, SEO can also help you to save money on marketing and
                  advertising costs by helping you to reach your target audience
                  more effectively. If you're looking for ways to improve your
                  business's bottom line, then investing in SEO is a smart
                  choice.
                </p>
                <p>
                  SEO can be a complex and time-consuming process, but it's
                  worth the effort if you want to improve your business's bottom
                  line. If you're not sure where to start, then consider hiring
                  an SEO expert to help you get the most out of your website.
                  With their help, you can take your business to the next level.
                </p>
                <p>
                  If you want to learn more about how local SEO can help your
                  business, then contact us today. We'll be happy to answer any
                  questions you have and help you get started on the path to
                  success.
                </p>
              </div>
              <div className="large-number">4.</div>
            </div>
            <div className="btn">
              <a href="tel:+2402660588">
                <Button>Call (240) 266-0588</Button>
              </a>
            </div>
          </div>
        </section> */}
      </MainLayout>
    </>
  )
}

export default LocalSEO
