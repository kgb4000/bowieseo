import styled from 'styled-components'

export const Service = styled.div`
  .service-card {
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 20px;
    margin-bottom: 4rem;
    @media screen and (min-width: 1024px) {
      box-shadow: 13px 20px 0;
    }

    img {
      margin: 0;
      border-radius: 20px 20px 0 0;
    }

    .service {
      padding: 2rem 2rem;

      h3 {
        margin-top: 0;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
  }
`

export const ReasonSec = styled.div`
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
  }
`

export const Deliverables = styled.div`
  margin-top: 4rem;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
  }
`

export const Deliverable = styled.div`
  margin: 1rem 0;
  display: flex;

  ul {
    margin-top: 1.5rem;
    margin-left: 1rem;
  }

  img.check {
    margin-top: -0.8rem;
    margin-right: 1.5rem;
    width: 54px;
    height: 54px;
    }

    h3 {
      margin: 0;
    }

    p {
      margin-top: 1rem;
    }

  }
`

export const Why = styled.div`
  display: flex;
  flex-direction: row;

  img.check {
    margin-top: 1rem;
    margin-right: 2rem;
    width: 50px;
    height: 50px;
  }
`
