module.exports = function(api) {
  api.cache(true);

  const presets = [['es2015', { targets: { node: 'current' } }]];
  const plugins = [];

  return {
    presets,
    plugins,
  };
};
