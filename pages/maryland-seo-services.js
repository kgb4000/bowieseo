/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'
import Button from '../components/Button'
import PageHero from '../components/PageHeroSection'
import { Card, Container } from '../components/CardSection'
import styled from 'styled-components'

import { NextSeo } from 'next-seo'

const calendly = 'https://calendly.com/bowieseo/30min'

const LocalSEO = () => {
  const SEO = {
    title: 'Maryland SEO Services For Maryland Businesses',
    description:
      'We provide Maryland SEO Services for Maryland Businesses to get more traffic, leads, and revenue. Contact us today!',
    type: 'website',
    canonical: 'https://bowieseo.com/maryland-seo-services',
    openGraph: {
      title: 'Maryland SEO Services For Maryland Businesses',
      description:
        'We provide Maryland SEO Services for Maryland Businesses to get more traffic, leads, and revenue. Contact us today!',
      type: 'website',
      image: [{}],
    },
  }
  return (
    <>
      <NextSeo noindex={true} />
      <PageHero
        heading="Maryland SEO Services"
        subText="Get Maryland SEO services today. Increase your website traffic, get more leads, increase revenue and grow your business."
        heroBtnLink={calendly}
        buttonText="Book a call"
        heroBtnLink1="/free-mini-seo-audit"
        buttonText1="Free Mini SEO Audit"
      />
      <main>
        <section>
          <div className="container">
            <h2>Grow Your Business with Maryland SEO Services</h2>
            <p>
              Get more leads and customers with Maryland SEO services from a{' '}
              <Link href="/maryland-seo-company" passHref>
                <a>Maryland SEO company</a>
              </Link>{' '}
              that specializes in search engine optimization for Maryland
              businesses.
            </p>
            <p>
              We provide only SEO services because we want businesses in
              Maryland to:
            </p>
            <Intro>
              <img
                src="/images/customers.svg"
                alt="Maryland SEO services for businesses customers in Maryland."
                className="icon-right"
                loading="lazy"
              />
              <ul>
                <li>Get more business online</li>
                <li>Increase your website traffic</li>
                <li>Rank higher in the search engines</li>
                <li>Spend less money on social media ads</li>
                <li>Build trust with customers and the search engines</li>
                <li>Make more money and grow your business</li>
              </ul>
            </Intro>
            <p>
              Believe it or not, business owners in Maryland can achieve all of
              this with search engine optimization.
            </p>
            <p>
              SEO is one of the best marketing channels to help your business
              rank higher in Google, get more web traffic, and get more leads.
            </p>
          </div>
        </section>
        <div className="btn">
          <Link href={calendly} passHref target="_blank">
            <Button>Book a Call Today!</Button>
          </Link>
        </div>
        <section>
          <div className="container">
            <h2>What is SEO?</h2>
            <p>
              Search engine optimization is the process of improving your
              website for search engines and for users, while increasing web
              traffic and improving your website visibility.
            </p>
            <p>
              The process takes your website and makes changes so that when
              people search for your products or services, they would find your
              website.
            </p>
            <p>
              <b>Think about this.</b>
            </p>
            <p>
              If you search for the products or services your business offers,
              does your website show up in the search results?
            </p>
            <p>
              <b>Does your website show up in the Google Map Pack?</b>
            </p>
            <p>
              <b>Does it show up in the organic search results?</b>
            </p>
            <p>If it does, great job.</p>
            <p>
              If it doesn't appear in the map pack or the organic search
              results, you may need <b>search engine optimization</b>
              to get it to appear in the search results.
            </p>
            <p>
              If you don't start doing SEO, your website may never appear in the
              search results when people search for services you offer.
            </p>
          </div>
        </section>
        <div className="btn">
          <Link href={calendly} passHref target="_blank">
            <Button>Book a Call Today!</Button>
          </Link>
        </div>
        <section>
          <div className="container">
            <h2>7 Big Reasons Businesses Need Maryland SEO Services [2022]</h2>
            <h3>#1. SEO is an Investment that Can Pay Off for Years to Come</h3>
            <p>
              Unlike many other marketing strategies, SEO is an investment that
              can pay off for years to come.
            </p>
            <p>
              Once you've invested the time and effort into optimizing your
              website and content, your website will continue to rank well in
              the search engines long after you've stopped actively working on
              it.
            </p>
            <p>
              This means that SEO can provide a valuable return on investment
              (ROI) for your business. In fact, a recent study showed that
              businesses who invest in SEO earn more than 5X ROI on their
              initial investment.
            </p>
            <p>
              If you're looking for a long-term marketing strategy that can
              provide a valuable ROI for your business, Maryland SEO is a great
              option to consider.
            </p>
            <h3>
              #2. Your Website Will Become an Asset, Not Just an Online Flyer
            </h3>
            <p>Your website is one of your most important marketing tools.</p>
            <p>
              It's a 24/7 salesperson, working to promote your business and
              attract new customers.
            </p>
            <p>
              Search engine optimization helps you optimize your webiste and
              make it better by making your website an asset that generates
              leads and attracts potential customers.
            </p>
            <p>
              When people search for keywords related to your business, your
              site will appear in the search results. Whe you appear in the
              results, searchers are more likely to click through to your site
              and become customers.
            </p>
            <h3>
              #3. More People Will Recognize Your Business By Seeing Your
              Website in Google
            </h3>
            <p>
              When your website appears in Google's search results, it acts as a
              powerful form of advertising for your business.
            </p>
            <p>
              After all, Google is the most popular search engine in the world,
              and appearing on its first page sends a strong signal to potential
              customers that you're a credible and trustworthy business worth
              their time and money.
            </p>
            <p>
              Additionally, appearing in Google's search results can help
              increase brand awareness for your business. Even if someone
              doesn't click on your website, they're still exposed to your brand
              name and logo every time they see your listing in the SERPs.
            </p>
            <p>
              Over time, this repeated exposure can lead to increased name
              recognition and brand awareness, both of which are essential for
              driving long-term growth.
            </p>
            <h3>
              #4. You'll Reach Your Target Market, and Customers Will Find Your
              Business
            </h3>
            <p>
              When you optimize your website and content for specific keywords,
              you'll not only improve your chances of ranking well in search
              engine results pages (SERPs), but you'll also attract people who
              are interested in your products or services.
            </p>
            <p>
              In other words, by targeting the right keywords, you can ensure
              that the people who see your website are precisely the people who
              are most likely to become your customers.
            </p>
            <p>
              Of course, SEO is just one part of a comprehensive marketing
              strategy. But if you're looking for a way to reach more of your
              target market and grow your business, Maryland SEO is a great
              place to start.
            </p>
            <h3>#5. You'll Outrank Your Competitors in the Search Results</h3>
            <p>
              Search engine optimization makes your website better for search
              engines and your customers. When you do SEO and your competitors
              don't, your SEO efforts will create a more significant online
              presence, rank higher in the search rankings, get more traffic,
              and do more online business.   
            </p>
            <h3>
              #6. You'll Spend Less Money on Social Media Marketing and PPC Ads
            </h3>
            <p>Facebook ads, Google ads, Instagram ads.</p>
            <p>They're all getting expensive.</p>
            <p>
              The more businesses use them for quick short-term wins, the more
              the cost will go up.
            </p>
            <p>
              You have to pay to boost your posts, create ads, and promote your
              page. However, you can use SEO to get your business in front of
              more people without spending a lot of money.
            </p>
            <p>
              SEO optimizes your website to rank higher in search engine
              results. When you rank higher, you get more organic traffic which
              means more people will see your content without you having to pay
              for it.
            </p>
            <p>It's free traffic that you don't have to pay for</p>
            <h3>#7. Search Engines are Not Going Away</h3>
            <p>
              Search engines are still the most popular way to find information
              online, and they are not going away anytime soon.
            </p>
            <p>They are fast and easy to use.</p>
            <p>
              You can quickly enter a few keywords and get a list of relevant
              results in just a few seconds.
            </p>
            <p>
              A good search engine will index billions of web pages, making it
              very likely that you will find what you are looking for.
            </p>
            <p>
              Also, the algorithms that search engines use to rank websites are
              getting more sophisticated all the time, making it easier to find
              the most relevant results.
            </p>
          </div>
        </section>
        <div className="btn">
          <Link href={calendly} passHref>
            <Button>Book a call today!</Button>
          </Link>
        </div>
        <section>
          <div className="services-container">
            <h2>Popular Maryland SEO Services</h2>
            <p className="sub-text">
              Our local SEO services help business in the DC, Maryland, and
              Virginia get more website traffic, attract potential customers,
              and make money.
            </p>
            <div className="services">
              <Container>
                <Card>
                  <div className="card-info">
                    <img
                      src="/images/local.svg"
                      alt="Keyword ranking image"
                      loading="lazy"
                    />
                    <h3>Local SEO</h3>
                    <p>
                      Our local customers and clients are searching for your
                      skills and services. Make sure they can find you and not
                      your competition.
                    </p>
                  </div>
                  <p>Learn more</p>
                </Card>
                <Link href="/seo-audit">
                  <Card>
                    <div className="card-info">
                      <img
                        src="/images/audit.svg"
                        alt="Keyword ranking image"
                        loading="lazy"
                      />
                      <h3>SEO Audit</h3>
                      <p>
                        See why your website isn't getting traffic or attracting
                        customers, and why your competition is{' '}
                        <span className="highlight ">stealing</span> your
                        customers.
                      </p>
                    </div>
                    <p>Learn more</p>
                  </Card>
                </Link>
                <Card>
                  <div className="card-info one">
                    <img
                      src="/images/keyword-research.svg"
                      alt="Keyword ranking image"
                      loading="lazy"
                    />
                    <h3>Keyword Research</h3>
                    <p>
                      Get more website traffic and more leads with our powerful
                      SEO services. Let Bowie SEO put your business on the path
                      to SEO success.
                    </p>
                  </div>
                  {/* <p>Learn more</p> */}
                </Card>
                <Card>
                  <div className="card-info">
                    <img
                      src="/images/speed-test.svg"
                      alt="Keyword ranking image"
                      loading="lazy"
                    />
                    <h3>On-Page Optimization</h3>
                    <p>
                      Get more website traffic and more leads with our powerful
                      SEO services. Let Bowie SEO put your business on the path
                      to SEO success.
                    </p>
                  </div>
                  {/* <p>Learn more</p> */}
                </Card>
                <Card>
                  <div className="card-info">
                    <img
                      src="/images/competitive-analysis.svg"
                      alt="Man analyzing data"
                      loading="lazy"
                    />
                    <h3>GMB Optimization</h3>
                    <p>
                      Optimize your Goolge My Business page and let your
                      customers find you directly in the local search results.
                    </p>
                  </div>
                  {/* <p>Learn more</p> */}
                </Card>
                <Link href="/free-website-audit">
                  <Card>
                    <div className="card-info">
                      <img
                        src="/images/thinking.svg"
                        alt="Woman thiniking and in thought about why ehr website is not ranking"
                        loading="lazy"
                      />
                      <h3>Free Website Audit</h3>
                      <p>
                        Find out what's stopping your website from performing
                        better in the search engines with a free website audit.
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
          <Link href="/seo-services" passHref>
            <Button>See more services</Button>
          </Link>
        </div>
        <section>
          <div className="container">
            <h2>How Does Maryland SEO Work, What is The Process?</h2>
            <p>
              SEO is a process that improves your website so that it appears in
              the search results when people search for your products and
              services.
            </p>
            <p>This process includes:</p>
            <ol>
              <li>An SEO Audit</li>
              <li>A Technical SEO Analysis</li>
              <li>A Competitor Analysis</li>
              <li>Keyword Research</li>
              <li>Local SEO</li>
              <li>On-page SEO Checks</li>
              <li>Off-page SEO Checks</li>
            </ol>
            <section>
              <div className="local-section-work">
                <div>
                  <h3>#1. SEO Audit</h3>
                  <img
                    src="/images/seo-audit.svg"
                    alt="Woman doing local SEO audit."
                    loading="lazy"
                  />
                  <p>
                    If you have a website and start an SEO strategy, you must
                    perform an SEO audit.
                  </p>
                  <p>
                    An SEO audit will uncover problems in your website that may
                    be keeping you from ranking higher in the search engines and
                    killing your online visibility.
                  </p>
                  <p>An SEO audit includes:</p>
                  <ul>
                    <li>A Technical SEO Analysis</li>
                    <li>A Competitor Analysis</li>
                    <li>A Google My Business Profile audit</li>
                    <li>On-page SEO checks</li>
                    <li>Off-page SEO checks</li>
                    <li>A Content Audit</li>
                    <li>A Citation audit</li>
                  </ul>
                </div>
              </div>
              <div className="local-section-work">
                <div>
                  <h3>#2. Technical SEO Analysis</h3>
                  <p>
                    Google, and other search engines, need to crawl and index
                    your site. They crawl your website using spiders to analyze
                    each page on your website. After crawling your website, your
                    web pages get indexed.
                  </p>
                  <p>
                    If Google can't crawl your website, it cannot index your
                    website. If it can't index your website, you will not rank
                    in Google.
                  </p>
                  <p>
                    As part of our technical analysis, we make sure that your
                    website gets indexed on Google. We also make sure that pages
                    that don't need to be indexed are not indexed.
                  </p>
                  <p>
                    Other factors that are part of our technical analysis
                    include:
                  </p>
                  <ul>
                    <li>Website design</li>
                    <li>Site architecture</li>
                    <li>404 errors and broken links</li>
                    <li>Site speed</li>
                    <li>Mobile and responsive website</li>
                    <li>Sitemaps</li>
                    <li>SSL and Security</li>
                    <li>Google tools - Google Analytics and Google Console</li>
                  </ul>
                </div>
              </div>
              <div className="local-section-work">
                <div>
                  <h3>#3. Competitor Analysis</h3>
                  <p>
                    If you have a businees in Maryland, chances are someone else
                    is selling the same products or services as you.
                  </p>
                  <p>
                    So how do you get an advantage over your competition and
                    rank higher in Google?
                  </p>
                  <p>We use a competitive analysis.</p>
                  <p>
                    A competitive anaylysis is a strategy that you use to look
                    at your competitors' websites. You use a competitive
                    analysis to look at your their website's strengths and
                    weaknesses and compare them to your website's strengths and
                    weaknesses.
                  </p>
                  <p>In our competitive analysis, we do:</p>
                  <ul>
                    <li>Keyword Research</li>
                    <li>Content Research</li>
                    <li>Technical SEO Reseach</li>
                    <li>Link Research</li>
                    <li>Local SEO</li>
                  </ul>
                </div>
              </div>
              <div className="local-section-work">
                <div>
                  <h3>#4. Local SEO</h3>
                  <p>
                    Local SEO is the process of improving your website for
                    search engines, your location, and your local audience.
                    Although similar to SEO, local SEO focuses on improving your
                    website to attract customers in your local area.
                  </p>
                  <p>
                    For example, if you own an asphalt paving company in Bowie,
                    you will want to target customers in Bowie. You will have to
                    target local keywords like Bowie, or Maryland, or even
                    Annapolis so that you come up in the Local Map Pack.
                  </p>
                </div>
              </div>
              <div className="local-section-work">
                <div>
                  <h3>#5. Google Business Profile</h3>
                  <p>
                    Your Google Business listing is one of your most powerful
                    tools in connecting with customers online. Your profile
                    includes plenty of ways to connect with customers and build
                    trust. Take advantage of all that a Google Business profile
                    has to offer to help promote your small business.
                  </p>
                  <p>
                    If you don't have a Google My Business page, you are missing
                    consumers searching for your products and services.
                  </p>
                  <p>
                    If you don't have a Google Business profile,{' '}
                    <Link href="/contact">
                      <a>contact us</a>
                    </Link>{' '}
                    and we'll help set one up for your business.
                  </p>
                </div>
              </div>
              <div className="local-section-work">
                <div>
                  <h3>#6. Link Building</h3>
                  <p>
                    Local link building is one way to help build your website's
                    authority. Getting backlinks from sites like the Maryland
                    Chamber of Commerce and the Better Business Bureau can help
                    your site rank higher than your competition.
                  </p>
                  <p>Other ways to get valuable backlinks in your area are:</p>
                  <ul>
                    <li>local newspapers and media outlets</li>
                    <li>other local businesses</li>
                    <li>local charities</li>
                    <li>sponsoring events</li>
                    <li>volunteering your services to worthy causes</li>
                  </ul>
                </div>
              </div>
              <div className="local-section-work">
                <div>
                  <h3>#7. On-Page SEO</h3>
                  <p>
                    On-page SEO is one of the most important aspects of search
                    engine optimization.
                  </p>
                  <p>
                    It refers to all the factors on your website that can affect
                    your ranking in the search engine results pages (SERPs).
                    This includes things like your website's title and meta
                    tags, as well as its content and structure.
                  </p>
                  <p>
                    There are a number of things you can do to optimize your
                    website for on-page SEO. Some of these things include:
                  </p>
                  <ul>
                    <li>Improve user Experience</li>
                    <li>Improve your website's structure</li>
                    <li>Test and optimize title tags and meta descriptions</li>
                    <li>Choose the right keywords</li>
                    <li>Use keywords strategically</li>
                    <li>Increase dwell time on your webpages</li>
                    <li>Use relevant and high-quality content</li>
                  </ul>
                </div>
              </div>
              <div className="local-section-work">
                <div>
                  <h3>#8. Off-Page SEO</h3>
                  <img
                    src="/images/create-content.svg"
                    alt="Creating content for search engine optimization."
                    loading="lazy"
                  />
                  <p>Off-page SEO another important part of SEO.</p>
                  <p>
                    It is the process of optimizing a website for higher search
                    engine rankings by building links from other websites. Link
                    building is a key part of off-page SEO, and involves
                    creating links from high-quality websites to your own site.
                    This helps to improve your site's link popularity, and can
                    ultimately lead to better search engine rankings.
                  </p>
                  <p>
                    Like on-page SEO, there are a number of things you can do to
                    improve your website's off-page SEO, which include:
                  </p>
                  <ul>
                    <li>Link building</li>
                    <li>Guest posting or blogging</li>
                    <li>Directory submission</li>
                    <li>Social media optimization</li>
                  </ul>
                </div>
              </div>
            </section>
            <div className="btn">
              <Link href={calendly} passHref target="_blank">
                <Button>Book a Call Today!</Button>
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>
              Why Work With Us Instead of other Digital Marketing Agencies
            </h2>
            <h3>#1. All We Do is Search Engine Optimization</h3>
            <p>
              We are not like other digital marketing agencies that try to do
              everything.
            </p>
            <p>We don't do Google ads, website design, or web development.</p>
            <p>No social media management or reputation management here.</p>
            <p>We do one thing and we do it well.</p>
            <p>
              We get you to rank higher in the search engines, which gets you
              more leads, customers, and making more money.
            </p>
            <h3>
              #2. We Become Your Partners, Not an SEO Company You Just Hired!
            </h3>
            <p>
              When you work with us, we look at your business as if it was our
              business. We don't just want to get you to rank higher for a few
              keywords and then disappear. We want to help you grow your
              business and we become part of your team. We want to see your
              business succeed!
            </p>
            <p>
              Plus, you get search engine optimization{' '}
              <Link href="maryland-seo-expert">
                <a>experts</a>
              </Link>{' '}
              working on your campaign, not interns.
            </p>
            <p>
              You get a team of people with different skillsets and expertise
              all working together to get you the best results possible.
            </p>
            <h3>#3. SEO Doesn't Stop Working if You Stop Working With Us.</h3>
            <p>
              If you decide to stop working with us (why would you), your SEO
              strategy will not stop working.
            </p>
            <p>
              Once we get you to rank higher in the search engines, you will
              stay there as long as you keep up with the strategy we have in
              place.
            </p>
            <p>You don't have to keep paying us to maintain your rankings.</p>
            <p>
              Of course, if you want to continue growing your traffic and leads,
              we would be happy to reamin partners.
            </p>
            <h3>#4. Complete Transparency</h3>
            <p>
              We've heard of other SEO companies being a ghost for the month,
              then they appear when it's time to pay the bill.
            </p>
            <p>That's ludacris.</p>
            <p>We'll never do you like that.</p>
            <p>
              We will keep you informed of what we're doing so you don't have to
              ask "What we're doing?"
            </p>
            <p>
              We'll never leave you in the dark. You can call or email us
              anytime if you have any questions about you SEO campaign.
            </p>
            <h3>#5. We Focus on Your Growth, Not Our Growth</h3>
            <p>Our goal is to help your company grow first.</p>
            <p>Not Bowie SEO.</p>
            <p>
              The thing is that when we put your company before our's, we grow
              with you. It's how the universe works.
            </p>
            <p>
              We don't accept clients in the your area, in the same business as
              you.
            </p>
            <p>
              Again, that would be ludacris, and we would be competing against
              ourselves.
            </p>
            <p>
              When you work with us, we bocome one company competitng against
              all others.
            </p>
            <p>Book a call today and let's get started.</p>
          </div>
        </section>
        <div className="btn">
          <Link href={calendly} passHref target="_blank">
            <Button>Book a Call Today!</Button>
          </Link>
        </div>
        <section>
          <div className="container">
            <h2>Frequently Asked Questions</h2>
            <section>
              <h3>#1. How Do I Know If I Need SEO for My Business?</h3>
              <p>
                There are several ways you'll know if your business needs SEO or
                local SEO.
              </p>
              <ol>
                <li>
                  <h4>Your website is slow</h4>
                  <p>Page speed is one of Goolge's ranking factors.</p>
                  <p>
                    If your website takes a long time (more than 3 seconds) to
                    load, then something is wrong.
                  </p>
                  <p>
                    You can go to{' '}
                    <a
                      href="https://pagespeed.web.dev/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      page speed insights
                    </a>{' '}
                    and check your pagespeed.
                  </p>
                  <p>
                    Fixing you pagespped not only helps with website
                    conversions, it also helps create a better user experience.
                  </p>
                </li>
                <li>
                  <h4>You don't get any leads from your website</h4>
                  <p>
                    If you don't get any leads from your website, it may be a
                    sign that you need to do some search engine optimization. It
                    could be a number of reasons.
                  </p>
                  <p>
                    Some reasons could be that you're not targeting the right
                    keywords, or that you website isn't indexed in Google.
                  </p>
                </li>
                <li>
                  <h4>Your website is not secure</h4>
                  <p>
                    If your website is not secure, Google will rank your website
                    lower than those that are secure.
                  </p>
                  <p>
                    Also, when potential customers visit your website and see
                    that it's not secure, they may leave, which is another
                    reason you may not be getting any leads from your website.
                  </p>
                </li>
                <li>
                  <h4>Your website is not indexed in Google</h4>
                  <p>
                    Just because you enter your domain name and your website
                    comes up, it doesn't mean that your website will show up
                    when someone searches for your services.
                  </p>
                  <p>Your website may not be in Google's database.</p>
                </li>
                <li>
                  <h4>Your competitors are ranking higher than you</h4>
                  <p>
                    If your competitors are ranking higher than you in the map
                    pack and the organic search results, you'll want to start
                    doing SEO.
                  </p>
                  <p>
                    Chances are your competitors are doing SEO and are taking
                    away YOUR customers.
                  </p>
                  <p>
                    If you want to see why your competitors are beating you, you
                    can start with a mini SEO audit. Click the button below to
                    learn more.
                  </p>
                </li>
              </ol>
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
            </section>
            <div className="btn">
              <Link href={calendly} passHref target="_blank">
                <Button>Book a Call Today!</Button>
              </Link>
            </div>
            <p>
              If these numbers seem high to you, this type of marketing may not
              be the best solution for you at this present time.
            </p>
            <section>
              <h3>#3. How Long Does Local SEO Take To Work?</h3>
              <p>Local SEO is a long-term process.</p>
              <p>
                It can take 3 to 6 months or it can take 6 to 12 months to see
                any results from doing local SEO.
              </p>
              <p>
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
              </p>
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
              <Link href="/free-mini-seo-audit">
                <Button>Free Mini SEO Audit!</Button>
              </Link>
            </div>
            <section>
              <h3>#4. Can I Do Local SEO Myself?</h3>
              <p>
                Most business owners have a lot on their plate and
                understandably can't do everything themselves.
              </p>
              <p>
                Search engine optimization (SEO) is one of those things that is
                often left to the experts.
              </p>
              <p>
                After all, SEO can be quite complex and time-consuming. But what
                if you don't have the budget for an SEO agency or consultant? Is
                it possible to do local SEO yourself? The short answer is yes,
                you can definitely do local SEO yourself. However, it will take
                some time and effort on your part.
              </p>
            </section>
            <div className="btn">
              <Link href={calendly} passHref target="_blank">
                <Button>Book a Call Today!</Button>
              </Link>
            </div>
            <section>
              <h3>#5. Can You Garauntee Me #1 Rankings?</h3>
              <p>
                No SEO company can guarantee you first page rankings on Google.
              </p>
              <p>
                However, what a reputable SEO company can do is help improve
                your website's visibility and organic search results. By
                optimizing your website for key search terms and phrases, and by
                building high quality backlinks, a good SEO company can help
                increase your chances of ranking higher in search engine results
                pages (SERPs).
              </p>
              <p>
                While there is no guarantee of first page rankings, a commitment
                to SEO can help improve your website's chances of being found by
                potential customers.
              </p>
              <p>
                If you're looking for guaranteed first page rankings on Google,
                you're likely to be disappointed. However, if you're committed
                to improving your website's visibility and organic search
                results, a reputable SEO company can help you achieve your
                goals. Contact us today to learn more about SEO and how we can
                help improve your website's ranking in search engine results
                pages.
              </p>
            </section>
            <div className="btn">
              <Link href={calendly} passHref target="_blank">
                <Button>Book a Call Today!</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default LocalSEO

const Intro = styled.div`
  img {
    max-width: 10rem;
    float: right;
    border: 4px solid #ff5200;
    border-radius: 50%;
  }
  @media screen and (min-width: 768px) {
    img {
      max-width: 20rem;
      margin: 3rem 0;
      float: right;
    }
  }
`
