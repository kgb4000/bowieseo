import Link from 'next/link'
import styled from 'styled-components'
import Button from '../components/Button'

const HeroSection = ({
  backgroundImage,
  heroText,
  subText,
  buttonText,
  backgroundHeight,
  buttonLink,
  backgroundPosition,
}) => {
  return (
    <>
      <Hero
        backgroundImage={backgroundImage}
        backgroundHeight={backgroundHeight}
        backgroundPosition={backgroundPosition}
      >
        <div className="content">
          <h1 className="heroText">{heroText}</h1>
          <p>{subText}</p>
          {buttonText && (
            <Link href={buttonLink}>
              <a>
                <WhiteButton>{buttonText}</WhiteButton>
              </a>
            </Link>
          )}
        </div>
      </Hero>
    </>
  )
}

const Hero = styled('div')`
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff, url(${(props) => props.backgroundImage});
  background-position: ${(props) => props.backgroundPosition};
  min-height: ${(props) => props.backgroundHeight};
  background-size: cover;
  margin: 0 auto;
  max-width: 100vw;
  margin-bottom: 2rem;
  font-weight: 900;

  @media only screen and (min-device-width: 360px) {
    h1 {
      font-size: 2.8rem;
      font-weight: 900;
      margin-bottom: 2rem;
    }

    p {
      font-size: 1.4rem;
      line-height: 1.6;
      font-weight: 700;
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 4.2rem;
      margin-bottom: 2rem;
    }

    p {
      font-size: 1.6rem;
      line-height: 1.4;
    }
  }

  .content {
    max-width: 1140px;
    text-align: center;
    font-weight: 700;
    padding: 0 1.2rem;
    margin-top: 1rem;
  }
`

const WhiteButton = styled(Button)`
  background-color: #cf0a0a;
  color: #fff;
  font-size: 1rem;
  padding: 1.4rem 1.8rem;
  margin: 2rem 0;
  font-weight: 700;

  :hover {
    color: #000;
    background-color: rgba(255, 255, 255, 0.5);
    border-color: rgba(255, 255, 255, 0.1);
  }

  @media only screen and (max-device-width: 320px) and (orientation: landscape) {
    font-size: 0.5rem;
  }

  @media (min-width: 768px) {
    padding: 1.4rem 1.6rem;
    font-size: 1rem;
  }
`

export default HeroSection
