const withImages = require('next-images')
module.exports = withImages({ esModule: true })

module.export = {
    webpack: (config, { builId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
        return config
    }
}
