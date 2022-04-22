import React from 'react'

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarItem,
  SidebarLink,
  SidebarMenu,
  SidebarLinkA,
  SidebarBtnWrap,
  SidebarBtnLink,
  SidebarBtnLinkA,
} from './SidebarElements'

const calendly = 'https://calendly.com/bowieseo/30min'

const Sibebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarItem>
              <SidebarLink href="/seo-services">
                <SidebarLinkA>Services</SidebarLinkA>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink href="/blog">
                <SidebarLinkA>Blog</SidebarLinkA>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink href="/about">
                <SidebarLinkA>About</SidebarLinkA>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink href="/contact">
                <SidebarLinkA>Contact</SidebarLinkA>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink href="/free-mini-seo-audit">
                <SidebarLinkA>Free Mini SEO Audit</SidebarLinkA>
              </SidebarLink>
            </SidebarItem>
          </SidebarMenu>
          <SidebarBtnWrap>
            <SidebarBtnLink href={calendly}>
              <SidebarBtnLinkA href={calendly}>Book a Call</SidebarBtnLinkA>
            </SidebarBtnLink>
          </SidebarBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}

export default Sibebar
