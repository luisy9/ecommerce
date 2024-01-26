import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/users/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(private fn: FormBuilder, private router: Router) { }

  public loginForm!: FormGroup;
  public isLogged!: string;
  public serviceUser = inject(UserService);

  ngOnInit(): void {
    this.loginForm = this.fn.group({
      name: ['', [Validators.required]],
      password: [null, [Validators.required, Validators.min(8)]]
    });
  }

  onSubmit(): void {
    this.serviceUser.login(this.loginForm.value);
    this.serviceUser.isLoggedUserGetter.subscribe((e) => {
      if(e.length > 0){
        this.router.navigate(['/article/list']);
      }
    });
  }

}
