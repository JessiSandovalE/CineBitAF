import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Usuarios } from 'src/app/module/user.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

 
  constructor(
    private builder: FormBuilder, 
    private userservice: UserService,
    private router: Router) { }
    listaDeUsuarios: Usuarios[] = []
 
   userRegister= this.builder.group({
   
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
      
      
   })
  
   send(userRegister){
    this.listaDeUsuarios = userRegister
    this.userservice.crearUsuarios((this.listaDeUsuarios))
    .subscribe(response =>{
     /*  alert('se creo correctamente') */
     this.router.navigate(['/dashboard/users'])
     
    })
  }
   

  ngOnInit() {
  }


}
