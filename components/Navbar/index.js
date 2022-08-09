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
              <NavLinks href="/seo-services" passHref>
                <NavLinksA>Services</NavLinksA>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="/about" passHref>
                <NavLinksA>About</NavLinksA>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="/blog" passHref>
                <NavLinksA>Blog</NavLinksA>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="/contact" passHref>
                <NavLinksA>Contact</NavLinksA>
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            {/* <NavBtnLink>
              <BtnLinksA href={calendly}>Book a Call</BtnLinksA>
            </NavBtnLink> */}
            <NavBtnLink>
              <BtnLinksA href="tel:+2402660588">Call (240) 266-0588</BtnLinksA>
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
