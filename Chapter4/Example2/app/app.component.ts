import { Component } from '@angular/core';

@Component({
    selector: 'div.container.my-app',
    template: `
    <div class="container text-center">
      <div class="row">
        <div class="col-md-12">
          <div class="page-header">
            <h1>{{title}}</h1>
          </div>
          <p class="lead">{{description}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6" my-child-comp myText="A child component goes here"></div>        
        <div class="col-md-6" my-child-comp myText="Another child component goes here"></div>         
      </div>          
    </div>    
    `
})
export class AppComponent { 
  title: string;
  description: string;

  constructor(){
    this.title = 'Mastering Angular 2 - Chapter 4, Example 2';
    this.description = 'This is an example for an Angular 2 component with an element tag and clas selector and a child component that uses an element attribute selector.';
  }
}
