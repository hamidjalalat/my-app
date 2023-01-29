// **************************************************
// Error!

// export class Person3 implements IPerson {

//     public constructor() { }

//     public id: string;
//     public age: number;
//     public active: boolean;
//     public fullName: string;
//     public emailAddress: string;

// }
// **************************************************

// **************************************************
// Error!

// import { IPerson } from './interfaces';

// export class Person3 implements IPerson {

//     public constructor() { }

//     public id: string;
//     public age: number;

// }
// **************************************************

// **************************************************
// Error!

// import { IPerson } from './interfaces';

// export class Person3 implements IPerson {

//     public constructor() { }

//     public id: string;
//     public age: number;
//     public active: boolean;
//     private fullName: string; // Error!
//     public emailAddress: string;

// }
// **************************************************

// **************************************************
import { IPerson } from './interfaces';

export class Person3 implements IPerson {

    public constructor() { }

    public id: string;
    public age: number;
    public active: boolean;
    public fullName: string;
    public emailAddress: string;

}
// **************************************************
