import React from "react"
import Layout from "../components/Layout"
import AllRecipes from "../components/AllRecipes"
import styled from "styled-components"
import Seo from "../components/seo"

const recipes = () => {
  return (
    <Layout>
      <Seo title="Recipes" />
      <RecipesWrapper>
        <AllRecipes />
      </RecipesWrapper>
    </Layout>
  )
}
const RecipesWrapper = styled.div`
  padding: 0.5rem 7rem;
  @media (max-width: 770px) {
    padding: 1rem;
  }
  @media (min-width: 771px) and (max-width: 1024px) {
    padding: 1.5rem;
  }
`

export default recipes
