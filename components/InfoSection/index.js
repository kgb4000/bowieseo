import React from 'react'
import Button from './../Button'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from './InfoElements'

const calendly = 'https://calendly.com/bowieseo/30min'

const InfoSection = ({
  lightBg,
  imgStart,
  topLine,
  headline,
  descriptiton,
  img,
  alt,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading>{headline}</Heading>
                <Subtitle>{descriptiton}</Subtitle>
                <BtnWrap>
                  <a href={calendly} target="_blank" rel="noreferrer">
                    <Button>Book a call</Button>
                  </a>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
