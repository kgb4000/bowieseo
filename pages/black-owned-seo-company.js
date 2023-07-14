/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import MainLayout from '../components/MainLayout'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'
import {
  ReasonSec,
  Deliverable,
  Deliverables,
  Service,
} from '../components/LocatioPageEssentials'
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

const SEOAgency = 'our black-owned SEO company'

export default function blackOwnedSEOCompany() {
  const SEO = {
    title:
      'Black Owned SEO Company | We Help Increase Traffic, Leads and Sales',
    description: '!',
    canonical: 'https://bowieseo.com/black-owned-seo-company',
    openGraph: {
      title:
        'Black Owned SEO Company | We Help Increase Traffic, Leads and Sales',
      description: '',
      image: [{}],
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <MainLayout>
        <HeroSection
          heroText="We're a Black Owned SEO Company Helping Businesses Get Found on Google"
          subText="Let us take care of optimizing your website so that you can get more leads and customers."
          backgroundImage="/images/black-owned-seo-agency.webp"
          backgroundHeight="70vh"
          backgroundPosition="center"
          buttonText="Book Your Free SEO Call today!"
          buttonLink={calendly}
        />
        <section className="article-section">
          <div className="medium-container grid">
            <div>
              <h2>
                Attract More Leads Using SEO in Salisbury, or Lose Leads to Your
                Competition: It's Your Decision
              </h2>
              <p>
                You're trying to figure out how to get more leads and customers
                to your business, but nothing seems to be working.
              </p>
              <p>
                You've tried digital marketing tactics like Facebook and
                Instagram ads, Google ads, and even paid to get leads from
                HomeAdvisor, Thumbtack, and Angie's List.
              </p>
              <p>
                But you keep getting bad leads and realize you're wasting your
                time and money.
              </p>
              <p>
                You need a system to get leads and customers into your business
                regularly, and you need to own that system.
              </p>
              <p>That’s where we come in.</p>

              <p>
                You don't have to worry about digital marketing that doesn’t
                work or paying for leads from lead generation companies that
                just take your money.
              </p>
              <p>
                We’ll help you build a system to generate your leads while you
                concentrate on running your business.
              </p>
              <p>
                We’re a premiere black owned SEO company helping business owners
                get more leads and customers.
              </p>
              <p>Call us to get started to learn more.</p>
            </div>
            <img
              src="/images/black-owned-seo-company.webp"
              className="page-img-left"
              alt="Black business owner thinking about starting SEO."
              title="Black business owner thinking about starting SEO."
            />
          </div>
          <div className="btn">
            <a href={calendly} target="_blank" rel="noreferrer">
              <Button>Book Your Free Call Today!</Button>
            </a>
          </div>
        </section>
        <section>
          <div className="medium-container">
            <h2 className="title">What You Can Expect With Our SEO Services</h2>
            <p className="subtext">
              When you work with us, you get the following:
            </p>
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
                    We give you free, knowledgeable advice and support from our
                    SEO specialists. Contact us by phone or email if you have
                    any questions. We're here to support your expanding business
                    in any way we can.
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
                    Extensive keyword analysis. We find the most advantageous
                    and pertinent terms that customers use to find your
                    business. We provide a keyword database as well so you can
                    keep creating SEO content.
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
                    We offer Google My Business management to help improve your
                    local SEO rankings. Get a GMB page that is completely
                    optimized and rank in the map pack and local search results.
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
                  <h3>Google Analytics and Google Console Configuration</h3>
                  <p>
                    We set up your Google Analytics and Search Console. We
                    monitor the effectiveness of your website using these
                    technologies. They also enable us to monitor how well your
                    website is doing on Google. They also assist us in
                    determining the improvements that can be made to enhance
                    user experience and rankings.
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
                    Find out what is keeping your website from ranking higher on
                    Google. With an SEO audit, we find out exactly what we need
                    to fix for your SEO campaign to get off the ground and be
                    successful.
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
                    Show up when it counts. Local SEO puts your website in front
                    local customers looking for your services. With local SEO,
                    local customers will be able find your company instead of
                    one of your competitors. Get optimized content, a faster
                    website, and give your customers a better user experience.
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
                    Given your hectic schedule, we understand that you might not
                    have time to check in with us every day. To keep you
                    informed, we send out a weekly email update or call you to
                    let you know what's going on.
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
                    We'll take care of writing your content and service pages
                    for your website so that you won't have to. We write content
                    that bring in the most sales and money. We use the data
                    gathered from our SEO audit, keyword research, and
                    competitor analysis.
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
                    We're 100% transparent. Never worry about trying to figure
                    out what we're up to or if we're still working on your
                    campaign. Our staff will walk you through every stage of
                    what we're doing and how it's working in detail. We want you
                    to join in whatever capacity you wish. To give you peace of
                    mind that your campaign is in capable hands, we aim to keep
                    you up-to-date at all times.
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
                    We track and check your SEO campaign to make sure we're on
                    the right track to get you the results you want. We use
                    tools like Google Analytics, Google's Search Console,
                    Ahrefs, and SEMRush.
                  </p>
                </div>
              </Deliverable>
            </Deliverables>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Book Your Free Call Today!</Button>
              </a>
            </div>
          </div>
        </section>
        {/* <section className="reasons-section">
          <div className="medium-container">
            <h2 className="title">
              7 Reasons Why Salisbury Business Owners must Invest In Search
              Engine Optimization
            </h2>
            <p className="center">
              Salisbury business owners need SEO to compete online. Partner with
              an SEO company that can build your lead-gen system that will boost
              your business presence, and bring more leads and customers.
            </p>
          </div>
          <div className="medium-container">
            <ReasonSec>
              <div>
                <h3>#1. SEO Can Get Leads and Sales 24 Hours a Day</h3>
                <p>
                  Search engine optimization sends you qualified traffic and
                  leads interested in your services and more likely to buy
                  something from you than people who happen to stumble across
                  your site.
                </p>
                <h3>#2. SEO Can Help You Save Money on Online Advertising</h3>
                <p>
                  Another great thing about SEO is that it can help you save
                  money on online advertising. If you're spending money on
                  Google AdWords or other forms of online advertising, you can
                  use SEO to improve your website so that you get more traffic
                  from organic search results. This can help you save money on
                  your advertising budget and get more leads and sales from your
                  website.
                </p>
                <h3>
                  #3. SEO Can Help You Get More Leads and Sales from Your
                  Website
                </h3>
                <p>
                  SEO can help you get more leads and sales from your website.
                  By appearing on the first page of search results, you can get
                  more traffic to your website and generate more leads and sales
                  for your business. Also, when more people see your website on
                  the first page, you build trust and credibility with potential
                  customers.
                </p>
                <h3>#4. You can Save Money on Facebook and Google Ads</h3>
                <p>
                  Like most companies, you're always searching for methods to
                  save money. Reducing your reliance on paid advertising
                  (Facebook and Google ads) is one of the finest methods. An
                  experienced{' '}
                  <Link href="/maryland-seo-company" passHref>
                    <a>SEO company</a>
                  </Link>{' '}
                  can assist you in growing your traffic organically and
                  avoiding having to rely as much (or at all) on sponsored
                  material. This saves you money and gives you a more
                  sustainable long-term growth strategy.
                </p>
              </div>
              <div>
                <h3>#5. SEO Can Help You Build Better Websites</h3>
                <p>
                  SEO can also help you build better websites. Using the correct
                  keyword phrases and ensuring your website is well-optimized,
                  you can make your website more user-friendly and easier to
                  navigate. This can help improve your website's conversion rate
                  and increase your leads and sales.
                </p>
                <h3>#6. SEO Can Help You Stay Ahead of Your Competition</h3>
                <p>
                  You'll always be behind your competition if you're not using
                  search engine optimization. By ranking higher in search, you
                  can get more traffic to your website and attract leads. Also,
                  by using SEO, you can stay ahead of your competition by
                  appearing in the search results before they do.
                </p>
                <h3>#7. Search Engines are Not Going Away</h3>
                <p>
                  Search engines are not going away. They are becoming more
                  critical as more people use them to find information online.
                  SEO will be necessary for businesses as long as people use
                  search engines. If you're not using SEO, you're missing out on
                  a lot of traffic and potential customers.
                </p>
              </div>
            </ReasonSec>
          </div>
          <div className="btn">
            <a href={calendly}>
              <Button>Schedule a call today!</Button>
            </a>
          </div>
        </section> */}
        <section>
          <div className="medium-container">
            <h2 className="title">
              With Other SEO Companies, Why Work With Our Black-Owned SEO
              Company?
            </h2>
            <p className="subtext">
              We know that there are many SEO companies you can work with.
              However, working with our company has advantages.
            </p>
            <div className="grid">
              <img
                src="/images/black-seo-expert.jpg"
                className="page-img"
                width="1000"
                height="600"
                alt="Happy client."
                title="Happy client."
                loading="lazy"
              />
              <div>
                <div className="reasons">
                  <h3>Personalized Approach</h3>
                  <p>
                    We believe every business is unique and deserves a
                    customized approach. As a smaller black SEO company, we can
                    provide personalized attention and craft bespoke SEO
                    strategies tailored to your business's specific needs and
                    goals, as opposed to one-size-fits-all solutions often
                    offered by larger firms.
                  </p>
                </div>
                <div className="reasons">
                  <h3>Cultural Competence</h3>
                  <p>
                    As a Black-owned SEO company, and black entrepreneurs, we
                    understand the cultural nuances and unique challenges faced
                    by black business owners and other underrepresented groups.
                    This cultural competence allows us to create highly
                    effective SEO strategies that truly resonate with your
                    target audience and authentically represent your brand.
                  </p>
                </div>
                <div className="reasons">
                  <div>
                    <h3>Community Empowerment</h3>
                    <p>
                      Choosing to work with our company means you're not only
                      investing in your own business's success, but also
                      contributing to the growth and empowerment of the African
                      American business community. We believe in giving back and
                      we actively support initiatives that foster economic
                      development in our communities.
                    </p>
                  </div>
                </div>
                <div className="reasons">
                  <div>
                    <h3>
                      We Become Partners, Not Just a Black SEO Company You Hired
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
                <Button>Book a Free SEO Call Today!</Button>
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="medium-container">
            <h2 className="title">Frequently Asked Questions about SEO</h2>
            <ReasonSec>
              <div>
                <div className="question">
                  <h3>What is SEO and how can it help my business?</h3>
                  <p>
                    Search Engine Optimization (SEO) is the process of improving
                    a website's visibility on search engines like Google. By
                    optimizing your website with relevant keywords, quality
                    content, and solid web design, it's possible to rank higher
                    in search results, increasing your site's exposure, driving
                    more organic traffic, and potentially leading to higher
                    sales or conversions.
                  </p>
                </div>
                <div className="question">
                  <h3>
                    What are some unique SEO challenges faced by Black-owned
                    businesses?
                  </h3>
                  <p>
                    Just like any other businesses, Black-owned businesses face
                    various SEO challenges, such as website optimization,
                    quality link-building, and content creation. However, they
                    might also face unique challenges like underrepresentation
                    or biases in certain industry niches. Understanding these
                    can help in devising effective SEO strategies.
                  </p>
                  <h3>How long does it take to see results from SEO?</h3>
                  <p>
                    SEO is a long-term investment. Depending on your website's
                    current status and the competitive nature of your industry,
                    it might take anywhere from 3-6 months to start seeing
                    significant results. However, keep in mind that SEO results
                    grow over time, and the most rewarding outcomes often come
                    later.
                  </p>
                </div>
                <div className="question">
                  <h3>
                    What are local SEO services and how can they benefit my
                    business?
                  </h3>
                  <p>
                    Local SEO services focus on optimizing a business's online
                    presence to attract more customers from relevant local
                    searches. This can be particularly beneficial for
                    brick-and-mortar businesses or services that cater to a
                    specific geographic area. By leveraging local SEO, you can
                    increase your visibility among local customers.
                  </p>
                </div>
                <div className="question">
                  <h3>How do keywords affect my business's SEO ranking?</h3>
                  <p>
                    Keywords are the terms that potential customers use when
                    searching online. By understanding and utilizing the right
                    keywords in your website's content, meta tags, and
                    descriptions, you can improve your site's SEO ranking,
                    making it more likely for your business to be found when
                    those terms are searched.
                  </p>
                </div>
                <div className="question">
                  <h3>
                    Can my business's online reputation be improved through SEO?
                  </h3>
                  <p>
                    Yes, a good SEO strategy can help improve your online
                    reputation. By creating and promoting positive content,
                    leveraging online reviews, and building a strong social
                    media presence, SEO can help you manage your online
                    reputation effectively.
                  </p>
                </div>
              </div>
              <div>
                <div className="question">
                  <h3>
                    How can I incorporate SEO into my content creation process?
                  </h3>
                  <p>
                    Before creating content, conduct keyword research to
                    understand what your potential customers are searching for.
                    This research should inform your content creation, with
                    keywords naturally incorporated into your titles, headers,
                    and body text. High-quality, relevant content is also highly
                    valuable for SEO.
                  </p>
                </div>
                <div className="question">
                  <h3>
                    What's the role of backlinks in SEO, and how can I get them?
                  </h3>
                  <p>
                    Backlinks—links from other websites to your own—are a key
                    indicator of your site's authority and relevance to search
                    engines. You can obtain backlinks by creating high-quality,
                    shareable content, guest blogging, and forming partnerships
                    with relevant industry leaders or influencers.
                  </p>
                </div>
                <div className="question">
                  <h3>How can SEO help me reach my target audience?</h3>
                  <p>
                    SEO can improve your visibility to your target audience by
                    helping you rank higher for searches relevant to your
                    business. By understanding and implementing the right
                    keywords, you can reach potential customers who are actively
                    looking for the products or services you offer.
                  </p>
                </div>
                <div className="question">
                  <h3>Why do I need an SEO service? Can't I do it myself?</h3>
                  <p>
                    While it's possible to handle SEO yourself, it's a
                    time-consuming process that requires a lot of expertise. An
                    SEO service has the knowledge and resources to effectively
                    optimize your site, keep up with the latest SEO trends, and
                    adapt to algorithm changes, allowing you to focus on your
                    core business.
                  </p>
                </div>
                <div className="question">
                  <h3>What makes a good SEO service provider?</h3>
                  <p>
                    A good SEO service provider has proven expertise in the
                    field, with a track record of achieving tangible results.
                    They should provide transparent reporting, have a strong
                    understanding of your industry, and use ethical "white hat"
                    SEO techniques. Good communication is also key.
                  </p>
                </div>
                <div className="question">
                  <h3>What is the cost of SEO services?</h3>
                  <p>
                    The cost of SEO services varies based on the scope of the
                    project, the competitiveness of your industry, and the
                    experience level of the service provider. Monthly retainers
                    can range from $1,000 to $5,000 plus. It's important to
                    consider your budget and potential return on investment when
                    deciding on SEO services.
                  </p>
                </div>
              </div>
            </ReasonSec>
          </div>
        </section>
        <div className="call-to-action-grid">
          <img
            src="/images/man-calling-black-owned-seo-agency.webp"
            alt="Man calling black owned SEO company."
            title="Man calling black owned SEO company."
            width="1000px"
            height="65px"
            loading="lazy"
          />
          <div className="container">
            <h2>Ready to Increase Leads and Boost Sales and Revenue?</h2>
            <p>
              Contact {SEOAgency} and we'll show you how search engine
              optimization can help your company grow.
            </p>
            <p>You have nothing to lose.</p>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Book Your Free Consultation!</Button>
              </a>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}
