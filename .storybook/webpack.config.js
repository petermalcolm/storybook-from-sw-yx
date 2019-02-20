const path = require('path');
const TSDocsgenPlugin = require('react-docgen-typescript-webpack-plugin');
module.exports = (baseConfig, env, defaultConfig) => {

    // config
    defaultConfig.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve('awesome-typescript-loader')
    });
    defaultConfig.plugins.push(new TSDocsgenPlugin());
    defaultConfig.resolve.extensions.push('.ts','.tsx');
    return defaultConfig;
}