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
          path: "/app/urgencystart",
          component: "./urgencystart",
        },
        {
          path: "/app/infomaintain",
          component: "./infomaintain",
        },
      ],
    },

    {
      path: "/helloworld",
      component: "./HelloWorld",
    },
  ],
  proxy: {
    "/api": {
      target: "http://127.0.0.1:7890",
      changeOrigin: true,
      // pathRewrite: { "^/api": "" },
    },
  },
};
