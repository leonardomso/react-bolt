import CleanWebpackPlugin from 'clean-webpack-plugin';

import paths from './paths';
import rules from './rules';

module.exports = {
    mode: 'production',
    output: {
        filename: `${paths.jsFolder}/[name].[hash].js`,
        path: paths.outputPath,
        chunkFilename: '[name].[chunkhash].js'
    },
    plugins: [
        new CleanWebpackPlugin([paths.outputPath.split('/').pop()], {
            root: paths.root
        })
    ],
    devtool: 'source-map'
};
