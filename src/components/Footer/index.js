import React from 'react'
import { FooterContainer, FotterWrap, FooterLinkItems, FooterLinksWrapper, FooterLink, FotterLinksContainer, FooterLinkTitle } from './FooterElements';
const Footer = () => {
  return (
    <FooterContainer>
      <FotterWrap>
        <FotterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>  About Us  </FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>  About Us  </FooterLinkTitle>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FotterLinksContainer>
      </FotterWrap>
    </FooterContainer>
  )
}

export default Footer;