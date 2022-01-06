import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import RecipeList from "./RecipeList"
import Seo from "../components/seo"

export const query = graphql`
  {
    allContentfulRecipes(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        preptime
        title
        id
        cocktime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          title
        }
      }
    }
  }
`

const About = () => {
  const data = useStaticQuery(query)
  const recipes = data?.allContentfulRecipes?.nodes

  return (
    <Layout>
      <Seo title="About Page" />
      <AboutWrapper>
        <RowLeft>
          <AboutHeading>I'm baby coloring book poke taxidermy</AboutHeading>
          <AboutText>
            Taxidermy forage glossier letterpress heirloom before they sold out
            you probably haven't heard of them banh mi biodiesel chia.
          </AboutText>
          <AboutText>
            Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
            retro.
          </AboutText>
          <Button>Contact</Button>
        </RowLeft>
        <div>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person Pouring Salt in Bowl"
            className="about-img"
            placeholder="blurred"
          />
        </div>
      </AboutWrapper>
      <AboutRecipes>
        <Text>Look AT This Awesomesouce!</Text>
        <RecipeList recipes={recipes} />
      </AboutRecipes>
    </Layout>
  )
}
const AboutWrapper = styled.div`
  padding: 1.5rem 7rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 770px) {
    padding: 1rem;
    flex-direction: column-reverse;
  }
  @media (min-width: 771px) and (max-width: 1024px) {
    padding: 2rem;
  }
`
const RowLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const AboutHeading = styled.h1`
  color: #333;
  padding: 1rem 0;
  word-spacing: 0.5rem;
  font-size: 3rem;
  font-weight: 600;
  @media (max-width: 770px) {
    font-size: 2rem;
  }
  @media (min-width: 771px) and (max-width: 1024px) {
    font-size: 2.3rem;
  }
`
const AboutText = styled.div`
  padding: 0.5rem 0;
  word-spacing: 0.3rem;
  font-size: 1.2rem;
  font-weight: 400;
  font-family: san-serif;
`
const Button = styled.button`
  background-color: #554ed9;
  color: white;
  padding: 0.5rem 1rem;
  height: 40px;
  width: 100px;
  cursor: pointer;
  border: 0;
  outline: none;
  border-radius: 0.3rem;
  font-size: 1.1rem;
  font-family: sans-serif;
  font-weight: 300;
  letter-spacing: 0.1rem;
`
const AboutRecipes = styled.div`
  padding: 1rem 7rem;
  margin: 1rem 0;
  @media (max-width: 770px) {
    padding: 1rem;
  }
  @media (min-width: 771px) and (max-width: 1024px) {
    padding: 1rem;
  }
`
const Text = styled.h4`
  text-align: center;
  padding: 1rem 0;
  font-size: 1.5rem;
  font-weight: 500;
`

export default About
