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
  AuthorInfo,
} from './PageHeroElements'

const PageHero = ({
  heading,
  subText,
  heroBtnLink,
  heroBtnLink1,
  buttonText,
  buttonText1,
  date,
  authorName,
}) => {
  return (
    <HeroContainer>
      <HeroBg>
        <HeroImage></HeroImage>
      </HeroBg>
      <HeroContent>
        <h1>{heading}</h1>
        {subText && <p>{subText}</p>}
        {buttonText && (
          <HeroBtnWrapper>
            {buttonText && (
              <a href={heroBtnLink}>
                <HeroBtn>{buttonText}</HeroBtn>
              </a>
            )}

            {buttonText1 && (
              <Link href={heroBtnLink1}>
                <a>
                  <HeroBtn1>{buttonText1}</HeroBtn1>
                </a>
              </Link>
            )}
          </HeroBtnWrapper>
        )}
        <AuthorInfo>
          {date && (
            <div>
              <span>
                written by {authorName}, {date}
              </span>
            </div>
          )}
        </AuthorInfo>
      </HeroContent>
    </HeroContainer>
  )
}

export default PageHero
