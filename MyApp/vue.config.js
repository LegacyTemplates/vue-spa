// vue.config.js
module.exports = {
    outputDir: 'wwwroot',
    devServer: {
        proxy: 'http://localhost:5000'
    }    
};