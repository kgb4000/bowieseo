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
    title: 'Black Owned SEO Company | Check Me Out First',
    description:
      'Trust my Black owned SEO company to boost your online visibility, attract high-quality traffic, and convert more leads into sales. Book an SEO call!',
    canonical: 'https://bowieseo.com/black-owned-seo-company',
    openGraph: {
      title: 'Black Owned SEO Company | Check Me Out First',
      description:
        'Trust my Black owned SEO company to boost your online visibility, attract high-quality traffic, and convert more leads into sales. Book an SEO call!',
      image: [{}],
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <MainLayout>
        <HeroSection
          heroText="We're a Black Owned SEO Company Empowering Businesses to Get Attention on Google"
          subText="Let us optimize your website so that you can get more leads and customers and grow your business"
          backgroundImage="/images/black-owned-seo-agency.webp"
          backgroundHeight="70vh"
          backgroundPosition="center"
          buttonText="Get Your Free SEO Audit &#8594;"
          buttonLink="/free-seo-audit"
        />
        <section className="article-section">
          <div className="medium-container grid">
            <div>
              <h2>
                Tap into Google's Free Traffic Goldmine or Keep Draining Your
                Budget on Ads: The Decision is Yours
              </h2>
              <p>
                If your business is not appearing on the first page of Google's
                search results, you're missing out on significant opportunities.
              </p>
              <p>
                You're missing opportunities to connect with new customers, grow
                your brand, and increase your revenues.
              </p>
              <p>
                In today's digital-first world, most consumers turn to search
                engines like Google when seeking products, services, or answers
                to their questions.
              </p>
              <p>
                If they can't find you there, it's as if your business doesn't
                exist.
              </p>
              <p>
                This invisibility can severely impact your business's success,
                given that 75% of users never scroll past the first page of
                search results.
              </p>
              <p>This is where our expertise comes into play.</p>
              <p>
                As a premier <strong>black owned SEO company</strong>, we can
                transform your digital presence.
              </p>
              <p>
                We go beyond simply optimizing your website with keywords; we
                implement comprehensive SEO strategies designed to increase your
                site's visibility, attract high-quality organic traffic, and
                drive conversions.
              </p>
              <p>
                Leveraging our deep understanding of search engine algorithms,
                user behavior, and your unique business needs, we can help your
                business climb the search engine rankings and be found by the
                customers so customers find you when it matters most to you.
              </p>
              <p>
                We aim to ensure your business isn't just surviving online but
                thriving.
              </p>
              <p>
                We'll help you build a system to generate your leads while you
                concentrate on running your business.
              </p>
              <p>Call us to get started to learn more.</p>
            </div>
            <img
              src="/images/black-owned-seo-company.webp"
              className="page-img-left"
              alt="Black entrepreneur thinking about doing SEO."
              title="Black entrepreneur thinking about doing SEO."
              width="600px"
              height="1000px"
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
            <h2 className="title">
              What You Get Working With a Professional Black Owned SEO Agency
            </h2>
            <p className="subtext">
              When you work with us, you get superior customer service, plus the
              following:
            </p>
          </div>
          <div className="medium-container">
            <Deliverables>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Check mark."
                  loading="lazy"
                />
                <div>
                  <h3>Expert one-on-one support</h3>
                  <p>
                    With our expert one-on-one support, you receive personalized
                    attention rarely found in larger firms.
                  </p>
                  <p>
                    This service provides direct access to a dedicated SEO
                    professional who understands your business in-depth.
                  </p>
                  <p>
                    Your dedicated expert will know the nuances of your brand,
                    your specific goals, and the challenges you're facing.
                  </p>
                  <p>
                    This personalized approach means your unique needs won't get
                    lost in the shuffle and allows us to quickly pivot
                    strategies if needed, respond promptly to your concerns, and
                    celebrate your wins alongside you.
                  </p>
                  <p>The benefit?</p>
                  <p>
                    Your business enjoys a tailored, agile SEO service that is
                    as invested in your success as you are.
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
                  <h3>Keyword Research</h3>
                  <p>
                    Our detailed{' '}
                    <Link href="/keyword-research">keyword Research</Link>{' '}
                    service ensures potential customers find your business when
                    they need your products or services.
                  </p>
                  <p>
                    We go beyond just finding popular keywords in your industry;
                    we dive into understanding the specific terms, phrases, and
                    questions your target audience uses when they turn to search
                    engines.
                  </p>
                  <p>
                    This involves analyzing your competitors, identifying gaps
                    in the market, and understanding the search intent behind
                    each keyword.
                  </p>
                  <p>The result?</p>
                  <p>
                    Your website is optimized with highly relevant keywords that
                    increase your visibility on search engines and attract
                    high-quality traffic - new customers who are more likely to
                    engage with your content, subscribe to your services, or
                    purchase.
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
                  <h3>SEO Audit</h3>
                  <p>
                    An <Link href="/free-seo-audit">SEO Audit</Link> is like a
                    health check-up for your website.
                  </p>
                  <p>
                    Our thorough SEO Audit service dives deep into your site's
                    structure, content, and backlink profile, identifying areas
                    of strength and uncovering any issues that could harm your
                    visibility on search engines.
                  </p>
                  <p>
                    We don't just identify these issues - we also provide clear,
                    actionable solutions to rectify them.
                  </p>
                  <p>
                    This might involve resolving technical issues like broken
                    links or slow page speed, addressing content gaps or quality
                    issues, or improving the site's mobile-friendliness.
                  </p>
                  <p>What's the benefit?</p>
                  <p>
                    It gives you a clear roadmap to improve your site's SEO
                    health, helping you build a robust, search-engine-friendly
                    website that attracts more organic traffic, delivers a
                    better user experience, and, ultimately, boosts your bottom
                    line.
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
                  <h3>Local SEO</h3>
                  <p>
                    Our <Link href="search-engine-optimization">Local SEO</Link>{' '}
                    service is designed to put your business on the map
                    literally.
                  </p>
                  <p>
                    We focus on enhancing your visibility in localized search
                    results, ensuring that your business is at the top of its
                    list when potential customers in your area are looking for
                    the products or services you offer.
                  </p>
                  <p>
                    This involves optimizing your Google My Business profile,
                    generating local reviews, and optimizing your website for
                    local keywords.
                  </p>
                  <p>
                    But we don't stop there - we also ensure your business
                    information is consistent across all online directories,
                    which search engines view as a signal of credibility.
                  </p>
                  <p>The benefit?</p>
                  <p>
                    By positioning you front and center in local search results,
                    we help drive foot traffic from customers in your community,
                    build local brand recognition, and enhance your reputation
                    as a local leader in your industry.
                  </p>
                  <p>
                    This results in not just any traffic but the kind that
                    converts - customers close by and ready to purchase.
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
                  <h3>National SEO</h3>
                  <p>
                    With our National SEO service, we extend your reach far
                    beyond local borders, helping your business make a
                    significant impact on a larger scale.
                  </p>
                  <p>
                    We use sophisticated strategies to improve your visibility
                    in national search rankings, enabling your brand to compete
                    with industry leaders, no matter their size.
                  </p>
                  <p>
                    This includes comprehensive keyword research covering a
                    broader audience, creating high-quality content that
                    resonates with this audience, and building a solid backlink
                    profile that shows search engines your site is a trusted
                    authority.
                  </p>
                  <p>The benefit?</p>
                  <p>
                    Our National SEO service propels your brand into the
                    national spotlight, dramatically expanding your customer
                    base and establishing your business as a recognized leader
                    in your industry across the country. This broad exposure can
                    significantly increase online traffic, customer conversions,
                    and revenue.
                  </p>
                  <p>
                    This broad exposure can lead to significant growth in online
                    traffic, customer conversions, and ultimately, your revenue.
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
                  <h3>Link Building</h3>
                  <p>
                    Our Link Building service is the backbone of your SEO
                    strategy, lending credibility and authority to your website
                    in the eyes of search engines.
                  </p>
                  <p>
                    We focus on obtaining high-quality backlinks from reputable
                    and relevant websites, signaling to search engines that your
                    site is a valuable resource worth ranking higher.
                  </p>
                  <p>
                    But we don't just chase any links; we pursue ones that make
                    sense, aligning with your industry and audience. We achieve
                    this through content marketing, guest blogging, and
                    influencer outreach.
                  </p>
                  <p>The benefit?</p>
                  <p>
                    With our strategic link building, your website's authority
                    and visibility on search engines significantly increase,
                    leading to higher organic traffic.
                  </p>
                  <p>
                    Additionally, these backlinks can bring direct referral
                    traffic from other relevant websites, introducing your brand
                    to new audiences and potential customers, thereby expanding
                    your reach and impact.
                  </p>
                </div>
              </Deliverable>
            </Deliverables>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Book Your Free SEO Call Today!</Button>
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="medium-container">
            <h2 className="title">
              With So Many SEO Companies, Why Work With My Black Owned SEO
              Agency?
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
                    Every business is unique and deserves a customized approach.
                    As a smaller black owned SEO agency, we can provide
                    personalized attention. We craft bespoke SEO strategies
                    tailored to your business's needs and goals. It's not the
                    one-size-fits-all solutions often offered by larger firms.
                  </p>
                </div>
                <div className="reasons">
                  <h3>Cultural Competence</h3>
                  <p>
                    As a black owned SEO company and black entrepreneurs, we
                    understand the cultural nuances and unique challenges black
                    business owners and other underrepresented groups face. This
                    cultural competence allows us to create highly effective SEO
                    strategies that resonate with your target audience and
                    authentically represent your brand.
                  </p>
                </div>
                <div className="reasons">
                  <div>
                    <h3>Community Empowerment</h3>
                    <p>
                      Choosing to work with our company means investing in your
                      business's success and contributing to the growth and
                      empowerment of the African American business community. We
                      believe in giving back and actively supporting initiatives
                      that foster economic development in our communities.
                    </p>
                  </div>
                </div>
                <div className="reasons">
                  <div>
                    <h3>
                      We Become Partners, Not Just a Black Owned SEO Agency You
                      Hired
                    </h3>
                    <p>
                      When you work with us, we look at your business as ours.
                      We want to see your business succeed! We don't just want
                      to get you to rank higher for a few keywords and then
                      disappear. We want to help you grow your business for
                      years to come.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Get SEO Help Today!</Button>
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="medium-container">
            <h2 className="title">Frequently Asked Questions about SEO</h2>
            <FAQPageJsonLd
              mainEntity={[
                {
                  questionName: 'What is SEO and how can it help my business?',
                  acceptedAnswerText: `Search Engine Optimization (SEO) improves a website's visibility on search engines like Google. Optimizing your website with relevant keywords, quality content, and solid web design makes ranking higher in search results possible, increasing your site's exposure, driving more organic traffic, and leading to higher sales or conversions.`,
                },
                {
                  questionName:
                    'What are some unique SEO challenges faced by Black owned businesses?',
                  acceptedAnswerText: `Like other businesses, black owned businesses face various SEO challenges, such as website optimization, quality link-building, and content creation. However, they might also face unique challenges like underrepresentation or biases in specific industry niches. Understanding these can help in devising effective SEO strategies.`,
                },
                {
                  questionName:
                    'How long does it take to see results from SEO?',
                  acceptedAnswerText: `SEO is a long-term investment. Depending on your website's current status and the competitive nature of your industry, it might take anywhere from 3-6 months to start seeing significant results. However, remember that SEO results grow over time, and the most rewarding outcomes often come later.`,
                },
                {
                  questionName:
                    'What are local SEO services and how can they benefit my business?',
                  acceptedAnswerText: `Local SEO services focus on optimizing a business's online presence to attract more customers from relevant local searches. This can be particularly beneficial for brick-and-mortar businesses or services that cater to a specific geographic area. By leveraging local SEO, you can increase your visibility among local customers.`,
                },
                {
                  questionName: `How do keywords affect my business's SEO ranking?`,
                  acceptedAnswerText: `Keywords are the terms that potential customers use when searching online. By understanding and utilizing the right keywords in your website's content, meta tags, and descriptions, you can improve your site's SEO ranking, making it more likely to find your business when people use those search terms.`,
                },
                {
                  questionName: `Can my business's online reputation be improved through SEO?`,
                  acceptedAnswerText: `Yes, a good SEO strategy can help improve your online reputation. By creating and promoting positive content, leveraging online reviews, and building a solid social media presence, SEO can help you manage your online reputation effectively.`,
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
                    'Our contracts are month-to-month. You can cancel at any time with 30 days written notice. We require a 3-month minimum to start to properly establish your baseline and see results. After the first 3 months, you are free to cancel at any time. There are no long-term contracts or commitments.',
                },
                {
                  questionName:
                    'How can I incorporate SEO into my content creation process?',
                  acceptedAnswerText: `Before creating content, conduct keyword research to understand what your potential customers are searching for. This research should inform your content creation, with keywords naturally incorporated into your titles, headers, and body text. High-quality, relevant content is also highly valuable for SEO.`,
                },
                {
                  questionName: `What's the role of backlinks in SEO, and how can I get them?`,
                  acceptedAnswerText: `Backlinks—links from other websites to your own—are a crucial indicator of your site's authority and relevance to search engines. You can obtain backlinks by creating high-quality, shareable content, guest blogging, and forming partnerships with relevant industry leaders or influencers.`,
                },
                {
                  questionName: `How can SEO help me reach my target audience?`,
                  acceptedAnswerText: `SEO can improve your visibility to your target audience by helping you rank higher for searches relevant to your business. By understanding and implementing the right keywords, you can reach potential customers actively looking for your products or services.`,
                },
                {
                  questionName: `Why do I need an SEO service? Can't I do it myself?`,
                  acceptedAnswerText: `While it's possible to handle SEO yourself, it's a time-consuming process requiring much expertise. An SEO service has the knowledge and resources to optimize your site effectively, keep up with the latest SEO trends, and adapt to algorithm changes, allowing you to focus on your core business.`,
                },
                {
                  questionName: `What makes a good SEO service provider?`,
                  acceptedAnswerText: `A good SEO service provider has proven expertise in the field with a track record of achieving tangible results. They should provide transparent reporting, strongly understand your industry, and use ethical "white hat" SEO techniques. Good communication is also crucial.`,
                },
                {
                  questionName: `What is the cost of SEO services?`,
                  acceptedAnswerText: `The cost of SEO services varies based on the scope of the project, your industry's competitiveness, and the service provider's experience level. Monthly retainers can range from $1,000 to $5,000 plus. It's essential to consider your budget and potential return on investment when deciding on SEO services.`,
                },
              ]}
            />
            <ReasonSec>
              <div>
                <div className="question">
                  <h3>What is SEO and how can it help my business?</h3>
                  <p>
                    Search Engine Optimization (SEO) improves a website's
                    visibility on search engines like Google. Optimizing your
                    website with relevant keywords, quality content, and solid
                    web design makes ranking higher in search results possible,
                    increasing your site's exposure, driving more organic
                    traffic, and leading to higher sales or conversions.
                  </p>
                </div>
                <div className="question">
                  <h3>
                    What are some unique SEO challenges faced by black owned
                    businesses?
                  </h3>
                  <p>
                    Like other businesses, black owned businesses face various
                    SEO challenges, such as website optimization, quality
                    link-building, and content creation. However, they might
                    also face unique challenges like underrepresentation or
                    biases in specific industry niches. Understanding these can
                    help in devising effective SEO strategies.
                  </p>
                  <h3>How long does it take to see results from SEO?</h3>
                  <p>
                    SEO is a long-term investment. Depending on your website's
                    current status and the competitive nature of your industry,
                    it might take anywhere from 3-6 months to start seeing
                    significant results. However, remember that SEO results grow
                    over time, and the most rewarding outcomes often come later.
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
                    making it more likely to find your business when people use
                    those search terms.
                  </p>
                </div>
                <div className="question">
                  <h3>
                    Can my business's online reputation be improved through SEO?
                  </h3>
                  <p>
                    Yes, a good SEO strategy can help improve your online
                    reputation. By creating and promoting positive content,
                    leveraging online reviews, and building a solid social media
                    presence, SEO can help you manage your online reputation
                    effectively.
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
                    Backlinks—links from other websites to your own—are a
                    crucial indicator of your site's authority and relevance to
                    search engines. You can obtain backlinks by creating
                    high-quality, shareable content, guest blogging, and forming
                    partnerships with relevant industry leaders or influencers.
                  </p>
                </div>
                <div className="question">
                  <h3>How can SEO help me reach my target audience?</h3>
                  <p>
                    SEO can improve your visibility to your target audience by
                    helping you rank higher for searches relevant to your
                    business. By understanding and implementing the right
                    keywords, you can reach potential customers actively looking
                    for your products or services.
                  </p>
                </div>
                <div className="question">
                  <h3>Why do I need an SEO service? Can't I do it myself?</h3>
                  <p>
                    While it's possible to handle SEO yourself, it's a
                    time-consuming process requiring much expertise. An SEO
                    service has the knowledge and resources to optimize your
                    site effectively, keep up with the latest SEO trends, and
                    adapt to algorithm changes, allowing you to focus on your
                    core business.
                  </p>
                </div>
                <div className="question">
                  <h3>What makes a good SEO service provider?</h3>
                  <p>
                    A good SEO service provider has proven expertise in the
                    field with a track record of achieving tangible results.
                    They should provide transparent reporting, strongly
                    understand your industry, and use ethical "white hat" SEO
                    techniques. Good communication is also crucial.
                  </p>
                </div>
                <div className="question">
                  <h3>What is the cost of SEO services?</h3>
                  <p>
                    The cost of SEO services varies based on the scope of the
                    project, your industry's competitiveness, and the service
                    provider's experience level. Monthly retainers can range
                    from $1,000 to $5,000 plus. It's essential to consider your
                    budget and potential return on investment when deciding on
                    SEO services.
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
                <Button>Book Your Free SEO Consultation Now!</Button>
              </a>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}
