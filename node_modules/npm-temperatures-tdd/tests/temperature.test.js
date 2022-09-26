//const { } = require("node:test");
const { describe, expect, it } = require("@jest/globals");
const { Temperature, TemperatureScale } = require("../src/Temperatures");

describe('temperature', () => {
    it('should throw Error with message \'Kelvin cant be 0 or less\' when 0K', () => {
        expect(() => {new Temperature(0, TemperatureScale.kelvin);}).toThrowError();
    });
    it('should throw Error with message \'The first arg should be a number\' when number arg is \'r\'', () => {
        expect(() => {new Temperature("r", TemperatureScale.kelvin);}).toThrowError();
    });
    it('should throw Error with message \'scale arg has to be a TemperatureScale\' when scale arg is \'Hola\'', () => {
        expect(() => {new Temperature(5, 'Hola');}).toThrowError();
    });
});

describe(('Add'), () => {
    it('should be 9C when 6C + 3C', () => {
        const t1 = new Temperature(6, TemperatureScale.celcius);
        const t2 = new Temperature(3, TemperatureScale.celcius);
        expect(t1.Add(t2)).toEqual(new Temperature(9, TemperatureScale.celcius));
    });
    it('should be 8K when 5K + 3K', () => {
        const t1 = new Temperature(5, TemperatureScale.kelvin);
        const t2 = new Temperature(3, TemperatureScale.kelvin);
        expect(t1.Add(t2)).toEqual(new Temperature(8, TemperatureScale.kelvin));
    });
    it('should be 11F when 4F + 7F', () => {
        const t1 = new Temperature(4, TemperatureScale.fahrenheit);
        const t2 = new Temperature(7, TemperatureScale.fahrenheit);
        expect(t1.Add(t2)).toEqual(new Temperature(11, TemperatureScale.fahrenheit));
    });
    it('should be 58.2F when is 10F + 9C', () => {
        const t1 = new Temperature(10, TemperatureScale.fahrenheit);
        const t2 = new Temperature(9, TemperatureScale.celcius);
        expect(t1.Add(t2).round()).toEqual(new Temperature(58.2, TemperatureScale.fahrenheit));
    });
    it('should be -430.67F when 20F + 5K', () => {
        const t1 = new Temperature(20, TemperatureScale.fahrenheit);
        const t2 = new Temperature(5, TemperatureScale.kelvin);
        expect(t1.Add(t2).round()).toEqual(new Temperature(-430.67, TemperatureScale.fahrenheit));
    });
    it('should be 286.15K when is 10K + 3C', () => {
        const t1 = new Temperature(10, TemperatureScale.kelvin);
        const t2 = new Temperature(3, TemperatureScale.celcius);
        expect(t1.Add(t2).round()).toEqual(new Temperature(286.15, TemperatureScale.kelvin));
    });
    it('should be 299.82K when is 40K + 8F', () => {
        const t1 = new Temperature(40, TemperatureScale.kelvin);
        const t2 = new Temperature(8, TemperatureScale.fahrenheit);
        expect(t1.Add(t2).round()).toEqual(new Temperature(299.82, TemperatureScale.kelvin));
    });
    it('shoul be -8.33C when is 5C + 8F', () => {
        const t1 = new Temperature(5, TemperatureScale.celcius);
        const t2 = new Temperature(8, TemperatureScale.fahrenheit);
        expect(t1.Add(t2).round()).toEqual(new Temperature(-8.33, TemperatureScale.celcius));
    });
    it('should be -113.15C when is 80C + 80K', () => {
        const t1 = new Temperature(80, TemperatureScale.celcius);
        const t2 = new Temperature(80, TemperatureScale.kelvin);
        expect(t1.Add(t2).round()).toEqual(new Temperature(-113.15, TemperatureScale.celcius));
    });
});
describe(('Substract'), () => {
    it('should be 3C when 6C - 3C', () => {
        const t1 = new Temperature(6, TemperatureScale.celcius);
        const t2 = new Temperature(3, TemperatureScale.celcius);
        expect(t1.Substract(t2)).toEqual(new Temperature(3, TemperatureScale.celcius));
    });
    it('should be 2K when 5K - 3K', () => {
        const t1 = new Temperature(5, TemperatureScale.kelvin);
        const t2 = new Temperature(3, TemperatureScale.kelvin);
        expect(t1.Substract(t2)).toEqual(new Temperature(2, TemperatureScale.kelvin));
    });
    it('should be 11F when 4F - 7F', () => {
        const t1 = new Temperature(4, TemperatureScale.fahrenheit);
        const t2 = new Temperature(7, TemperatureScale.fahrenheit);
        expect(t1.Substract(t2)).toEqual(new Temperature(-3, TemperatureScale.fahrenheit));
    });
    it('should throw Error with message \'Kelvin cant be 0 or less\' when 5K - 8K', () => {
        const t1 = new Temperature(5, TemperatureScale.kelvin);
        const t2 = new Temperature(8, TemperatureScale.kelvin);
        expect(() => {t1.Substract(t2);}).toThrowError();
    });
    it('should be -38.2F when is 10F - 9C', () => {
        const t1 = new Temperature(10, TemperatureScale.fahrenheit);
        const t2 = new Temperature(9, TemperatureScale.celcius);
        expect(t1.Substract(t2).round()).toEqual(new Temperature(-38.2, TemperatureScale.fahrenheit));
    });
    it('should be 470.67F when 20F - 5K', () => {
        const t1 = new Temperature(20, TemperatureScale.fahrenheit);
        const t2 = new Temperature(5, TemperatureScale.kelvin);
        expect(t1.Substract(t2).round()).toEqual(new Temperature(470.67, TemperatureScale.fahrenheit));
    });
    it('should throw Error with message \'Kelvin cant be 0 or less\' when is 10K - 3C', () => {
        const t1 = new Temperature(10, TemperatureScale.kelvin);
        const t2 = new Temperature(3, TemperatureScale.celcius);
        expect(() => {t1.Substract(t2).round();}).toThrowError();
    });
    it('should throw Error with message \'Kelvin cant be 0 or less\' when is 40K - 8F', () => {
        const t1 = new Temperature(40, TemperatureScale.kelvin);
        const t2 = new Temperature(8, TemperatureScale.fahrenheit);
        expect(() => {t1.Substract(t2).round();}).toThrowError();
    });
    it('shoul be 18.33C when is 5C - 8F', () => {
        const t1 = new Temperature(5, TemperatureScale.celcius);
        const t2 = new Temperature(8, TemperatureScale.fahrenheit);
        expect(t1.Substract(t2).round()).toEqual(new Temperature(18.33, TemperatureScale.celcius));
    });
    it('should be 273.15C when is 80C - 80K', () => {
        const t1 = new Temperature(80, TemperatureScale.celcius);
        const t2 = new Temperature(80, TemperatureScale.kelvin);
        expect(t1.Substract(t2).round()).toEqual(new Temperature(273.15, TemperatureScale.celcius));
    });
});

