// **************************************************
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Mr. Dariush Tasdighi';
// }
// **************************************************

// **************************************************
// In TypeScript, The class names should be Pascal Case!
// Components in Angular are better to be ended with Component Word!
// Component: Full Name
// Class: FullNameComponent
// File Name: full-name.component.ts
// **************************************************

// **************************************************
// Module -> C# Class Library
// Component, Service,... -> C# Class
// **************************************************

// **************************************************
// Class Name: PascalCase
// File Name: lower-case
// Others: camelCase 
// **************************************************

// **************************************************
// @Component({
//   selector: 'app-root',
//   template: '<h1>Hello, World!</h1>'
// })
// class AppComponent {
// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: '<h1>Hello, World!</h1>'
// })
// class AppComponent {
// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: '<h1>Hello, World!</h1>'
// })
// export class AppComponent {
// }
// **************************************************

// **************************************************
// Note: The below problem (Root Element Necessary) has been solved in new versions!
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: '<h1>Hello, World!</h1><p>I am Dariush Tasdighi.</p>'
// })
// export class AppComponent {
// }
// **************************************************

// **************************************************
// Note: دقت داشته باشید که باید تگ‌ها را به درستی نوشته و بکارببرید
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: '<h1>Hello, World!</h1><br/><B>I am Dariush Tasdighi</b>'
// })
// export class AppComponent {
// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: '<h1>Hello, World!</h1><br/><b>I am Dariush Tasdighi</b>'
// })
// export class AppComponent {
// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: '<h1>Hello, World!</h1><br><b>I am Dariush Tasdighi</b>'
// })
// export class AppComponent {
// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: '
//       <h1>Hello, World!</h1>
//       <br>
//       <b>I am Dariush Tasdighi</b>'
// })
// export class AppComponent {
// }
// **************************************************

// **************************************************
// Learning Backtick
// Backtick -> ` -> The key is usually below of Esc key!
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//       <h1>Hello, World!</h1>
//       <br/>
//       <b>I am Dariush Tasdighi</b>`
// })
// export class AppComponent {
// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//       <h1>Hello, World!</h1>
//       <br/>
//       <b>I am Dariush Tasdighi</b>`,
// })
// export class AppComponent {
// }
// **************************************************
// **************************************************
// **************************************************



// **************************************************
// Learning Expression(s) and Initial Pipe(s)
// **************************************************

// **************************************************
// **************************************************
// **************************************************
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     <h1>{{5 + 2}}</h1>
//     <h1>{{5 - 2}}</h1>
//     <h1>{{5 * 2}}</h1>
//     <h1>{{5 / 2}}</h1>
//     <h1>{{'Dariush' + ' ' + 'Tasdighi'}}</h1>
//     <h1>{{'Dariush Tasdighi' | lowercase}}</h1>
//     <h1>{{'Dariush Tasdighi' | uppercase}}</h1>
//     `
// })
// export class AppComponent {
// }
// **************************************************

// **************************************************
// Note:
// Old Standard: Angular Team Recommendation: {{1 + 1}} is better than {{ 1 + 1 }}
// New Standard: Angular Team Recommendation: {{ 1 + 1 }} is better than {{1 + 1}}
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     <h1>{{ 5 + 2 }}</h1>
//     <h1>{{ 5 - 2 }}</h1>
//     <h1>{{ 5 * 2 }}</h1>
//     <h1>{{ 5 / 2 }}</h1>
//     <h1>{{ 'Dariush' + ' ' + 'Tasdighi' }}</h1>
//     <h1>{{ 'Dariush Tasdighi' | lowercase }}</h1>
//     <h1>{{ 'Dariush Tasdighi' | uppercase }}</h1>
//     `
// })
// export class AppComponent {
// }
// **************************************************

// **************************************************
// Initial Binding
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `<h1>Hello, {{ name }}!</h1>`,
// })
// export class AppComponent {

//   // name = `Dariush Tasdighi`;
//   // name: string = `Dariush Tasdighi`;
//   public name: string = `Dariush Tasdighi`;

// }
// **************************************************

// **************************************************
// Note: In TypeScript we do not have constructor overloading!
// می‌باشد constructor بهترین محل برای مقداردهی اولیه متغیرها
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `<h1>Hello, {{ name }}!</h1>`,
// })
// export class AppComponent {

//   public name: string;

//   public constructor() {

//     // Note: Wrong Usage!
//     // name = `Dariush Tasdighi`;

//     this.name = `Dariush Tasdighi`;

//   }

