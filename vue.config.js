module.exports = {
    filenameHashing: false,
    configureWebpack: {
        devtool: 'source-map',
    },
    chainWebpack: config => {
        config.plugin('preload').tap(args => {
        args[0].fileBlacklist.push(/\.css/, /\.js/);
        return args;
        });

        config
        .plugin('inline-source')
        .use(require('html-webpack-inline-source-plugin'));

        config.plugin('html').tap(args => {
        args[0].inlineSource = '.(js|css)$';
        return args;
        });
    }
};