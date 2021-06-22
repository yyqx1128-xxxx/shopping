module.exports = {
    //跳过eslint的语法检查 一般公司开发写'warning'
    lintOnSave: false,
    //代理配置
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://api.hd.shall-buy.top/',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ' ',
                },
            },
        },
    },
}
