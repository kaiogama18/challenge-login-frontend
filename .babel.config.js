module.exports = {
    presets: [
        [
            '@babel/preset-env',
            'next/babel',
            '@babel/preset-typescript',
            { targets: { node: 'current' } }
        ]
    ],
    plugins: [
        'styled-components',
        'babel-plugin-styled-components',
        {
            ssr: true,
            displayName: true
        }
    ]
}
