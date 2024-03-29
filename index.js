
const express = require("express")
const path = require("path")

const app = express()

app.use('/', express.static(path.join(__dirname, '..', 'client', 'build')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'))
})

function BOOTSRAP(port) {
    app.listen(port, () => console.log(`Process started on port ${port}`))
}

BOOTSRAP(9090)