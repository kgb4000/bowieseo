import { useState } from 'react'
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
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  const handleMenuOne = () => {
    // do something
    setOpen(false)
  }

  const handleMenuTwo = () => {
    // do something
    setOpen(false)
  }
  const handleMenuThree = () => {
    // do something
    setOpen(false)
  }

  const handleMenuFour = () => {
    // do something
    setOpen(false)
  }
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
              <Dropdown
                open={open}
                trigger={<div onClick={handleOpen}>Services</div>}
                menu={[
                  <div onClick={handleMenuOne}>
                    <Link href="/local-seo-services" passHref>
                      <a>Local SEO</a>
                    </Link>
                  </div>,
                  <div onClick={handleMenuTwo}>
                    <Link href="/search-engine-optimization" passHref>
                      <a>Search Engine Optimization</a>
                    </Link>
                  </div>,
                  <div onClick={handleMenuThree}>
                    <Link href="/gmb-management-services" passHref>
                      <a>GMB Management</a>
                    </Link>
                  </div>,
                  <div onClick={handleMenuFour}>
                    <Link href="/free-mini-seo-audit" passHref>
                      <a>Free Mini SEO Audit</a>
                    </Link>
                  </div>,
                ]}
              />
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
            <NavBtnLink>
              <BtnLinksA href={calendly}>Lets Talk today!</BtnLinksA>
            </NavBtnLink>
            {/* <NavBtnLink>
              <BtnLinksA href="tel:+2402660588">Call (240) 266-0588</BtnLinksA>
            </NavBtnLink> */}
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar

const Dropdown = ({ open, trigger, menu }) => {
  return (
    <div className="dropdown">
      {trigger}
      {open ? (
        <ul className="menu">
          {menu.map((menuItem, index) => (
            <li key={index} className="menu-item">
              {menuItem}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
