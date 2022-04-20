/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'
import Button from '../components/Button'
import PageHero from '../components/PageHeroSection'
import Contact from '../components/Contact-Form'
import ReactPlayer from 'react-player'

const FreeSEOAUDIT = () => {
  return (
    <>
      <PageHero
        heading="Free Mini SEO Audit"
        subText="Find out what's stopping your website getting traffic, ranking higher in the search engines, and getting leads."
        heroBtnLink="/contact"
        buttonText="Book a call"
      />
      <section>
        <div className="container">
          <h2>
            Do You Ask Yourself These Questions Like Other Small Business
            Owners?
          </h2>
          <img
            src="/images/questions.svg"
            className="body-img"
            alt="Questions for small buinsess owners about their websites."
            loading="lazy"
          />
          <ul>
            <li>Why can't I rank in the Google or in the Google Map Pack?</li>
            <li>Why can't I get leads from my website?</li>
            <li>Am I ranking for the right keywords?</li>
            <li>Am I targeting the right keywords?</li>
            <li>
              What are my competitors doing to rank higher than me in Google?
            </li>
            <li>What should I target?</li>
          </ul>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>This Free Mini Website Audit Can Give You Some Answers.</h2>
          <img
            src="/images/audit.svg"
            className="body-img"
            alt="Questions for small buinsess owners about their websites."
            loading="lazy"
          />
          <p>
            While this is not a{' '}
            <Link href="seo-audit">
              <a>complete SEO Audit</a>
            </Link>
            , this Free Mini SEO Audit will show you elements that are stopping
            you from:
          </p>
          <ul>
            <li>Ranking higher in Google.</li>
            <li>Attracting more potential customers.</li>
            <li>Stopping customers from finding you when they search.</li>
            <li>Getting more leads through your website.</li>
            <li>Making more money for your business.</li>
          </ul>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>You Don't Have to Try and Figure it Out Anymore</h2>

          <p>
            The truth is, you may never find out what's stopping your website
            from performing in the search engines unless you perform an SEO
            Audit.
          </p>
          <p>
            This Free Mini SEO Audit will get you started and answer some of the
            questions you have.
          </p>
          <p>This free website audit will tell you:</p>
          <ul>
            <li>What keywords you rank for.</li>
            <li>How much website traffic you get monthly.</li>
            <li>Keywords your competitors are ranking for, and you are not.</li>
            <li>
              On-Page, Off-Page SEO, and Technical issues affecting you website.
            </li>
            <li>
              Issues with your Content, Website Structure, and Backlinks
              profile.
            </li>
          </ul>
          <p>
            This Free audit will uncover the elements that are keeping your
            website from ranking.
          </p>
          <p>It will find the problems you must fix.</p>
          <p>
            This Free audit will help you discover what you need to fix to get
            your website ranking higher and in front of more customers.
          </p>
        </div>
      </section>
      <div className="container">
        <h2>Check out this Free Mini SEO Audit We Did.</h2>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/cR27O8br7mM"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
      </div>
      <section>
        <div className="container">
          <h2>What You Get With Our Free Mini Website Audit</h2>
          <img
            src="/images/video.svg"
            className="body-img"
            alt="Questions for small buinsess owners about their websites."
            loading="lazy"
          />
          <ul>
            <li>
              A personalized video explaining what we found and the
              opportunities to rank higher, reach more customers and make more
              money.
            </li>
            <li>Your total organic monthly traffic.</li>
            <li>The total amount of keywords you rank for.</li>
            <li>
              The total amount of backlinks you have pointing to your website.
            </li>
            <li>
              10 Keywords you should rank for to get more leads, customers, and
              make more money.
            </li>
            <li>
              On-Page SEO issues affecting your website website performance.
            </li>
            <li>Off-Page issues affecting your website performance.</li>
            <li>Technical SEO issues affecting your website performance.</li>
            <li>Recommendations on How and Where to Use Your Keywords.</li>
            <li>
              Recommendations on what to do to improve your rankings, attract
              more customers, and appear higher in the Google Map Pack and the
              organic results.
            </li>
          </ul>
        </div>
      </section>

      <Contact
        h2="Find Out What's Stopping Your Website From Ranking Higher And
            Getting More Traffic"
        p="Please fill out the form below for your Free Mini SEO Audit."
      />
    </>
  )
}

export default FreeSEOAUDIT
