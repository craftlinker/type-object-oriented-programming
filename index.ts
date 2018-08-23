interface Person {
    firstName: string;
    lastName?: string;
    birthday?: Date; 
}

class Entry implements Person {
    firstName: string;
    lastName?: string;
    birthday?: Date; 

    constructor(firstName: string, lastName: string, day: number, month: number, year: number ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date (month, day, year)
    } 
  
      
    
}
let names = [ 'Brandon', 'Micheal', 'Jontee', 'Jonas', 'John'

];

function sortArray<B>(array: B[]): B[] {
    return array.sort();
}
  

class MyBirthday {
	
	myDecorator(month: string, day: number, year:number) {
        console.log(` ${month}  ${day}, ${year}`);
        return `${month} ${day} ${year}`;
	}
}

const run = new MyBirthday();
console.log(run.myDecorator('July', 12, 1993))

   
 


console.log('Array before sorting: ' + names);
console.log('Array after sorting: ' + sortArray(names));
    //"experimentalDecorators": true        /* Enables experimental support for ES7 decorators. */ I get error when attempting to on unc-comment in tsconfig.json
