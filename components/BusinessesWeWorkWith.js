import styled from 'styled-components'

export const Businesses = styled.div`
  margin: 2rem 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`

export const Business = styled.div`
  text-align: center;
  border-radius: 20px;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #eee;
  box-shadow: 10px 10px 0px #000;

  img {
    width: 4rem;
    margin: 0 auto;
  }

  p {
    margin-top: 1rem;
    font-weight: 900;
  }
`
export const Cities = styled.div`
  margin: 0 auto;
  @media screen and (min-width: 508px) {
    @media (min-width: 768px) {
      margin: 3rem 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
    }
  }

  @media screen and (min-width: 1024px) {
    @media (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`

export const City = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  img {
    width: 40px;
    height: 40px;
    margin: 0;
    margin-right: 0.5rem;
  }

  a,
  p {
    margin: 0;
    font-weight: 700;
  }
`
