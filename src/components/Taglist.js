import { Link } from "gatsby"
import React from "react"
import slugify from "slugify"
import styled from "styled-components"
import setupTags from "../utils/SetupTags"

const TagList = ({ recipes }) => {
  const newTags = setupTags(recipes)

  return (
    <TagsWrapper>
      <Title>Recipes</Title>
      <TagContainer>
        {newTags.map((tag, index) => {
          const [text, value] = tag
          const slug = slugify(text, { lower: true })
          return (
            <TagsLink to={`/tags/${slug}`} key={index}>
              {text} ({value})
            </TagsLink>
          )
        })}
      </TagContainer>
    </TagsWrapper>
  )
}
const TagsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.5;
`
const TagsLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 1.3rem;
  font-weight: 400;
  font-family: san-serif;
  text-transform: capitalize;
  padding: 0.3rem 0;
`
const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 770px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 771px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`
const Title = styled.h4`
  font-family: san-serif;
  padding: 0.3rem 0;
  font-size: 1.5rem;
  font-weight: 500;
`

export default TagList