// }
// **************************************************

// **************************************************
// Note: 1) Constructor 2) Field(s) 3) Method(s) 
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `<h1>Hello, {{ name }}!</h1>`,
// })
// export class AppComponent {

//   public constructor() {

//     this.name = `Dariush Tasdighi`;

//   }

//   public name: string;

// }
// **************************************************

// **************************************************
// Note: [()] -> A Banana in the Box
// Note: (1) Add below code in app.module.ts file!
// import { FormsModule } from '@angular/forms';
// Note: (2) Add FormsModule in imports of  app.module.ts file!
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     <input type="text" [(ngModel)]="name">
//     <h1>{{ name }}</h1>
//     `,
// })
// export class AppComponent {

//   public name: string;

// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     <input type="text" [(ngModel)]="name">
//     <h1>{{ name }}</h1>
//     <h1>{{ name | lowercase }}</h1>
//     <h1>{{ name | uppercase }}</h1>
//     `,
// })
// export class AppComponent {

//   public name: string;

// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     <input type="text" [(ngModel)]="name">
//     <h1>{{ name }}</h1>
//     <h1>{{ name | lowercase }}</h1>
//     <h1>{{ name | uppercase }}</h1>
//     `,
// })
// export class AppComponent {

//   public constructor() {

//     this.name = `Dariush Tasdighi`;

//   }

//   public name: string;

// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     <input type="text" [(ngModel)]="name">
//     <br>
//     <input type="text" [(ngModel)]="name">
//     <br>
//     <h1>{{ name }}</h1>
//     <h1>{{ name | lowercase }}</h1>
//     <h1>{{ name | uppercase }}</h1>
//     `,
// })
// export class AppComponent {

//   public constructor() {

//     this.name = `Dariush Tasdighi`;

//   }

//   public name: string;

// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     <input type="text" [(ngModel)]="name">
//     <br>
//     <input type="text" [(ngModel)]="name">
//     <br>
//     <h1>{{ name }}</h1>
//     <h1>{{ name | lowercase }}</h1>
//     <h1>{{ name | uppercase }}</h1>
//     `,
//   styles: [
//     'h1 { color: blue; }',
//     'input { color: red; }',
//   ],
// })
// export class AppComponent {

//   public constructor() {

//     this.name = `Dariush Tasdighi`;

//   }

//   public name: string;

// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: 'app.component.html',
//   styleUrls: ['app.component.css',],
// })
// export class AppComponent {

//   public constructor() {

//     this.name = `Dariush Tasdighi`;

//   }

//   public name: string;

// }
// **************************************************

// **************************************************
// Note: For creating a new component -> Type in terminal -> ng g c FullName
// Note: g: generate
// Note: c: component
// **************************************************

// **************************************************
// Note: ./ is better!
// templateUrl: 'app.component.html',
// templateUrl: './app.component.html',
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css',],
// })
// export class AppComponent {

//   public constructor() {

//     this.name = `Dariush Tasdighi`;

//   }

//   public name: string;

// }
// **************************************************

// **************************************************
// Structural Directive(s): ngFor
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     <ul>
//       <li *ngFor="let item of fullNames">{{ item }}</li>
//     </ul>
//   `,
// })
// export class AppComponent {

//   public constructor() {

//     // **********
//     // Note: Error! Because fullNames is undefined!
//     // Note: Array in TypeScript is similar to C# ArrayList

//     this.fullNames.push(`Dariush Tasdighi`);
//     this.fullNames.push(`Ali Reza Alavi`);
//     this.fullNames.push(`Sara Ahmadi`);
//     // **********

//     // **********
//     // this.fullNames = [];

//     // this.fullNames.push(`Dariush Tasdighi`);
//     // this.fullNames.push(`Ali Reza Alavi`);
//     // this.fullNames.push(`Sara Ahmadi`);
//     // **********

//     // **********
//     // this.fullNames =
//     //   [`Dariush Tasdighi`, `Ali Reza Alavi`, `Sara Ahmadi`,];
//     // **********

//     // **********
//     // this.fullNames = [];

//     // for (let index: number = 1; index <= 9; index++)
//     //   this.fullNames.push(`Full Name ` + index);
//     // **********

//     // **********
//     // this.fullNames = [];

//     // for (let index: number = 1; index <= 9; index++)
//     // {
//     //   this.fullNames.push(`Full Name ` + index);
//     // }
//     // **********

//     // **********
//     // this.fullNames = [];

