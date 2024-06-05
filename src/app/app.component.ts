import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Hola mundo angular 2024 desde componente...!';

  users: string[] = ['Elio', 'Doris', 'Sebastian', 'Santiago', 'Moka'];

  visible: boolean = false;

  setVisible(): void{
    this.visible = this.visible? false: true;
    console.log('Hemos hecho click en setVisible');
  }
}