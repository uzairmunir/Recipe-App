import { graphql } from "gatsby"
import React from "react"
import RecipesList from "../pages/RecipeList"
import Layout from "../components/Layout"
import styled from "styled-components"

const TagTemplates = ({ data, pageContext }) => {
  const recipes = data?.allContentfulRecipes?.nodes

  return (
    <Layout>
      <Container>
        <Text>{pageContext.tag}</Text>
        <div>
          <RecipesList recipes={recipes} />
        </div>
      </Container>
    </Layout>
  )
}
const Container = styled.div`
  padding: 1rem 7rem;
`
const Text = styled.h2`
  text-transform: capitalize;
  padding: 1rem 0;
  font-size: 1.5rem;
  font-weight: 500;
`
export const query = graphql`
  query getTagRecipes($tag: String) {
    allContentfulRecipes(
      filter: { detail: { tags: { eq: $tag } } }
      sort: { fields: title, order: ASC }
    ) {
      nodes {
        title
        id
        cocktime
        preptime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default TagTemplates
