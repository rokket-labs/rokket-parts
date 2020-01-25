module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('awesome-typescript-loader'),
        },
        // Optional
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};