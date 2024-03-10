// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'partypic-front',
      script: 'vite',
      args: 'build && vite preview --host 127.0.0.1 --port 443',
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