//     // for (let index: number = 1; index <= 9; index++) {
//     //   this.fullNames.push(`Full Name ` + index);
//     // }
//     // **********

//     // **********
//     // this.fullNames = [];

//     // for (let index: number = 1; index <= 9; index++) {

//     //   this.fullNames.push(`Full Name ` + index);

//     // }
//     // **********

//   }

//   public fullNames: string[];

// }
// **************************************************

// **************************************************
// Structural Directive(s): *ngIf
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     <input type="checkbox" [(ngModel)]="display" />
//     Display
//     <hr />
//     <ul *ngIf="display">
//       <li *ngFor="let item of fullNames">{{ item }}</li>
//     </ul>
//   `,
// })
// export class AppComponent {

//   public constructor() {

//     this.display = true;

//     this.fullNames =
//       [`Dariush Tasdighi`, `Ali Reza Alavi`, `Sara Ahmadi`,];

//   }

//   public display: boolean;
//   public fullNames: string[];

// }
// **************************************************

// **************************************************
// Note: In angular we do not have ngShow and ngHide! (Such as AngularJS)
// We have [hidden] attribute instead!
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     <input type="checkbox" [(ngModel)]="display" />
//     Display
//     <hr />
//     <ul [hidden]="!display">
//       <li *ngFor="let item of fullNames">{{ item }}</li>
//     </ul>
//   `,
// })
// export class AppComponent {

//   public constructor() {

//     this.display = true;

//     this.fullNames =
//       [`Dariush Tasdighi`, `Ali Reza Alavi`, `Sara Ahmadi`,];

//   }

//   public display: boolean;
//   public fullNames: string[];

// }
// **************************************************

// **************************************************
// Using External Class (Person)!
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     Age: {{ person.age }}
//     <br>
//     Full Name: {{ person.fullName }}
//   `,
// })
// export class AppComponent {

//   public constructor() {

//     this.person = new Person2();

//     this.person.age = 48;
//     this.person.fullName = `Dariush Tasdighi`;

//   }

//   public person: Person2;

// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// // import { Person2 } from 'models/Person2'; // Error!
// // import { Person2 } from '/models/Person2'; // Error!
// // import { Person2 } from './Models/Person2'; // Note: It is OK! Not Case Sensitive in Windows!
// // import { Person2 } from './models/person2.ts'; // Error!
// // import { Person2 } from './models/person2.js'; // Note: It is OK! ولی عرف نیست
// import { Person2 } from './models/person2'; // Note: But this is better!

// @Component({
//   selector: 'app-root',
//   template: `
//     Age: {{ person.age }}
//     <br>
//     Full Name: {{ person.fullName }}
//   `,
// })
// export class AppComponent {

//   public constructor() {

//     this.person = new Person2();

//     this.person.age = 48;
//     this.person.fullName = `Dariush Tasdighi`;

//   }

//   public person: Person2;

// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// import { Person3 } from './models/person3';
// import { IPerson } from './models/interfaces';

// @Component({
//   selector: 'app-root',
//   template: `
//     Age: {{ person.age }}
//     <br>
//     Full Name: {{ person.fullName }}
//   `,
// })
// export class AppComponent {

//   public constructor() {

//     // Note: Up Casting
//     this.person = new Person3();

//     this.person.age = 48;
//     this.person.fullName = 'Dariush Tasdighi';

//   }

//   public person: IPerson;

// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// import { Person4 } from './models/person4';
// import { IPerson } from './models/interfaces';

// @Component({
//   selector: 'app-root',
//   template: `
//     Age: {{ person.age }}
//     <br>
//     Full Name: {{ person.fullName }}
//   `,
// })
// export class AppComponent {

//   public constructor() {

//     this.person =
//       new Person4(`Dariush Tasdighi`, 48);

//   }

//   public person: IPerson;

// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// import * as Models from './models/Person';
// import * as Interfaces from './interfaces/Person';

// @Component({
//   selector: 'app-root',
//   template: `
//     Id: {{ person.id }}
//     <br>
//     Full Name: {{ person.fullName }}
//   `,
// })
// export class AppComponent {

//   public constructor() {

//     this.person =
//       new Models.Person('10', `Dariush Tasdighi`);

//   }

//   public person: Interfaces.Person;

// }
// **************************************************



// **************************************************
// Learning Events
// https://www.positronx.io/useful-list-of-angular-7-event-types-for-event-binding/
// **************************************************

// **************************************************
// Note: type="button"

// <input type="submit" ...
// <input type="reset" ...
// <input type="button" ...

// HTML 5

