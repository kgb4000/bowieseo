import styled from 'styled-components'

export const InfoContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#ff5200')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  min-height: 860px;
  widtj: 100%;
  max-width: 1385px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const InfoRow = styled.div`
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

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  color: ${({ lightText }) => (lightText ? '#43464b' : '#fff')};
`

export const TopLine = styled.p`
  color: inherit;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h2`
  font-weight: 600;
  text-align: left;

  @media screen and (max-width: 480px) {
    text-align: left;
    font-size: 42px;
    margin: 0;
  }
`

export const Subtitle = styled.p`
  max-width: 540px;
  margin-bottom: 35px;
  font-size: 1.4rem;
  line-height: 1.6;
  color: inherit;
`

export const BtnWrap = styled.div`
  display: flex;

  justify-content: flex-start;
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`

export const Img = styled.img`
  width: 100%;
  padding-right: 0;
  margin: 0 0 10px 0;
`
