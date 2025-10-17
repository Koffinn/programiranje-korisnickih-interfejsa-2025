import { Component, signal } from '@angular/core';
import { MainService } from '../../services/main.services';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { first } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  protected destinations = signal<string[]>([]);
  protected form: FormGroup

  constructor(protected router: Router, private formBuilder: FormBuilder) {
    MainService.getAllDestinations()
      .then(rsp => this.destinations.set(rsp.data))

    this.form = this.formBuilder.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      phone: ['',[Validators.required]],
      password: ['',[Validators.required]],
      repeat: ['',[Validators.required]],
      destination: ['',[Validators.required]]
    })
  }

  onSubmit() {
      if(!this.form.valid){
        alert("Invalid form data!");
        return;
      }

      if(this.form.value.password !== this.form.value.repeat){
        alert("Passwords do not match!");
        return;
      }
  
      try {
        const formValue = this.form.value;
        delete formValue.repeat;
        UserService.signup(formValue);
        this.router.navigateByUrl('/login');
    }
      catch (e: any) {
        alert("Check your credentials and try again!");
      }
    }
}
