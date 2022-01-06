import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import RecipeList from "../pages/RecipeList"
import styled from "styled-components"
import TagList from "./Taglist"

export const query = graphql`
  query MyQuery {
    allContentfulRecipes(sort: { fields: title, order: ASC }) {
      nodes {
        cocktime
        detail {
          tags
        }
        id
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        preptime
        title
      }
    }
  }
`

const AllRecipes = () => {
  const data = useStaticQuery(query)
  const recipes = data?.allContentfulRecipes?.nodes

  return (
    <AllRecipesWrapper>
      <TagList recipes={recipes} />
      <RecipeList recipes={recipes} />
    </AllRecipesWrapper>
  )
}

const AllRecipesWrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`

export default AllRecipes
