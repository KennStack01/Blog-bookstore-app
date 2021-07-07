const path = require(`path`)

exports.createPages = ({ graphql, actions: { createPage } }) => {
    return graphql(`
        {
            allContentfulChronique {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `).then( (result) => {
        result.data.allContentfulChronique.edges.forEach(({ node }) => {
            createPage({
                component: path.resolve(`./src/Components/Chronique/Chronique.js`),
                path: `/chroniques/${node.slug}`,
                context: {
                    slug: node.slug,
                }
            })
        })
    })
}

exports.createSchemaCustomization= ({ actions }) => {
  actions.printTypeDefinitions({path: './typeDefs.txt'})
}