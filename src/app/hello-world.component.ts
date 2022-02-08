import { Component } from '@angular/core';

@Component({
    selector: 'app-hello-world', //css selector o render component
    template: '<h1>{{title}}</h1>', //html file
    styles: [`
    h1 {
        color: blue;
    }`]
})

export class HelloWorldComponent {
    title = 'Hello World!';
}