describe('MultiplyBy', () => {
    it('should be 18C when 6C * 3C', () => {
        const t1 = new Temperature(6, TemperatureScale.celcius);
        const t2 = new Temperature(3, TemperatureScale.celcius);
        expect(t1.multiplyBy(t2)).toEqual(new Temperature(18, TemperatureScale.celcius));
    });
    it('should be 15K when 5K * 3K', () => {
        const t1 = new Temperature(5, TemperatureScale.kelvin);
        const t2 = new Temperature(3, TemperatureScale.kelvin);
        expect(t1.multiplyBy(t2)).toEqual(new Temperature(15, TemperatureScale.kelvin));
    });
    it('should be 28F when 4F * 7F', () => {
        const t1 = new Temperature(4, TemperatureScale.fahrenheit);
        const t2 = new Temperature(7, TemperatureScale.fahrenheit);
        expect(t1.multiplyBy(t2)).toEqual(new Temperature(28, TemperatureScale.fahrenheit));
    });
    it('should be 482F when is 10F * 9C', () => {
        const t1 = new Temperature(10, TemperatureScale.fahrenheit);
        const t2 = new Temperature(9, TemperatureScale.celcius);
        expect(t1.multiplyBy(t2).round()).toEqual(new Temperature(482, TemperatureScale.fahrenheit));
    });
    it('should be -901.34F when 2F * 5K', () => {
        const t1 = new Temperature(2, TemperatureScale.fahrenheit);
        const t2 = new Temperature(5, TemperatureScale.kelvin);
        expect(t1.multiplyBy(t2).round()).toEqual(new Temperature(-901.34, TemperatureScale.fahrenheit));
    });
    it('should be 828.45K when is 3K * 3C', () => {
        const t1 = new Temperature(3, TemperatureScale.kelvin);
        const t2 = new Temperature(3, TemperatureScale.celcius);
        expect(t1.multiplyBy(t2).round()).toEqual(new Temperature(828.45, TemperatureScale.kelvin));
    });
    it('should be 519.63K when is 2K * 8F', () => {
        const t1 = new Temperature(2, TemperatureScale.kelvin);
        const t2 = new Temperature(8, TemperatureScale.fahrenheit);
        expect(t1.multiplyBy(t2).round()).toEqual(new Temperature(519.63, TemperatureScale.kelvin));

    });
    it('shoul be 18.33C when is 5C * 8F', () => {
        const t1 = new Temperature(5, TemperatureScale.celcius);
        const t2 = new Temperature(8, TemperatureScale.fahrenheit);
        expect(t1.multiplyBy(t2).round()).toEqual(new Temperature(-66.67, TemperatureScale.celcius));
    });
    it('should be -15452C when is 80C * 80K', () => {
        const t1 = new Temperature(80, TemperatureScale.celcius);
        const t2 = new Temperature(80, TemperatureScale.kelvin);
        expect(t1.multiplyBy(t2).round()).toEqual(new Temperature(-15452, TemperatureScale.celcius));
    });
});
describe('devideBy', () => {
    it('should be 5K when 15K / 3K', () => {
        const t1 = new Temperature(15, TemperatureScale.kelvin);
        const t2 = new Temperature(3, TemperatureScale.kelvin);
        expect(t1.divideBy(t2).round()).toEqual(new Temperature(5, TemperatureScale.kelvin));
    });
    it('should be 6C when 18C / 3C', () => {
        const t1 = new Temperature(18, TemperatureScale.celcius);
        const t2 = new Temperature(3, TemperatureScale.celcius);
        expect(t1.divideBy(t2).round()).toEqual(new Temperature(6, TemperatureScale.celcius));
    });
    it('should be 7F when 21F / 3F', () => {
        const t1 = new Temperature(21, TemperatureScale.fahrenheit);
        const t2 = new Temperature(3, TemperatureScale.fahrenheit);
        expect(t1.divideBy(t2).round()).toEqual(new Temperature(7, TemperatureScale.fahrenheit));
    });
    it('should be 1.48F when is 50F / 1C', () => {
        const t1 = new Temperature(50, TemperatureScale.fahrenheit);
        const t2 = new Temperature(1, TemperatureScale.celcius);
        expect(t1.divideBy(t2).round()).toEqual(new Temperature(1.48, TemperatureScale.fahrenheit));
    });
    it('should be -1.79F when 500F / 100K', () => {
        const t1 = new Temperature(500, TemperatureScale.fahrenheit);
        const t2 = new Temperature(100, TemperatureScale.kelvin);
        expect(t1.divideBy(t2).round()).toEqual(new Temperature(-1.79, TemperatureScale.fahrenheit));
    });
    it('should be 1.09K when is 300K / 1C', () => {
        const t1 = new Temperature(300, TemperatureScale.kelvin);
        const t2 = new Temperature(1, TemperatureScale.celcius);
        expect(t1.divideBy(t2).round()).toEqual(new Temperature(1.09, TemperatureScale.kelvin));
    });
    it('should be 1.17K when is 300K / 1F', () => {
        const t1 = new Temperature(300, TemperatureScale.kelvin);
        const t2 = new Temperature(1, TemperatureScale.fahrenheit);
        expect(t1.divideBy(t2).round()).toEqual(new Temperature(1.17, TemperatureScale.kelvin));

    });
    it('shoul be 1.17C when is 300C / 1F', () => {
        const t1 = new Temperature(78, TemperatureScale.celcius);
        const t2 = new Temperature(3, TemperatureScale.fahrenheit);
        expect(t1.divideBy(t2).round()).toEqual(new Temperature(-4.84, TemperatureScale.celcius));
    });
    it('should be -0.01C when is 2C / 2K', () => {
        const t1 = new Temperature(2, TemperatureScale.celcius);
        const t2 = new Temperature(2, TemperatureScale.kelvin);
        expect(t1.divideBy(t2).round()).toEqual(new Temperature(-0.01, TemperatureScale.celcius));
    });
});
describe('toKelvin', () => {
    it('should be 279.15K when is 6C', () => {
        const t1 = new Temperature(6, TemperatureScale.celcius);
        expect(t1.toKelvin().round()).toEqual(new Temperature(279.15, TemperatureScale.kelvin));
    });
    it('should be 258.15K when is 5F', () => {
        const t1 = new Temperature(5, TemperatureScale.fahrenheit);
        expect(t1.toKelvin().round()).toEqual(new Temperature(258.15, TemperatureScale.kelvin));
    });
    it('should be 5K when is 5K', () => {
        const t1 = new Temperature(5, TemperatureScale.kelvin);
        expect(t1.toKelvin().round()).toEqual(t1.round());
    });
});
describe('toCelcius', () => {
    it('should be -263.15C when is 10K', () => {
        const t1 = new Temperature(10, TemperatureScale.kelvin);
        expect(t1.toCelcius().round()).toEqual(new Temperature(-263.15, TemperatureScale.celcius));
    });
    it('should be -13.89C when is 7F', () => {
        const t1 = new Temperature(7, TemperatureScale.fahrenheit);
        expect(t1.toCelcius().round()).toEqual(new Temperature(-13.89, TemperatureScale.celcius));
    });
    it('should be 10C when is 10C', () => {
        const t1 = new Temperature(10, TemperatureScale.celcius);
        expect(t1.toCelcius().round()).toEqual(t1.round());
    });
});
describe('toFahrenheit', () => {
    it('should be -447.07F when is 7K', () => {
        const t1 = new Temperature(7, TemperatureScale.kelvin);
        expect(t1.toFahrenheit().round()).toEqual(new Temperature(-447.07, TemperatureScale.fahrenheit));
    });
    it('should 48.20F when is 9C', () => {
        const t1 = new Temperature(9, TemperatureScale.celcius);
        expect(t1.toFahrenheit().round()).toEqual(new Temperature(48.20, TemperatureScale.fahrenheit));
    });
    it('should be 23F when is 23F', () => {
        const t1 = new Temperature(23, TemperatureScale.fahrenheit);
        expect(t1.toFahrenheit().round()).toEqual(t1.round());
    });
});
describe('toString', () => {
    it('should be \'34.3C\' when is 34.30C', () => {
        const t1 = new Temperature(34.3, TemperatureScale.celcius);
        expect(t1.toString()).toEqual("34.3C");
    });
});