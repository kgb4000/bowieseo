import styled from 'styled-components'

export default function Footer() {
  return (
    <>
      <FooterSection>
        <p>Bowie SEO &copy; {new Date().getFullYear()}</p>
      </FooterSection>
    </>
  )
}

const FooterSection = styled.footer`
  text-align: center;
  color: #fff;
  padding: 2rem 0;
  font-weight: 700;
`
