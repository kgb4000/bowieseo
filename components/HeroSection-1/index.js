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
            Our team can take control of your website and bring you more leads
            and customers, so you can focus on growing your business.
          </p>
          <HeroBtnWrapper>
            <HeroBtn1Link href={heroBtnLink1}>
              <HeroBtn1LinkA>
                <HeaderBtn>Book a Call Today!</HeaderBtn>
              </HeroBtn1LinkA>
            </HeroBtn1Link>
            <HeroBtn2Link href={heroBtnLink2}>
              <HeroBtn2LinkA>
                <HeaderBtn>Get a Free Website Audit</HeaderBtn>
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
