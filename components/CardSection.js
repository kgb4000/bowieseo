import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    color: #000;
    text-decoration: none;

    &:hover {
      color: #fff;
      text-decoration: none;
    }
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-content: center;
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1366px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  border: 2px solid #ddd;
  border-radius: 5px;
  margin: 0.5rem;
  width: 320px;
  height: 650px;
  transition: all 0.2s ease-in-out;
  color: #000;
  cursor: pointer;

  &:hover {
    color: #fff;
    background: #ff5200;
    border-color: #ff5200;
  }

  h3 {
    text-align: center;
    margin: 2rem 0;
  }

  .card-info img {
    height: 10rem;
    display: block;
    margin: 1rem auto;
  }

  @media screen and (min-width: 768px) {
    width: auto;
    height: 750px;
    padding: 2rem;

    .card-info img {
      width: 11rem;
    }
  }

  @media screen and (min-width: 1024px) {
    width: auto;
    height: 750px;
    padding: 3.5rem;

    .card-info img {
      width: 11rem;
    }
  }
`

export const Wrapper = styled.div`
  max-width: 1385px;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-content: center;
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`

export const Contact = styled.div`
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  margin-bottom: 2rem;
  padding: 0 2rem;
  height: 400px;

  @media screen and (min-width: 768px) {
    height: 500px;
  }

  img {
    margin: 2rem 0;
  }
`
