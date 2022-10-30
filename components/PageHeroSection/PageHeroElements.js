import styled from 'styled-components'
import Button from '../Button'

export const HeroContainer = styled.div`
  background: #2c3e50;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  min-height: 80vh;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 80vh;
  height: 80vh;
  overflow: hidden;
`

export const HeroImage = styled.div`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1000px;
  padding: 8px 0;
  margin: 0 auto;

  h1 {
    color: #fff;
    font-size: 1.9375rem;
    margin: 2rem 0;
    text-align: left;
    line-height: 1.6;

    @media screen and (min-width: 480px) {
      font-size: 35px;
    }

    @media screen and (min-width: 768px) {
      font-size: 55px;
    }
  }

  p {
    color: #fff;
    font-size: 1.125rem;

    @media screen and (max-width: 480px) {
      font-size: 1.125rem;
    }
  }
`

export const HeroBtnWrapper = styled.div`
  margin-top: 2rem;
  display: flex;

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`

export const HeroBtn = styled(Button)`
  text-transform: uppercase;
  width: 100%;
  margin: 0 auto;
  display: block;
  margin-bottom: 1rem;

  @media screen and (min-width: 500px) {
    width: 12rem;
    display: flex;
    justify-content: center;
    margin-bottom: 0;
    width: auto;
    margin-right: 1rem;
  }
`

export const HeroBtn1 = styled(Button)`
  text-transform: uppercase;
  width: 100%;
  margin: 0 auto;
  display: block;

  @media screen and (min-width: 500px) {
    width: 12rem;
    display: flex;
    justify-content: center;
    margin-bottom: 0;
    width: auto;
  }
`
export const AuthorInfo = styled.div`
  color: #fff;
`
