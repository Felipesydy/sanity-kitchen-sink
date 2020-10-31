export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f9d83fa6a91dbc4e1fa7ad2',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-vey2wita',
                  apiId: '42da05a5-5d6d-4649-89dd-3c749e2f906b'
                },
                {
                  buildHookId: '5f9d83fbb20276ba3d470dfd',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-f1x4ds78',
                  apiId: '1d545217-803d-448f-ab3f-103a1bcf8623'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/felipepacha/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-f1x4ds78.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
