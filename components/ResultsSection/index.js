import React from 'react'
import {
  ResultsContainer,
  ResultsWrapper,
  ResultsRow,
  Column1,
  TextWrapper,
  Heading,
  Subtext,
  Text,
  Column2,
  ImgWrap,
  Img,
} from './ResultsElements'

const Results = ({
  imgStart,
  lightBg,
  topLine,
  headline,
  description,
  img,
  alt,
}) => {
  return (
    <>
      <ResultsContainer lightBg={lightBg}>
        <ResultsWrapper>
          <ResultsRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Subtext>{topLine}</Subtext>
                <Heading>{headline}</Heading>
                <Text>{description}</Text>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </ResultsRow>
        </ResultsWrapper>
      </ResultsContainer>
    </>
  )
}

export default Results
