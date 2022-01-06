import { Link, useStaticQuery } from "gatsby"
import React from "react"
import slugify from "slugify"
import styled from "styled-components"
import { query } from "../components/AllRecipes"
import Layout from "../components/Layout"
import setupTags from "../utils/SetupTags"
import Seo from "../components/seo"

const Tags = () => {
  const data = useStaticQuery(query)
  const tags = setupTags(data?.allContentfulRecipes?.nodes)

  return (
    <Layout>
      <Seo title="Tags" />
      <TagWrapper>
        {tags.map((tag, index) => {
          const [text, value] = tag
          const slug = slugify(text, { lower: true })
          return (
            <TagLink to={`/tags/${slug}`} key={index}>
              {text} ({value})
            </TagLink>
          )
        })}
      </TagWrapper>
    </Layout>
  )
}
const TagWrapper = styled.div`
  padding: 0.5rem 7rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  @media (max-width: 550px) {
    padding: 0.5rem 3rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 551px) and (max-width: 650px) {
    padding: 0.5rem 3rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`
const TagLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  border-radius: 0.3rem;
  text-decoration: none;
  color: #fff;
  padding: 1rem 0;
  font-size: 1.3rem;
  background-color: gray;
  margin: 0 0.3rem;
  &:hover {
    background-color: blue;
  }
`

export default Tags
