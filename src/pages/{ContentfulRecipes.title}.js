import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image"
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs"
import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const ContentfulRecipe = ({ data }) => {
  const recipeData = data?.allContentfulRecipes?.nodes
  const {
    cocktime,
    preptime,
    servings,
    title,
    description: { description },
    image,
  } = recipeData[0]
  const pathToImage = getImage(image)
  const { instructions, ingredients, tags, tools } = recipeData[0].detail

  console.log(recipeData)
  return (
    <Layout>
      <Seo title={title} />
      <div className="recipe-container">
        <div className="recipe-row-left">
          <GatsbyImage
            className="recipe-img"
            image={pathToImage}
            title={title}
          />
        </div>
        <div className="recipe-row-right">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="icons-container">
            <article>
              <BsClock className="icon" />
              <h5>Prep Time</h5>
              <p>{preptime} min.</p>
            </article>
            <article>
              <BsClockHistory className="icon" />
              <h5>Cook Time</h5>
              <p>{cocktime} min.</p>
            </article>
            <article>
              <BsPeople className="icon" />
              <h5>Serving</h5>
              <p>{servings} </p>
            </article>
          </div>
          <div className="tags-container">
            <h3>Tags</h3>

            {tags.map((tag, index) => (
              <p key={index}>{tag}</p>
            ))}
          </div>
        </div>
      </div>
      {/* rest of the content */}
      <section className="recipe-content">
        <div className="first-column">
          <h4>Instructions</h4>
          {instructions.map((item, index) => {
            return (
              <div key={index} className="single-instruction">
                <header>
                  <p>Step {index + 1}</p>
                  <div></div>
                </header>
                <p>{item}</p>
              </div>
            )
          })}
        </div>
        <article className="second-column">
          <div>
            <h4>Ingredients</h4>
            {ingredients.map((item, index) => {
              return (
                <p key={index} className="single-ingredient">
                  {item}
                </p>
              )
            })}
          </div>
          <div>
            <h4>Tools</h4>
            {tools.map((item, index) => {
              return (
                <p key={index} className="single-tool">
                  {item}
                </p>
              )
            })}
          </div>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getRecipe($title: String) {
    allContentfulRecipes(filter: { title: { eq: $title } }) {
      nodes {
        cocktime
        preptime
        servings
        title
        description {
          description
        }
        detail {
          instructions
          ingredients
          tags
          tools
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default ContentfulRecipe
