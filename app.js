const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')

const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: true }))
const sitelink = 'http://localhost:3000/'

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static('public'))

app.listen(port, ( () => {
    console.log('Server running on http://localhost:3000/')
}))

// index

app.get('/', (req, res) => {
    const locals = {
        title: 'Homepage',
        description: 'Page Description',
        layout: '_partials/header.ejs'
    }
    res.render('index', locals)
})