// <button type="submit" ...
// <button type="reset" ...
// <button type="button" ...

// Note: Default: type="submit"
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template:
//     `
//     <button type="button" (click)="doSomething()">Click Me!</button>
//     `,
// })
// export class AppComponent {

//   public constructor() { }

//   // private doSomething() {
//   //   alert('Hello, World!');
//   // }

//   // doSomething() {
//   //   alert('Hello, World!');
//   // }

//   // public doSomething() {
//   //   alert('Hello, World!');
//   // }

//   public doSomething() {

//     alert('Hello, World!');

//   }

// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// import * as Models from './models/Person';
// import * as Interfaces from './interfaces/Person';

// @Component({
//   selector: 'app-root',
//   template: `
//     <ul>
//         <li *ngFor="let item of people">
//             Id: {{ item.id }} - Full Name: {{ item.fullName }}
//         </li>
//     </ul>
//     `,
// })
// export class AppComponent {

//   public constructor() {

//     this.people =
//       [
//         new Models.Person('1', 'Full Name (1)'),
//         new Models.Person('2', 'Full Name (2)'),
//         new Models.Person('3', 'Full Name (3)'),
//         new Models.Person('4', 'Full Name (4)'),
//         new Models.Person('5', 'Full Name (5)'),
//       ];

//   }

//   // public people: Models.Person[];
//   public people: Interfaces.Person[];

// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// import * as Models from './models/Person';
// import * as Interfaces from './interfaces/Person';

// @Component({
//   selector: 'app-root',
//   template: `
//     <ul>
//         <li *ngFor="let item of people">
//           <button type="button" (click)="details(item)">Details</button>
//           Id: {{ item.id }} - Full Name: {{ item.fullName }}
//         </li>
//     </ul>
//     `,
// })
// export class AppComponent {

//   public constructor() {

//     // Note: Important!
//     this.people = [];

//     for (let index: number = 1; index <= 9; index++) {

//       let person: Models.Person =
//         new Models.Person(index.toString(), 'Full Name (' + index + ')');

//       this.people.push(person);

//     }

//   }

//   public people: Interfaces.Person[];

//   public details(person: Interfaces.Person): void {

//     let message: string =
//       'Id: ' + person.id + '\n' +
//       'Full Name: ' + person.fullName + '\n' +
//       'Email Address: ' + person.emailAddress
//       ;

//     alert(message);

//   }

// }
// **************************************************

// **************************************************
// Ready for a good practice!
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     X: <input type="text" [(ngModel)]="x">
//     <br>
//     Y: <input type="text" [(ngModel)]="y">
//     <br>
//     Result: {{ x * y }}
//     <br>
//     Result: {{ getResult1() }}
//     <br>
//     Result: {{ getResult2() }}
//     <br>
//     Result: {{ getResult3() }}
//     `,
// })
// export class AppComponent {

//   public constructor() {

//     this.x = 4;
//     this.y = 5;

//   }

//   public x: number;
//   public y: number;

//   // getResult1() {
//   //   return (this.x * this.y);
//   // }

//   public getResult1(): number {

//     let result: number = this.x * this.y;

//     return result;

//   }

//   public getResult2(): number {

//     let result: number;

//     // if (this.x > 5)
//     //   result = this.x * 2;
//     // else
//     //   result = this.y * 3;

//     if (this.x > 5) {

//       result = this.x * 2;

//     }
//     else {

//       result = this.y * 3;

//     }

//     return result;

//   }

//   public getResult3(): number {

//     let result: number;

//     if (this.x > 5) {

//       result = this.getResult1() * 2;

//     }
//     else {

//       result = this.getResult1() * 3;

//     }

//     return result;

//   }

// }
// **************************************************
// **************************************************
// **************************************************

// **************************************************
// یک مثال کاربردی = سبد خرید کالا
// **************************************************

// **************************************************
// **************************************************
// **************************************************
// import { Component } from '@angular/core';

// import * as Models from './models/item1';
// import * as Interfaces from './interfaces/item1';

// @Component({
//   selector: 'app-root',
//   template: `
//     <div class="row">
//       <div class="col-12 table-responsive">
//         <table class="table table-bordered table-striped table-hover table-sm table-dark">
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//             <th>Count</th>
//             <th>Functions</th>
//             <th>Sub Total</th>
//           </tr>

