import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent, CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  visible: boolean = false;
  counter: number = 0;
  
  ngOnInit(): void {
    this.counter = parseInt(sessionStorage.getItem('counter')!) || 0;
  } 

  title: string = 'Hola mundo angular 2024 desde componente...!';
  subTitle: string = 'Contador con estado de session';
  users: string[] = ['Elio', 'Doris', 'Sebastian', 'Santiago', 'Moka'];
  
  setVisible(): void{
    this.visible = this.visible? false: true;
    console.log('Hemos hecho click en setVisible');
  }

  setCounter(counter: number): void{
    this.counter = counter;
  }
}