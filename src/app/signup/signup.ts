import { Component, signal } from '@angular/core';
import { MainService } from '../../services/main.services';

@Component({
  selector: 'app-signup',
  imports: [],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  protected destinations = signal<string[]>([]);

  constructor() {
    MainService.getAllDestinations()
      .then(rsp => this.destinations.set(rsp.data))
  }
}
