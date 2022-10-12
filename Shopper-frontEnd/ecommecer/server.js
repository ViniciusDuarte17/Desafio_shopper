const express = require('express')

const { resolve, dirname } = require('path')
const app = express()


app.use('/',
    express.static(
        resolve(
            --dirname,
            './dist'
        )
    )
)

app.listen(process.env.PORT || 3000, (err) => {
    if (err) { console.log(err) }

    console.log("Deu tudo certo!")
})

