import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/users/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  constructor(private fn: FormBuilder){}

  public registerForm!: FormGroup;
  public serviceUser = inject(UserService);


  ngOnInit(): void {
    this.registerForm = this.fn.group({
      name: ['', [Validators.required]],
      password: [null, [Validators.required, Validators.min(8)]]
    });
  }

  onSubmit(): void {
    this.serviceUser.register(this.registerForm.value);
  }
}
