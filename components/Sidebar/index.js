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
              <SidebarLink prefetch href="/seo-services" passHref>
                <SidebarLinkA>Services</SidebarLinkA>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink prefetch href="/blog" passHref>
                <SidebarLinkA>Blog</SidebarLinkA>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink prefetch href="/about" passHref>
                <SidebarLinkA>About</SidebarLinkA>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink prefetch href="/contact" passHref>
                <SidebarLinkA>Contact</SidebarLinkA>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink prefetch href="/free-mini-seo-audit" passHref>
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
