const webpack = require('webpack');

module.exports = function override(config, env) {
    // Add fallbacks for buffer, stream, process, and crypto
    config.resolve.fallback = {
        ...config.resolve.fallback,
        buffer: require.resolve('buffer/'),
        stream: require.resolve('stream-browserify'),
        process: require.resolve('process/browser.js'),
        crypto: require.resolve('crypto-browserify'),
    };

    // Provide the process variable globally
    config.plugins = [
        ...config.plugins,
        new webpack.ProvidePlugin({
            process: 'process/browser.js',
        }),
    ];

    return config;
};
