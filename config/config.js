export default {
  singular: true,
  disableCSSModules: true,
  plugins: [['umi-plugin-react', { antd: true }]],
  routes: [
    {
      path: '/app',
      component: '../layout',
      routes: [
        {
          path: '/app/dashboard',
          component: './dashboard',
        },
        {
          path: '/app/a',
          component: './A',
        },
        {
          path: '/app/b',
          component: './B',
        },
        {
          path: '/app/c',
          component: './C',
        },
      ],
    },
    {
      path: '/login',
      component: './Login',
    },
    {
      path: '/helloworld',
      component: './HelloWorld',
    },

    // {
    //   path: '/order',
    //   component: '../orderSystem/App',
    // },
  ],
};
