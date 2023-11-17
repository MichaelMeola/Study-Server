import drinks from './db.json' assert {type: 'json'}

let globalId = 4

const handlerFunctions = {

    sayHello: (req, res) => {
        res.send(`Hello there!`)
    },

    allDrinks: (req, res) => {
        res.send(drinks)
    },

    oneDrink: (req, res) => {
    
        console.log(`the req.params are`, req.params)
    
        res.send(drinks[req.params.index])
    },

    addDrink: (req,res) => {

        const {drinkName, drinkPic} = req.body

        let newObj = {
            id: globalId,
            name: drinkName,
            picture: drinkPic,
            votes: 0
        }

        drinks.push(newObj)

        globalId++

        res.send(drinks)
    },

    deleteDrink: (req,res) => {

        // const {id} = req.params

        for(let i=0; i<drinks.length; i++){
            if(drinks[i].id === +req.params.id){
                drinks.splice(i, 1)
                break
            }
        }
        res.send(drinks)
    }

}

export default handlerFunctions