export default {
  singular: true,
  disableCSSModules: true,
  plugins: [["umi-plugin-react", { antd: true }]],
  routes: [
    {
      path: "/app",
      component: "../layout",
      routes: [
        {
          path: "/app/dashboard",
          component: "./dashboard",
        },
        {
          path: "/app/stovematch",
          component: "./stovematch",
        },
        {
          path: "/app/systemInfo",
          component: "./systemInfo",
        },
        {
          path: "/app/d",
          component: "./D",
        },
        {
          path: "/app/e",
          component: "./E",
        },
      ],
    },
    {
      path: "/login",
      component: "./Login",
    },
    {
      path: "/helloworld",
      component: "./HelloWorld",
    },

    // {
    //   path: '/order',
    //   component: '../orderSystem/App',
    // },
  ],
  proxy: {
    "/api": {
      target: "http://localhost:5000",
      changeOrigin: true,
      // pathRewrite: { "^/api": "" },
    },
  },
};