//           <tr *ngFor="let item of items">
//             <td>{{ item.name }}</td>
//             <td>{{ item.price }}</td>
//             <td>{{ item.count }}</td>
//             <td>
//               <button type="button" (click)="plus(item)" class="btn btn-primary">+</button>
//               &nbsp;
//               <button type="button" (click)="minus(item)" class="btn btn-danger">-</button>
//             </td>
//             <td>{{ item.price * item.count }}</td>
//           </tr>
//         </table>
//       </div>
//     </div>
//     `,
// })
// export class AppComponent {

//   public constructor() {

//     this.items = [
//       new Models.Item('Product (1)', 10, 1),
//       new Models.Item('Product (2)', 20, 1),
//       new Models.Item('Product (3)', 30, 1),
//     ];

//   }

//   public items: Interfaces.Item[];

//   public plus(item: Interfaces.Item): void {

//     if (item.count < 10) {

//       item.count++;

//     }

//   }

//   public minus(item: Interfaces.Item): void {

//     if (item.count > 0) {

//       item.count--;

//     }

//   }

// }
// **************************************************

// **************************************************
// Note: Predefined Variables in NgFor: index, odd, even, first, last
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// import * as Models from './models/item1';
// import * as Interfaces from './interfaces/item1';

// @Component({
//   selector: 'app-root',
//   template: `
//     <div class="row">
//       <div class="col-12 table-responsive">
//         <table class="table table-bordered table-striped table-hover table-sm table-dark">
//           <tr>
//             <th>#</th>
//             <th>Name</th>
//             <th>Price</th>
//             <th>Count</th>
//             <th>Functions</th>
//             <th>Sub Total</th>
//           </tr>

//           <tr *ngFor="let item of items; let rowIndex = index;">
//             <td>{{ rowIndex + 1 }}</td>
//             <td>{{ item.name }}</td>
//             <td>{{ item.price }}</td>
//             <td>{{ item.count }}</td>
//             <td>
//               <button type="button" (click)="plus(item)" class="btn btn-primary">+</button>
//               &nbsp;
//               <button type="button" (click)="minus(item)" class="btn btn-danger">-</button>
//             </td>
//             <td>{{ item.price * item.count }}</td>
//           </tr>
//         </table>
//       </div>
//     </div>
//     `,
// })
// export class AppComponent {

//   public constructor() {

//     this.items = [
//       new Models.Item('Product (1)', 10, 1),
//       new Models.Item('Product (2)', 20, 1),
//       new Models.Item('Product (3)', 30, 1),
//     ];

//   }

//   public items: Interfaces.Item[];

//   public plus(item: Interfaces.Item): void {

//     if (item.count < 10) {

//       item.count++;

//     }

//   }

//   public minus(item: Interfaces.Item): void {

//     if (item.count > 0) {

//       item.count--;

//     }

//   }

// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// import * as Models from './models/item1';
// import * as Interfaces from './interfaces/item1';

// @Component({
//   selector: 'app-root',
//   template: `
//     <div class="row">
//       <div class="col-12 table-responsive">
//         <table class="table table-bordered table-striped table-hover table-sm table-dark">
//           <tr>
//             <th>#</th>
//             <th>Name</th>
//             <th>Price</th>
//             <th>Count</th>
//             <th>Functions</th>
//             <th>Sub Total</th>
//           </tr>

//           <tr *ngFor="let item of items; let rowIndex = index;">
//             <td>{{ rowIndex + 1 }}</td>
//             <td>{{ item.name }}</td>
//             <td>{{ item.price }}</td>
//             <td>{{ item.count }}</td>
//             <td>
//               <button type="button" (click)="plus(item)" class="btn btn-primary">+</button>
//               &nbsp;
//               <button type="button" (click)="minus(item)" class="btn btn-danger">-</button>
//             </td>
//             <td>{{ getSubTotal(item) }}</td>
//           </tr>
//         </table>
//       </div>
//     </div>
//     `,
// })
// export class AppComponent {

//   public constructor() {

//     this.items = [
//       new Models.Item('Product (1)', 10, 1),
//       new Models.Item('Product (2)', 20, 1),
//       new Models.Item('Product (3)', 30, 1),
//     ];

//   }

//   public items: Interfaces.Item[];

//   public plus(item: Interfaces.Item): void {

//     if (item.count < 10) {

//       item.count++;

//     }

//   }

//   public minus(item: Interfaces.Item): void {

//     if (item.count > 0) {

//       item.count--;

//     }

//   }

//   public getSubTotal(item: Interfaces.Item): number {

//     let result: number =
//       item.count * item.price;

//     if (item.count >= 6) {

//       result *= 0.95;

//     }

//     return result;

