const http = require('http')
const fs = require('fs')

const server = http.createServer()

server.addListener((req, res) => {
    const publicPath = './public'
    const srcPath = './src'
    console.log(req.url)
    let body = null
    try {
        body = fs.readFileSync(`${publicPath}${req.url}`)
    } catch (e) {
        body = fs.readFileSync(`${srcPath}/index.html`)
        console.log(e)
    }
    res.end(body)
})

const port = process.env.PORT || 3000

server.listen(port)

console.log('server is started')