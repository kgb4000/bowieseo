/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'
import Button from '../components/Button'
import PageHero from '../components/PageHeroSection'
import { Card, Container, Wrapper, Contact } from '../components/CardSection'
import ProcessSection from '../components/ProcessSection'
import {
  processObj1,
  processObj2,
  processObj3,
  processObj4,
  processObj5,
  processObj6,
} from '../components/ProcessSection/Data/Process1'

import { NextSeo } from 'next-seo'

const calendly = 'https://calendly.com/bowieseo/30min'

const MarylandSEOCompany = () => {
  const SEO = {
    title:
      'A Maryland SEO Company Increasing Leads and Revenue for Small Business',
    description:
      "Wer'e a Maryland SEO company that help businesses increase web traffic, attract more customers, and increase revenue. Book a call with us today!",
    type: 'website',
    canonical: 'https://bowieseo.com/maryland-seo-company',
    openGraph: {
      title:
        'A Maryland SEO Company Increasing Leads and Revenue for Small Business',
      description:
        "Wer'e a Maryland SEO company that help businesses increase web traffic, attract more customers, and increase revenue. Book a call with us today!",
      type: 'website',
      image: [{}],
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <PageHero
        heading="A Maryland SEO Company [That Gets Results]"
        subText="We're an SEO Company can get you more website traffic, leads, and sales."
        heroBtnLink={calendly}
        buttonText="Book a call"
      />
      <section>
        <div className="container">
          <h2>Grow Your Business with a Maryland SEO Company</h2>
          <p>
            Bowie SEO is an SEO company located in Bowie, Maryland. We believe
            that search engine optimization (SEO) is the best digital marketing
            channel to help you find your ideal customers and help potential
            customers find local businesses. As{' '}
            <Link href="/maryland-seo-expert">
              <a>SEO experts</a>
            </Link>
            , we are proud to offer Maryland SEO services to all businesses in
            Maryland. 
          </p>
          <p>
            Search engine optimization helps increase your website traffic,
            increases your online presence, and helps you do more business
            online.
          </p>
          <p>
            Maryland small business owners can get reach their target market get
            more traffic reach to the top of the search engine results with SEO
            services from Bowie SEO.
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
            SEO stands for <b>search engine optimization</b>.
          </p>
          <p>
            It is the process of getting traffic from the “free,” “organic,”
            “editorial” or “natural” search results on search engines
          </p>
          <p>
            SEO can be divided into two main categories: on-page SEO and
            off-page SEO.
          </p>
          <p>
            On-page SEO refers to optimizing the content and structure of a
            website to make it more visible to search engines.
          </p>
          <p>
            Off-page SEO refers to activities such as link building and social
            media engagement that can help improve a website's ranking in search
            engine results pages (SERPs).
          </p>
          <p>
            SEO is an important part of any online marketing strategy. By
            optimizing your website for search engines, you can increase your
            chances of ranking high in SERPs, which can lead to more traffic and
            more customers.
          </p>
        </div>
      </section>
      <div className="btn">
        <Link href="/seo-services" passHref>
          <Button>See Our Services!</Button>
        </Link>
      </div>
      <section>
        <div className="container">
          <h2>7 Reasons Maryland Businesses Need SEO in 2022 and Beyond ?</h2>
          <h3>#1. Search Algorithms are Always Changing</h3>
          <p>
            Businesses need search engine optimization because search engines
            are constantly evolving. According to Moz, Google reported over
            3,000 improvements to search in 2018. This was more than eight times
            the amount in 2009{' '}
            <a
              href="https://moz.com/blog/how-often-does-google-update-its-algorithm"
              target="_blank"
              rel="noreferrer"
            >
              (Moz)
            </a>
            .
          </p>
          <p>Significant Google search algorithm changes include:</p>
          <ul>
            <li>Panda</li>
            <li>Mobile First</li>
            <li>Rank Brain</li>
            <li>Vicinity</li>
          </ul>
           <h3>#2. SEO Helps You Rank Higher in Search Results</h3>
          <p>
            One of the main reasons to invest in SEO is to rank higher in search
            engine results pages (SERPs). When your website appears higher up on
            SERPs, it increases your chances of being seen and clicked by
            potential customers.
          </p>
          <h3>#3. SEO Drives Organic Traffic</h3>
          <p>
            Organic traffic refers to the visitors who come to your website
            without being paid or sponsored. In other words, they find your
            website through a search engine like Google. And since SEO helps you
            improve your ranking in search results, it also indirectly helps you
            drive more organic traffic to your website.
          </p>
          <h3>#4. You'll get a higher ROI for your marketing campaigns</h3>
          <p>
            Since you'll be getting more leads and customers through your
            website, you'll be able to achieve a higher return on investment
            (ROI) for your marketing campaigns. With this, you'll be able to
            reinvest your money back into your marketing efforts so that you can
            continue to see better results.
          </p>
          <h3>#5. Outrank Your Competitors</h3>
          <p>
            Search engine optimization makes your website better for search
            engines and your customers. When you do SEO and your competitors
            don't, your SEO efforts will create a more significant online
            presence, rank higher in the search rankings, get more traffic, and
            do more online business.   
          </p>
          <h3>#6. Reach Your Target Market</h3>
          <p>Potential customers will now be able to find your business.  </p>
          <p>
            When your people use keywords to find the services you offer, you
            business will appear in the Map Pack, and in the organic search
            results pages.
          </p>
          <h3>#7. Outrank Your Competitors</h3>
          <p>
            Search engine optimization makes your website better for search
            engines and your customers. When you do SEO and your competitors
            don't, your SEO efforts will create a more significant online
            presence, rank higher in the search rankings, get more traffic, and
            do more online business.   
          </p>
        </div>
      </section>
      <div className="btn">
        <Link href={calendly} passHref target="_blank">
          <Button>Book a Call Today!</Button>
        </Link>
      </div>
      <section>
        <div className="services-container">
          <h2>Popular Maryland SEO Services</h2>
          <p className="sub-text">
            These SEO services will help your business grow. We're an SEO
            company that specialize in search engine optimization for businesses
            in the DMV.
          </p>
          <div className="services">
            <Container>
              <Link href="/local-seo-maryland" passhref>
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
              </Link>
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
                    <span className="highlight ">stealing</span> your customers.
                  </p>
                </div>
                <p>Learn more</p>
              </Card>
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
                    SEO services. Let Bowie SEO put your business on the path to
                    SEO success.
                  </p>
                </div>
                <p>Learn more</p>
              </Card>
              <Card>
                <div className="card-info">
                  <img
                    src="/images/analysis.svg"
                    alt="Man analyzing data"
                    loading="lazy"
                  />
                  <h3>Competitive Ananlysis</h3>
                  <p>
                    Know what your competitors are doing. See why they are
                    beating you and fight back using data and info form thier
                    own websites.
                  </p>
                </div>
                <p>Learn more</p>
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
                    Optimize your Goolge My Business page and let your customers
                    find you directly in the local search results.
                  </p>
                </div>
                <p>Learn more</p>
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
          <Button>More Services</Button>
        </Link>
      </div>
      <section>
        <div className="services-container">
          <h2>Our Maryland SEO Process</h2>
          <p className="sub-text">
            Our process that generates more leads and customers for your
            business.
          </p>
        </div>
        <ProcessSection {...processObj1} />
        <ProcessSection {...processObj2} />
        <ProcessSection {...processObj3} />
        <ProcessSection {...processObj4} />
        <ProcessSection {...processObj5} />
        <ProcessSection {...processObj6} />
        <div className="btn">
          <Link href="/contact" passHref>
            <Button>Contact us</Button>
          </Link>
        </div>
      </section>
      <section className="pain-section">
        <div className="services-container">
          <h2>Working With Us is a Breeze</h2>
          <p className="sub-text">
            It's easy to work with us. If you need more online visibility, or
            you need to build your web presence, contact us.
          </p>
          <Wrapper>
            <Contact>
              <h3>Call us</h3>
              <img
                src="/images/phone-call.svg"
                className="icons"
                loading="lazy"
              />
              <p>
                Book a call and tell us about your business. Tell us what you
                want to acheive for your business, plus your longterm goals.
              </p>
            </Contact>
            <Contact>
              <h3>We Plan</h3>
              <img src="/images/plan.svg" className="icons" loading="lazy" />
              <p>
                After we get all the information, we plan what actions will
                bring your business the best results.
              </p>
            </Contact>
            <Contact>
              <h3>Execute</h3>
              <img
                src="/images/work-together.svg"
                className="icons"
                loading="lazy"
              />
              <p>
                We execute or plan. We track and make changes to improve your
                website to achieve goals and get results.
              </p>
            </Contact>
          </Wrapper>
          <div className="btn">
            <Link href={calendly} passHref target="_blank">
              <Button>Book a Call Today!</Button>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Why Choose Bowie SEO Instead of Other Mayland SEO Companies?</h2>
          <p className="sub-text">
            Work with Bowie SEO and experience the difference between our
            company and their company. Remember, all we do is SEO.
          </p>
          <h3>
            #1. Your Business Will Continue To Grow Without Us Being There.
          </h3>
          <p>
            If you decide to stop working with us, the system we put in place
            for you will continue to bring you customers and leads.
          </p>
          <p>Keep in mind that your competitors don't stop doing SEO.</p>
          <h3>#2. We Don't Have Long-term Contracts</h3>
          <p>
            Yes, unlike most SEO companies, we don't have long-term contracts.
          </p>
          <p>We do monthly retainers.</p>
          <p>
            We understand that committing to and SEO campaign can be a big step,
            but think about this.
          </p>
          <p>
            It can take 3 to 6 months, or 6 to 12 months to see results from an
            SEO campaign. So if you decide to start adding SEO to your
            marketing, be prepared.
          </p>
          <h3>#3. We Work With One Business per Industry, in Your Area</h3>
          <p>What does that mean?</p>
          <p>Example.</p>
          <p>
            If we're doing SEO for your landscaping company in Annapolis,
            Maryland, we cannot do SEO for any other landscaping company in
            Annapolis.
          </p>
          <p>
            Firstly, well be doing our customers an injustice by working for the
            competiton.
          </p>
          <p>Second, we'll be competiting against ourselves.</p>
          <p>That would be crazy.</p>
          <p>
            Some digital marketing companies don't care where you or your
            competition are located. They will have you and your competition as
            clients.
          </p>
          <p>Think about it.</p>
          <h3>#4. We're Become Partners, Not Just Contractors</h3>
          <p>
            Our goal is to help your company grow and be better that it was when
            we started working together.
          </p>
          <p>
            Our job is to make your website an asset that attracts your
            potential customers, and to make more money for your business.
          </p>
          <p></p>
          <h3>#5. We Get You Results</h3>
          <p>
            And we don't mean by changing some title tags or meta descriptions.
          </p>
          <p>We get measurable results.</p>
          <p></p>
        </div>
      </section>
      <div className="btn">
        <Link href="/contact" passHref>
          <Button>Book a Call Today!</Button>
        </Link>
      </div>
      <section>
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-questions">
            <h3>#1. How Can SEO Help My Business?</h3>
            <p>
              SEO can help your business in a number of ways. By improving your
              website's search engine optimization, you can increase your
              visibility on the web, attract more qualified leads, and boost
              your sales. Additionally, SEO can help to build trust and
              credibility with potential and current customers. By providing
              relevant and useful content, you can show that you're an authority
              in your industry, which can encourage people to do business with
              you. Finally, SEO can also help you to save money on marketing and
              advertising costs by helping you to reach your target audience
              more effectively. If you're looking for ways to improve your
              business's bottom line, then investing in SEO is a smart choice.
            </p>
            <p>
              SEO can be a complex and time-consuming process, but it's worth
              the effort if you want to improve your business's bottom line. If
              you're not sure where to start, then consider hiring an SEO expert
              to help you get the most out of your website. With their help, you
              can take your business to the next level.
            </p>
            <p>
              If you want to learn more about how SEO can help your business,
              then contact us today. We'll be happy to answer any questions you
              have and help you get started on the path to success.
            </p>
            <div className="btn faq">
              <Link href={calendly} passHref target="_blank">
                <Button>Book a Call Today!</Button>
              </Link>
            </div>
            <h3>#2. How Much Do SEO Services Cost?</h3>
            <p>
              As you may have seen on the web when you search for SEO services,
              Some SEO companies offer services starting as low as $199.00 a
              month. Other companies market services starting at $249.00 a
              month. Although these prices may seem like a deal, please be
              aware. Cheap SEO prices usually mean affordable SEO services. Your
              SEO campaign may take years to see any results for those prices.
            </p>
            <p>
              Some of these SEO companies are not even in Maryland or the DMV.
            </p>
            <p>Some cheap SEO companies are known to use Black Hat SEO.</p>
            <p>
              Black Hat SEO goes against the search engine's terms of service,
              and although it can get you ranked, there is an excellent chance
              that your website can get banned from search engines.
            </p>
            <p>Don't take that chance.</p>
            <p>
              As a professional Maryland SEO company and SEO experts, we offer
              only White Hat SEO services according to your business needs.
            </p>
            <p>
              We first perform an SEO Audit to determine what needs improving.
              It may be anything from improving your title tags, adding
              meta-descriptions, or fixing your page speed.
            </p>
            <p>
              After we identify any problems and opportunities we find, we give
              you our price to perform SEO.
            </p>
            <p>Remember.</p>
            <h3>#3. What is the Difference between SEO and Local SEO</h3>
            <p>
              In short, SEO (search engine optimization) is the process of
              improving the visibility and ranking of your website in search
              engine results pages (SERPs). Local SEO, on the other hand, is
              focused on optimizing your website for local search results.{' '}
            </p>
            <p>
              While both SEO and local SEO are important for driving traffic to
              your website, there are some key differences between the two.
            </p>
            <p>
              For starters, local SEO is much more targeted than regular SEO.
              When someone does a local search (for example, "restaurants in
              Annapolis"), they are looking for businesses that are located near
              them. On the other hand, when someone does a general search (for
              example, "best restaurants"), they are not necessarily looking for
              businesses near them.{' '}
            </p>
            <p>
              Another key difference between SEO and local SEO is that local SEO
              is more focused on generating leads and conversions, while regular
              SEO is more focused on generating traffic. This is because when
              someone searches for a business locally, they are usually closer
              to making a purchase than someone who is just searching for
              information.
            </p>
            <h3>#4. Who Should Use SEO?</h3>
            <p>
              SEO is a tool that can be used by anyone who wants to improve
              their online visibility and organic search traffic. This includes
              individuals, businesses, and organizations of all sizes. Whether
              you're just starting out with a website or you've been online for
              years, SEO can help you achieve your goals.{' '}
            </p>
            <p>
              There are many different factors that go into SEO, and it can be
              overwhelming to try to tackle everything on your own. However,
              there are plenty of resources available to help you get started,
              including books, blogs, and online courses. There are also plenty
              of agencies and consultants who specialize in SEO and can help you
              create a customized strategy for your needs.{' '}
            </p>
            <p>
              No matter what your budget or level of experience, there's no
              reason not to implement SEO on your website. Whether you do it
              yourself or hire someone to do it for you, the benefits of
              improved online visibility and increased organic traffic are worth
              the effort.
            </p>
            <div className="btn faq">
              <Link href={calendly} passHref target="_blank">
                <Button>Book a Call Today!</Button>
              </Link>
            </div>
            <h3>#5. Can You Guarantee Results?</h3>
          </div>
        </div>
      </section>
    </>
  )
}

export default MarylandSEOCompany
