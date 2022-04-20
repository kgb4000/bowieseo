import React from 'react'
import Link from 'next/link'
import {
  HeroContainer,
  HeroBg,
  HeroImage,
  HeroContent,
  HeroBtnWrapper,
  HeroBtn,
  HeroBtn1,
} from './PageHeroElements'

const PageHero = ({
  heading,
  subText,
  heroBtnLink,
  heroBtnLink1,
  buttonText,
  buttonText1,
}) => {
  return (
    <HeroContainer>
      <HeroBg>
        <HeroImage></HeroImage>
      </HeroBg>
      <HeroContent>
        <h1>{heading}</h1>
        <p>{subText}</p>
        <HeroBtnWrapper>
          {buttonText && (
            <Link href={heroBtnLink}>
              <a>
                <HeroBtn>{buttonText}</HeroBtn>
              </a>
            </Link>
          )}

          {buttonText1 && (
            <Link href={heroBtnLink1}>
              <a>
                <HeroBtn1>{buttonText1}</HeroBtn1>
              </a>
            </Link>
          )}
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default PageHero
