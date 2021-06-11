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
                path: `/chroniques/${node.slug}`,
                component: path.resolve(`./src/Components/Chronique/Chronique.js`),
                context: {
                    slug: node.slug,
                }
            })
        })
    })
}