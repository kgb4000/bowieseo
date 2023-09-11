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
              <SidebarLink href="/search-engine-optimization" passHref>
                <SidebarLinkA>Search Engine Optimization</SidebarLinkA>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink href="/gmb-management-services" passHref>
                <SidebarLinkA>GMB Management</SidebarLinkA>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink href="/keyword-research" passHref>
                <SidebarLinkA>Keyword Research</SidebarLinkA>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink href="/content-for-seo" passHref>
                <SidebarLinkA>Content for SEO</SidebarLinkA>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink href="/free-mini-seo-audit" passHref>
                <SidebarLinkA>Free Mini SEO Audit</SidebarLinkA>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink href="/case-studies" passHref>
                <SidebarLinkA>Case Studies</SidebarLinkA>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink href="/blog" passHref>
                <SidebarLinkA>Blog</SidebarLinkA>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink href="/about" passHref>
                <SidebarLinkA>About us</SidebarLinkA>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink href="/contact" passHref>
                <SidebarLinkA>Contact us</SidebarLinkA>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarBtnWrap>
                <SidebarBtnLink href="/free-seo-audit">
                  <SidebarBtnLinkA>I Want My Free SEO Audit</SidebarBtnLinkA>
                </SidebarBtnLink>
              </SidebarBtnWrap>
            </SidebarItem>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}

export default Sibebar
