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
        }
    `).then( (result) => {
        result.data.allDatoCmsChronique.edges.forEach(({ node }) => {
            createPage({
                component: path.resolve(`./src/Components/Chronique/TemplateForChronique.js`),
                path: `/chroniques/${node.slug}`,
                context: {
                    slug: node.slug,
                }
            })
        })
    }).catch( (error) => {
        console.log(error.message)
    })
}
// exports.createPages = ({ graphql, actions: { createPage } }) => {
//     return graphql(`
//         query {
//             allDatoCmsChronique {
//                 edges {
//                     node {
//                         slug
//                     }
//                 }
//             }
//         }
//     `).then( (result) => {
//         result.data.allDatoCmsChronique.edges.forEach(({ node }) => {
//             createPage({
//                 component: path.resolve(`./src/Components/Chronique/TemplateForChronique.js`),
//                 path: `/chroniques/${node.slug}`,
//                 context: {
//                     slug: node.slug,
//                 }
//             })
//         })
//     })
// }

// exports.createSchemaCustomization= ({ actions }) => {
//   actions.printTypeDefinitions({path: './typeDefs.txt'})
// }