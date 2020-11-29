exports.default = {
  register: (app) => {
    ['dashboard', 'stove', 'notice', 'emergency', 'maintenance'].forEach((v) =>
      require(`./${v}`).default(app)
    );
  },
};
