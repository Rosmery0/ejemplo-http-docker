const TemperatureScale = {
    kelvin: "K",
    celcius: "C",
    fahrenheit: "F"
}
class Temperature{
    constructor(number, scale){
        if(number <= 0 && scale == TemperatureScale.kelvin){
            throw new Error('Kelvin cant be 0 or less');
        }
        if(isNaN(number)){
            throw new Error('The first arg should be a number');
        }
        if(scale != TemperatureScale.celcius && scale != TemperatureScale.kelvin && scale != TemperatureScale.fahrenheit){
            throw new Error('scale arg has to be a TemperatureScale');
        }

        this.number = number;
        this.scale = scale;
    }

    Add(temperature){
        let result;
        if(this.scale == temperature.scale){
            result = this.number + temperature.number
            return new Temperature(result, this.scale);
        }
        if(this.scale == TemperatureScale.fahrenheit && temperature.scale == TemperatureScale.celcius){
            result = this.number + temperature.toFahrenheit().number;
            return new Temperature(result, TemperatureScale.fahrenheit);
        }
        if(this.scale == TemperatureScale.fahrenheit && temperature.scale == TemperatureScale.kelvin){
            result = this.number + temperature.toFahrenheit().number;
            return new Temperature(result, TemperatureScale.fahrenheit);
        }
        if(this.scale == TemperatureScale.kelvin && temperature.scale == TemperatureScale.celcius){
            result = this.number + temperature.toKelvin().number;
            return new Temperature(result, TemperatureScale.kelvin);
        }
        if(this.scale == TemperatureScale.kelvin && temperature.scale == TemperatureScale.fahrenheit){
            result = this.number + temperature.toKelvin().number;
            return new Temperature(result, TemperatureScale.kelvin);
        }
        if(this.scale == TemperatureScale.celcius && temperature.scale == TemperatureScale.fahrenheit){
            result = this.number + temperature.toCelcius().number;
            return new Temperature(result, TemperatureScale.celcius);
        }
        if(this.scale == TemperatureScale.celcius && temperature.scale == TemperatureScale.kelvin){
            result = this.number + temperature.toCelcius().number;
            return new Temperature(result, TemperatureScale.celcius);
        }
    }
    Substract(temperature){
        let result;
        if(this.scale == temperature.scale){
            result = this.number - (temperature.number);
            return new Temperature(result, this.scale);
        }
        if(this.scale == TemperatureScale.fahrenheit && temperature.scale == TemperatureScale.celcius){
            result = this.number -( temperature.toFahrenheit().number);
            return new Temperature(result, TemperatureScale.fahrenheit);
        }
        if(this.scale == TemperatureScale.fahrenheit && temperature.scale == TemperatureScale.kelvin){
            result = this.number - (temperature.toFahrenheit().number);
            return new Temperature(result, TemperatureScale.fahrenheit);
        }
        if(this.scale == TemperatureScale.kelvin && temperature.scale == TemperatureScale.celcius){
            result = this.number - (temperature.toKelvin().number);
            return new Temperature(result, TemperatureScale.kelvin);
        }
        if(this.scale == TemperatureScale.kelvin && temperature.scale == TemperatureScale.fahrenheit){
            result = this.number - (temperature.toKelvin().number);
            return new Temperature(result, TemperatureScale.kelvin);
        }
        if(this.scale == TemperatureScale.celcius && temperature.scale == TemperatureScale.fahrenheit){
            result = this.number - (temperature.toCelcius().number);
            return new Temperature(result, TemperatureScale.celcius);
        }
        if(this.scale == TemperatureScale.celcius && temperature.scale == TemperatureScale.kelvin){
            result = this.number - (temperature.toCelcius().number);
            return new Temperature(result, TemperatureScale.celcius);
        }
    }
    multiplyBy(temperature){
        let result;
        if(this.scale == temperature.scale){
            result = this.number * (temperature.number);
            return new Temperature(result, this.scale);
        }
        if(this.scale == TemperatureScale.fahrenheit && temperature.scale == TemperatureScale.celcius){
            result = this.number * (temperature.toFahrenheit().number);
            return new Temperature(result, TemperatureScale.fahrenheit);
        }
        if(this.scale == TemperatureScale.fahrenheit && temperature.scale == TemperatureScale.kelvin){
            result = this.number * (temperature.toFahrenheit().number);
            return new Temperature(result, TemperatureScale.fahrenheit);
        }
        if(this.scale == TemperatureScale.kelvin && temperature.scale == TemperatureScale.celcius){
            result = this.number * (temperature.toKelvin().number);
            return new Temperature(result, TemperatureScale.kelvin);
        }
        if(this.scale == TemperatureScale.kelvin && temperature.scale == TemperatureScale.fahrenheit){
            result = this.number * (temperature.toKelvin().number);
            return new Temperature(result, TemperatureScale.kelvin);
        }
        if(this.scale == TemperatureScale.celcius && temperature.scale == TemperatureScale.fahrenheit){
            result = this.number * (temperature.toCelcius().number);
            return new Temperature(result, TemperatureScale.celcius);
        }
        if(this.scale == TemperatureScale.celcius && temperature.scale == TemperatureScale.kelvin){
            result = this.number * (temperature.toCelcius().number);
            return new Temperature(result, TemperatureScale.celcius);
        }
    }
    divideBy(temperature){
        let result;
        if(this.scale == temperature.scale){
            result = this.number / (temperature.number);
            return new Temperature(result, this.scale);
        }
        if(this.scale == TemperatureScale.fahrenheit && temperature.scale == TemperatureScale.celcius){
            result = this.number / (temperature.toFahrenheit().number);
            return new Temperature(result, TemperatureScale.fahrenheit);
        }
        if(this.scale == TemperatureScale.fahrenheit && temperature.scale == TemperatureScale.kelvin){
            result = this.number / (temperature.toFahrenheit().number);
            return new Temperature(result, TemperatureScale.fahrenheit);
        }
        if(this.scale == TemperatureScale.kelvin && temperature.scale == TemperatureScale.celcius){
            result = this.number / (temperature.toKelvin().number);
            return new Temperature(result, TemperatureScale.kelvin);
        }
        if(this.scale == TemperatureScale.kelvin && temperature.scale == TemperatureScale.fahrenheit){
            result = this.number / (temperature.toKelvin().number);
            return new Temperature(result, TemperatureScale.kelvin);
        }
        if(this.scale == TemperatureScale.celcius && temperature.scale == TemperatureScale.fahrenheit){
            result = this.number / (temperature.toCelcius().number);
            return new Temperature(result, TemperatureScale.celcius);
        }
        if(this.scale == TemperatureScale.celcius && temperature.scale == TemperatureScale.kelvin){
            result = this.number / (temperature.toCelcius().number);
            return new Temperature(result, TemperatureScale.celcius);
        }
    }
    toKelvin(){
        let result;
        if(this.scale == TemperatureScale.celcius){
            result = this.number + 273.15;
            return new Temperature(result, TemperatureScale.kelvin);
        }
        if(this.scale == TemperatureScale.fahrenheit){
            result = (this.number - 32) * (5 / 9) + 273.15;
            return new Temperature(result, TemperatureScale.kelvin);
        }
        return this;
    }
    toCelcius(){
        let result;
        if(this.scale == TemperatureScale.kelvin){
            result = this.number - 273.15;
            return new Temperature(result, TemperatureScale.celcius);
        }
        if(this.scale == TemperatureScale.fahrenheit){
            result = (this.number - 32) * (5 / 9);
            return new Temperature(result, TemperatureScale.celcius);
        }
        return this;
    }
    toFahrenheit(){
        let result;
        if(this.scale == TemperatureScale.kelvin){
            result = (this.number - 273.15) * (9 / 5) + 32;
            return new Temperature(result, TemperatureScale.fahrenheit);
        }
        if(this.scale == TemperatureScale.celcius){
            result = (this.number * (9 / 5)) + 32;
            return new Temperature(result, TemperatureScale.fahrenheit);
        }
        return this;
    }
    toString(){
        let rounded = this.round();
        let str =  "" + rounded.number + "" + rounded.scale;
        return str;
    }

    round(){
        let num = parseFloat(Number.parseFloat(this.number).toFixed(2));
        return new Temperature(num, this.scale);
    }
}
module.exports = { Temperature, TemperatureScale};