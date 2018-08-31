module.exports = function() {
    const presets = ['@babel/env', '@babel/react'];
    const plugins = [
        '@babel/plugin-syntax-class-properties',
        '@babel/plugin-proposal-object-rest-spread'
    ];

    return {
        presets,
        plugins
    };
};
