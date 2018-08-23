"use strict";
var Entry = /** @class */ (function () {
    function Entry(firstName, lastName, day, month, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(month, day, year);
    }
    return Entry;
}());
var names = ['Brandon', 'Micheal', 'Jontee', 'Jonas', 'John'
];
function sortArray(array) {
    return array.sort();
}
var MyBirthday = /** @class */ (function () {
    function MyBirthday() {
    }
    MyBirthday.prototype.myDecorator = function (month, day, year) {
        console.log(" " + month + "  " + day + ", " + year);
        return month + " " + day + " " + year;
    };
    return MyBirthday;
}());
var run = new MyBirthday();
console.log(run.myDecorator('July', 12, 1993));
console.log('Array before sorting: ' + names);
console.log('Array after sorting: ' + sortArray(names));
//"experimentalDecorators": true        /* Enables experimental support for ES7 decorators. */ I get error when attempting to on unc-comment in tsconfig.json
