// vue.config.js
module.exports = {
    //runtimeCompiler: true,
    outputDir: 'wwwroot',
    devServer: {
        proxy: 'https://localhost:5001'
    }    
};