const express = require('express')
const app = express()

app.set('PORT', process.env.PORT || 3000)

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'How do I deploy my app to Heroku today?',
        date: new Date().toDateString(),
    })
})

app.listen(app.get('PORT'), () =>
    console.log(`Server running on port ${app.get('PORT')}`),
)