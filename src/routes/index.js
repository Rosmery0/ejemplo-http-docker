const { Router } = require('express');
const router = Router();
const { Temperature, TemperatureScale } = require('npm-temperatures-tdd/src/Temperatures');
const url = require('url');
const querystring = require('querystring');


router.get('/', (req, res) => {
    
    const myArr = req.query.q.toUpperCase().split(' ');
    const num = parseFloat(myArr[0]);
    const scale = myArr[1];
    const parseScale = myArr[3];

    const temperature = new Temperature(num, scale);
    try {
        if(parseScale == "C"){
            res.send(temperature.toCelcius().round().toString());
        } else if(parseScale == "F"){
            res.send(temperature.toFahrenheit().round().toString());
        } else if(parseScale == "K"){
            res.send(temperature.toKelvin().round().toString());
        } else {
            throw new Error("You did something wrong!!!");
        }
        
    } catch (error) {
        res.status(500).send((error).message);
    }
    
});


module.exports = router;