import path from 'path';

export default {
  getRoutes: async () => {
    return [
      {
        path: '/',
        template: './src/pages/Home/Home.component.jsx',
      },
      {
        path: '404',
        template: './src/pages/404/404.component.jsx',
      },
    ];
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
    'react-static-plugin-sass',
  ],
};
