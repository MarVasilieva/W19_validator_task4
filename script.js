class Validator {
    constructor() {
    }
    isEmail(str) {
        return ((str.indexOf('@') !== -1) && (str.indexOf('.') !== -1))
    }
    isDomain(str) {
        return ((str.indexOf('.com') !== -1) || (str.indexOf('.net') !== -1))
    }
    isDate(str) {
        let date = str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
        return date === null ? false : true;
    }
    isPhone(str) {
        let phonenumber = str.match(/\+?[0-9\s\-\(\)]+/);
        return phonenumber === null ? false : true;
    }

}
let validator = new Validator();
console.log(validator.isEmail('marina_vasilieva@list.ru'));
console.log(validator.isDomain('zaycev.net'));
console.log(validator.isDate('22.01.2023'));
console.log(validator.isPhone('+38 (096) 23-14-014'));

class Validatorstatic {
     static isEmail(str) {
        return ((str.indexOf('@') !== -1) && (str.indexOf('.') !== -1))
    }
     static isDomain(str) {
        return ((str.indexOf('.com') !== -1) || (str.indexOf('.net') !== -1))
    }
    static isDate(str) {
        let date = str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
        return date === null ? false : true;
    }
    static isPhone(str) {
        let phonenumber = str.match(/\+?[0-9\s\-\(\)]+/);
        return phonenumber === null ? false : true;
    }

}

console.log(Validatorstatic.isEmail('marina_vasilieva@list.ru'));
console.log(Validatorstatic.isDomain('zaycev.net'));
console.log(Validatorstatic.isDate('22.01.2023'));
console.log(Validatorstatic.isPhone('+38 (096) 23-14-014'));