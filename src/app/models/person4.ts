import { IPerson } from './interfaces';

export class Person4 implements IPerson {

    // **************************************************
    // Note: We do not have Constructor Overloading in TypeScript!

    // public constructor() { }
    // **************************************************

    public constructor(fullName: string, age: number) {

        this.age = age;
        this.fullName = fullName;

    }

    public id: string;
    public age: number;
    public active: boolean;
    public fullName: string;
    public emailAddress: string;

}