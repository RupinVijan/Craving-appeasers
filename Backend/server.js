const express = require('express')
const app = express()
const port = process.env.PORT || 8000;


app.use(express.json())


app.use('/api/use', require('./Routes/dataget'))
app.use('/api/customer/item' , require('./Routes/custrest'))
app.use('/api/post/restaurant/item' , require('./Routes/post'))

// if(process.env.NODE_ENV=== "production"){
//   app.use(express.static('my-bank/build'))
// }

app.listen(port, () => {
  console.log(`Your app listening at http://localhost:${port}`)
})