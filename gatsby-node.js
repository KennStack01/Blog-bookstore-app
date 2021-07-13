const path = require(`path`)


exports.createPages = ({ graphql, actions: { createPage } }) => {
    return graphql(`
        query {
            allDatoCmsChronique {
                edges {
                    node {
                        slug
                    }
                }
            }

            allDatoCmsRecitEtPoesie {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `).then( (result) => {
        result.data.allDatoCmsChronique.edges.forEach(({ node }) => {
            createPage({
                component: path.resolve(`./src/templates/Chronique/TemplateForChronique.js`),
                path: `/chroniques/${node.slug}`,
                context: {
                    slug: node.slug,
                }
            })
        })

        result.data.allDatoCmsRecitEtPoesie.edges.forEach(({ node }) => {
            createPage({
                component: path.resolve(`./src/templates/RecitsEtPoesie/TemplateFoRecit.js`),
                path: `/recits/${node.slug}`,
                context: {
                    slug: node.slug,
                }
            })
        })

    }).catch( (error) => {
        console.log(error.message)
    })
}