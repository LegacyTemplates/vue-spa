// vue.config.js
module.exports = {
    outputDir: 'wwwroot',
    devServer: {
        proxy: 'https://localhost:5001'
    }
};