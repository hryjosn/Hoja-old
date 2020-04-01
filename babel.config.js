module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    'module:react-native-dotenv',
  ],
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.json'],
        alias: {
          '@container': './src/container',
          '@styles': './src/styles',
          '@components': './src/components',
          '@store': './src/store',
          '@api': './src/api/api',
          '@constants': './src/constants',
          '@helpers': './src/helpers',
          '@image': './src/image',
          '@validators': './src/helpers/validators',
        },
      },
    ],
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
  ],
};
