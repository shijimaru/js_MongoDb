const app = require('./app');
const port = process.env.port || 4000

app.listen(port, function () {
    console.log(`Server has started on ${port} port`)
})
