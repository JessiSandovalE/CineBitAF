import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {Router} from "@angular/router"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  valor:boolean = true
  @Output('cambio') cambiando = new EventEmitter<boolean>()
  ngOnInit() {
  }

  capturar(e){
    this.cambiando.emit(this.valor)
    this.router.navigate(['/home'])
  }


  
  constructor(
    private builder: FormBuilder,
    private router: Router
  ) { }


  registerForm: FormGroup = this.builder.group({
    name: ["", Validators.required],
    email: ["", Validators.required],
    password: ["", Validators.required]
  });
  
  
  
  

}
