import React from 'react'
import {
  ProcessContainer,
  ProcessWrapper,
  ProcessRow,
  Column1,
  TextWrapper,
  Heading,
  Text,
  Column2,
  ImgWrap,
  Img,
} from './ProcessElements'

const Process = ({ imgStart, lightBg, headline, description, img, alt }) => {
  return (
    <>
      <ProcessContainer lightBg={lightBg}>
        <ProcessWrapper>
          <ProcessRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading>{headline}</Heading>
                <Text>{description}</Text>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </ProcessRow>
        </ProcessWrapper>
      </ProcessContainer>
    </>
  )
}

export default Process
