import styled from 'styled-components'

const Button = styled.button`
  font-size: 1rem;
  padding: 1.6rem 2.6rem;
  cursor: pointer;
  background-color: #cf0a0a;
  color: #fff;
  border: none;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  letter-spacing: 1px;
  font-weight: 700;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease 0s;
  outline: none;

  &:hover {
    background-color: #cf0a0a;
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`

export default Button
