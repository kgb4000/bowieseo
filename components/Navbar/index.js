import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
import {
  NavbarContainer,
  Nav,
  MobileIcon,
  NavItem,
  NavMenu,
  NavLinks,
  NavLogo,
  NavLinksA,
  NavBtn,
  NavBtnLink,
  BtnLinksA,
} from './navbarElements'

const calendly = 'https://calendly.com/bowieseo/30min'

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>
            <Link href="/">
              <a>Bowie SEO</a>
            </Link>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks href="/seo-services">
                <NavLinksA>Services</NavLinksA>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="/about">
                <NavLinksA>About</NavLinksA>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="/blog">
                <NavLinksA>Blog</NavLinksA>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="/contact">
                <NavLinksA>Contact</NavLinksA>
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink>
              <BtnLinksA href={calendly}>Book a Call</BtnLinksA>
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
