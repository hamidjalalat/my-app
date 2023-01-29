import * as Interfaces from '../interfaces/user';

export class User implements Interfaces.User {

    public constructor() { }

    public id: number;
    public name: string;
    public email: string;
    public username: string;

}
