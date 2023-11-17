// 1. Import packages and files
import express from 'express'
import session from 'express-session'
// // import ViteExpress from 'vite-express' --- THIS IS FOR FUTURE PROJECTS
import cors from 'cors'
import handlerFunctions from './controller.js'

// 2. Setup my express instance
const app = express()


// 3. Setup Middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.static(`client`))
app.use(session({
    secret: `Thisisasupersecret`,
    saveUninitialized: true,
    resave: false
}))


// 4. Routes go here

const {sayHello, allDrinks, oneDrink, addDrink, deleteDrink} = handlerFunctions

app.get(`/hello`, sayHello)

app.get(`/drinks`, allDrinks)

app.get(`/oneDrink/:index`, oneDrink)

app.post(`/drink`, addDrink)

app.delete(`/drink/:id`, deleteDrink)



// 5. Start up server with app.listen
app.listen(8000, () => console.log(`Avengers assemble on http://localhost:8000`))

    // IF YOU WANT TO USE VITE   
        // ViteExpress.listen(app, 8000, () => {
        // console.log(`Avengers assemble at http://localhost:8000`)
        // })