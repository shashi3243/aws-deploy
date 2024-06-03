module.exports = {
    apps: [{
      name: "app",
      script: "./src/app.js",
      dev: {
        NODE_ENV: "dev"
      },
      prod: {
        NODE_ENV: "prod",
      },
    }]
  }