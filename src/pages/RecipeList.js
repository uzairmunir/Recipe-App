import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import slugify from "slugify"
import styled from "styled-components"

const RecipeList = ({ recipes }) => {
  return (
    <RecipeWrapper>
      {recipes?.map((recipe, index) => {
        const { title, image, cocktime, preptime } = recipe
        const slug = slugify(title, { lower: true })
        const pathToImage = getImage(image)
        return (
          <RecipeLinkWrapper to={`/${slug}`} key={index}>
            <Image image={pathToImage} alt={title} />
            <RecipeTitle>{title}</RecipeTitle>
            <CockTime>
              Prep : {preptime}min | Cook : {cocktime}min
            </CockTime>
          </RecipeLinkWrapper>
        )
      })}
    </RecipeWrapper>
  )
}
const RecipeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.3rem;
  margin-bottom: 2.5rem;
  flex: 1;
  @media (max-width: 550px) {
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 551px) and (max-width: 1024px) {
    padding: 1rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`
const RecipeLinkWrapper = styled(Link)`
  text-decoration: none;
  color: #333;
  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
const Image = styled(GatsbyImage)`
  height: 200px;
  width: 300px;
  object-fit: cover;
  border-radius: 0.3rem;
  @media (max-width: 550px) {
    height: 300px;
    width: 90%;
  }
`
const RecipeTitle = styled.h5`
  padding: 0.5rem 0;
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  font-family: sans-serif;
`
const CockTime = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #333;
  font-family: sans-serif;
  padding: 0.3rem 0;
`

export default RecipeList
