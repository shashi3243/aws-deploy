module.exports = {
    apps: [{
      name: "app",
      script: "./src/app.js",
      env: {
        NODE_ENV: "dev"
      },
      env_production: {
        NODE_ENV: "prod",
      },
    }]
  }