// 该文件做代理以及mock数据和登入注册 ,该使用的是nodejs范畴
const httpProxy = require("http-proxy-middleware");

module.exports = function (app) {
    // var userInfo=[]
    app.get("/test", (req, res) => {
        res.send("ok")
    })

    //  作用:参看url里是否带有api,当检测到url有api时就会转发
    // https://cnodejs.org/api/v1/topics 代理该接口示范
    app.use(httpProxy("/apis",{
        target:"https://cnodejs.org",
        changeOrigin:true,
        pathRewrite:{
            "^/apis":""
        }
    }))
}