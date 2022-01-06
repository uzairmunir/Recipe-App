import React from "react"
import styled from "styled-components"
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>
        &copy; {new Date().getFullYear()}
        <>SimplyRecipes</>. Built with{" "}
        <FooterLink href="https://www.gatsbyjs.com/">Gatsby</FooterLink>
      </FooterText>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  position: absolute;

  background-color: #333;
  width: 100%;
  padding: 1rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  margin-top: 1rem;
  z-index: -999;
`
const FooterText = styled.p`
  color: white;
  font-size: 1.3rem;
  font-weight: 400;
  display: flex;
`
const FooterLink = styled.a`
  text-decoration: none;
  color: #554ed9;
  padding: 0 0.5rem;
`

export default Footer
