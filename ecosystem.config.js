module.exports = {
  apps: [
    {
      name: 'ts-node',
      script: 'dist/app.js',
      interpreter_args: '--harmony',
      instances: 1, // 0=max
      exec_mode: 'cluster',
      merge_logs: true,
      out_file: '/dev/null',
      error_file: '/dev/null',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