//   }

// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// import * as Models from './models/item1';
// import * as Interfaces from './interfaces/item1';

// @Component({
//   selector: 'app-root',
//   template: `
//     <div class="row">
//       <div class="col-12 table-responsive">
//         <table class="table table-bordered table-striped table-hover table-sm table-dark">
//           <tr>
//             <th>#</th>
//             <th>Name</th>
//             <th>Price</th>
//             <th>Count</th>
//             <th>Functions</th>
//             <th>Sub Total</th>
//           </tr>

//           <tr *ngFor="let item of items; let rowIndex = index;">
//             <td>{{ rowIndex + 1 }}</td>
//             <td>{{ item.name }}</td>
//             <td>{{ item.price }}</td>
//             <td>{{ item.count }}</td>
//             <td>
//               <button type="button" (click)="plus(item)" class="btn btn-primary">+</button>
//               &nbsp;
//               <button type="button" (click)="minus(item)" class="btn btn-danger">-</button>
//             </td>
//             <td>{{ getSubTotal(item) }}</td>
//           </tr>

//           <tr>
//             <td colspan="5">Total</td>
//             <td>{{ getTotal() }}</td>
//           </tr>      

//         </table>
//       </div>
//     </div>
//     `,
// })
// export class AppComponent {

//   public constructor() {

//     this.items = [
//       new Models.Item('Product (1)', 10, 1),
//       new Models.Item('Product (2)', 20, 1),
//       new Models.Item('Product (3)', 30, 1),
//     ];

//   }

//   public items: Interfaces.Item[];

//   public plus(item: Interfaces.Item): void {

//     if (item.count < 10) {

//       item.count++;

//     }

//   }

//   public minus(item: Interfaces.Item): void {

//     if (item.count > 0) {

//       item.count--;

//     }

//   }

//   public getSubTotal(item: Interfaces.Item): number {

//     let result: number =
//       item.count * item.price;

//     if (item.count >= 6) {

//       result *= 0.95;

//     }

//     return result;

//   }

//   public getTotal(): number {

//     let total: number = 0;

//     // **************************************************
//     // for (let index: number = 0; index < this.items.length; index++) {

//     //   let currentItem: Interfaces.Item = this.items[index];

//     //   total +=
//     //     currentItem.count * currentItem.price;

//     // }
//     // **************************************************

//     // **************************************************
//     // for (let index: number = 0; index < this.items.length; index++) {

//     //   let currentItem: Interfaces.Item = this.items[index];

//     //   total +=
//     //     currentItem.count * currentItem.price;

//     //   if (currentItem.count > 6) {

//     //     total *= 0.96;

//     //   }

//     // }
//     // **************************************************

//     // **************************************************
//     for (let index: number = 0; index < this.items.length; index++) {

//       let currentItem: Interfaces.Item = this.items[index];

//       total +=
//         this.getSubTotal(currentItem);

//     }
//     // **************************************************

//     return total;

//   }

// }
// **************************************************

// **************************************************
import { Component } from '@angular/core';

import * as Models from './models/item2';
import * as Interfaces from './interfaces/item2';

@Component({
  selector: 'app-root',
  template: `
    <div class="row">
      <div class="col-12 table-responsive">
        <table class="table table-bordered table-striped table-hover table-sm table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Count</th>
            <th>Functions</th>
            <th>Sub Total</th>
          </tr>

          <tr *ngFor="let item of items; let rowIndex = index;">
            <td>{{ rowIndex + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.count }}</td>
            <td>
              <button type="button" (click)="item.plus()" class="btn btn-primary">+</button>
              &nbsp;
              <button type="button" (click)="item.minus()" class="btn btn-danger">-</button>
            </td>
            <td>{{ item.getSubTotal() }}</td>
          </tr>

          <tr>
            <td colspan="5">Total</td>
            <td>{{ getTotal() }}</td>
          </tr>      

        </table>
      </div>
    </div>
    `,
})
export class AppComponent {

  public constructor() {

    this.items = [
      new Models.Item('Product (1)', 10, 1),
      new Models.Item('Product (2)', 20, 1),
      new Models.Item('Product (3)', 30, 1),
    ];

  }

  public items: Interfaces.Item[];

  public getTotal(): number {

    let total: number = 0;

    for (let index: number = 0; index < this.items.length; index++) {

      let currentItem: Interfaces.Item = this.items[index];

      total +=
        currentItem.getSubTotal();

    }

    return total;

  }

}
// **************************************************
// **************************************************
// **************************************************
