module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '@constants': './src/shared/constants',
          '@constants/*': './src/shared/constants/*',
          '@components': './src/shared/components',
          '@assets': './src/assets',
          '@assets/*': './src/assets/*',
        },
      },
    ],
  ],
};
