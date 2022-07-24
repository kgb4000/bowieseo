import React from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import {
  HeroContainer,
  HeroBg,
  HeroImage,
  HeroContent,
  HeroBtnWrapper,
  HeroBtn1Link,
  HeroBtn2Link,
  HeroBtn1LinkA,
  HeroBtn2LinkA,
} from './HeroElements'

const HeroSection = ({ heroBtnLink1, heroBtnLink2 }) => {
  return (
    <div>
      <HeroContainer>
        <HeroBg>
          <HeroImage></HeroImage>
        </HeroBg>
        <HeroContent>
          <h1>
            Make Your Website a Magnet & Get More Traffic, Leads, and Customers
          </h1>
          <p>
            Bowie SEO can get you more website traffic and leads and increase
            your revenue.
          </p>
          <HeroBtnWrapper>
            <HeroBtn1Link href={heroBtnLink1}>
              <HeroBtn1LinkA>
                <HeaderBtn>Book a Call</HeaderBtn>
              </HeroBtn1LinkA>
            </HeroBtn1Link>
            <HeroBtn2Link href={heroBtnLink2}>
              <HeroBtn2LinkA>
                <HeaderBtn>Free Website Audit</HeaderBtn>
              </HeroBtn2LinkA>
            </HeroBtn2Link>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </div>
  )
}

const HeaderBtn = styled(Button)`
  width: 100%;
`

export default HeroSection
