import Link from 'next/link'
import styled from 'styled-components'

export const Nav = styled.header`
  background: #fff;
  height: 80px;
  display: flex;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`
export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  max-width: 90%;
  padding: 1rem;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    max-width: 100%;
  }
`

export const NavLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 900;
  align-self: center;
  font-weight: 900;
  cursor: pointer;
  font-family: Poppins, san-serif;

  a {
    color: #000;
    text-decoration: none;
  }
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 900px) {
    display: block;
    transform: translate(-100%. 60%);
    font-size: 1.8rem;
    cursor: pointer;
    align-item: center;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin-right: -22px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`
export const NavItem = styled.li`
  color: #000;
  margin-bottom: 1rem;

  .dropdown {
    position: relative;
  }

  .menu {
    position: absolute;
    list-style-type: none;
    margin: 5px 0;
    padding: 0;
    margin-top: 24px;
    width: 350px;
  }

  .menu > li {
    margin: 0;
    padding-left: 0.5rem;

    background-color: white;
  }

  .menu > li:hover {
    background-color: lightgray;
  }

  .menu > li > button {
    width: 100%;
    height: 100%;
    text-align: left;

    background: none;
    color: inherit;
    border: none;
    padding: 5px;
    margin: 0;
    font: inherit;
    cursor: pointer;
  }
`

export const NavLinks = styled(Link)`
  &:active {
    border-bottom: 3px solid #cf0a0a;
  }
`

export const NavLinksA = styled.a`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 86px;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid #cf0a0a;
  }
`

export const NavBtn = styled.div`
  @media screen and (max-width: 900px) {
    display: none;
  }
`

export const NavBtnLink = styled.div`
  border-radius: 5px;
  background: #cf0a0a;
  white-space: nowrap;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  border: none;

  &:hover {
    background-color: #fff;
    color: #000;
    border: none;
  }
`

export const BtnLinksA = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.6rem 1rem;
  height: 100%;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #fff;
    color: #000;
  }
`
