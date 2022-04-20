import React from 'react'
import Button from '../Button'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  ListItem1,
  ListItem2,
  ListItem3,
  ListItem4,
  BtnWrap,
  ImgWrap,
  Img,
} from './InfoListElements'

const InfoSection = ({
  lightBg,
  imgStart,
  headline,
  item1,
  item2,
  item3,
  item4,
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
                <Heading>{headline}</Heading>
                <ListItem1>{item1}</ListItem1>
                <ListItem2>{item2}</ListItem2>
                <ListItem3>{item3}</ListItem3>
                <ListItem4>{item4}</ListItem4>
                <BtnWrap></BtnWrap>
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
