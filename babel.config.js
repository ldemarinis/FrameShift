module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@/tokens':     './src/tokens/index',
            '@/components': './src/components/index',
            '@/screens':    './src/screens',
            '@/navigation': './src/navigation',
            '@/store':      './src/store',
            '@/lib':        './src/lib',
            '@/hooks':      './src/hooks',
          },
        },
      ],
    ],
  };
};
