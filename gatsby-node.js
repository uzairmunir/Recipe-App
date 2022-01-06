const path = require("path")
const slugify = require("slugify")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const results = await graphql(`
    query getRecipes {
      allContentfulRecipes {
        nodes {
          detail {
            tags
          }
        }
      }
    }
  `)
  results?.data?.allContentfulRecipes?.nodes?.forEach(recipe => {
    recipe?.detail?.tags.forEach(tag => {
      const tagSlug = slugify(tag, { lower: true })
      createPage({
        path: `/tags/${tagSlug}`,
        component: path.resolve(`src/templates/tag-templates.js`),
        context: {
          tag: tag,
        },
      })
    })
  })
}

// exports.createPages = async ({ actions, graphql }) => {
//   const { createPage } = actions
//   const results = await graphql(`
//     query recipeDetail {
//       allContentfulRecipes {
//         nodes {
//           title
//         }
//       }
//     }
//   `)

//   results?.data?.allContentfulRecipes?.nodes?.forEach(recipe => {
//     const titleSlug = slugify(recipe.title, { lower: true })
//     console.log(titleSlug)
//     createPage({
//       path: `/${titleSlug}`,
//       component: path.resolve(`src/templates/recipe-template.js`),
//       context: results,
//     })
//   })
// }
