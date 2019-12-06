export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5de9cb90c8a1aa5c7026098c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-sjatve5g',
                  apiId: '8f4d1c54-072c-4039-ba79-7be8178958ad'
                },
                {
                  buildHookId: '5de9cb90c8a1aa917626098d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-2qd4ebm4',
                  apiId: 'f123fb08-b1d4-4f7a-bdba-1baa1a74a332'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shawngavin/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-2qd4ebm4.netlify.com', category: 'apps'}
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
