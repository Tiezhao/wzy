export default {
    singular: true,
    routes: [{
        path: '/helloworld',
        component: './HelloWorld',
      },
      {
        path: '/order',
        component: '../orderSystem/App',
      }
    ],
};