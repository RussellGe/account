const {
  override,
  adjustStyleLoaders,
  addLessLoader,
} = require("customize-cra");

module.exports = {
  webpack: override(
    addLessLoader({
      lessOptions: {
        strictMath: true,
        noIeCompat: true,
        javascriptEnabled: true,
        modifyVars: { "@primary-color": "#13c2c2" },
        cssLoaderOptions: {
          modules: { localIdentName: "[name]_[local]_[hash:base64:5]" },
        },
      },
    }),
    // ↓加了这么个配置
    adjustStyleLoaders(({ use: [, , postcss] }) => {
      const postcssOptions = postcss.options;
      postcss.options = { postcssOptions };
    })
  ),
};
