import styled from 'styled-components'

export const ResultsContainer = styled.div`
  color: #2c3e50;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#f5f6fa')};

  @media screen and (min-width: 768px) {
    padding: 150px 0;
    margin: 2rem 0;
  }
`

export const ResultsWrapper = styled.div`
  display: grid;
  z-index: 1;
  min-height: auto;
  width: 100%;
  max-width: 1385px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 4rem 24px;
  }
`

export const ResultsRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const Heading = styled.h3`
  font-weight: 600;
  text-align: left;

  @media screen and (max-width: 480px) {
    text-align: left;
    font-size: 42px;
    margin: 0;
  }
`

export const Subtext = styled.p`
  max-width: 540px;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  line-height: 1.6;
  color: inherit;
`

export const Text = styled.p``

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 1rem;
  grid-area: col1;
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 1rem;
  grid-area: col2;
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`

export const Img = styled.img`
  width: 70%;
  padding-right: 0;
  margin: 0 auto;
`
