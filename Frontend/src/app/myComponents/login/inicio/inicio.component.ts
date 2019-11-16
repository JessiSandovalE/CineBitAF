import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import  { Usuarios } from '../../../module/user.module';
import { UserService } from "../../../services/user.service"; 
import {Router} from "@angular/router"

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  people= {nombre:"",  correo:"", password:""};
  usuario: any;
  local = {nombre:""};

  constructor(
    private builder: FormBuilder,
     private usuariosservice: UserService, 
    private router: Router
  ) {}
 

  loginForm: FormGroup = this.builder.group({
    name: ["", Validators.required],
    email: ["", Validators.required],
    password: ["", Validators.required]
  });

  ValidarUsuario(email,contrasena){
    console.log(email)
    console.log(contrasena)

    this.usuariosservice.getUsuario(email).subscribe((result) => {
       this.usuario = result;
       console.log(this.usuario)
       this.CompararPasswords(contrasena,this.usuario)
     }, (err) => {
       console.log(err);
     });
  }

  CompararPasswords(ingresado,leido){
    console.log(ingresado,leido)

    localStorage.setItem("nombreUsuarioLogeado",leido.nombre)
    localStorage.setItem("correoUsuarioLogeado",leido.correo)

    if (ingresado == leido.password){

      if(leido.role == "user"){
        /* alert("Bienvenido") */
        this.router.navigate(['/browse'])
      }
      if(leido.role == "admin"){
     /*    alert("Es un Administrador") */
        this.router.navigate(['/dashboard'])
      }


    }else{
      alert("Usuario o contraseña incorrecto, login failed");
    }


  }

  ngOnInit() {
    this.local.nombre = localStorage.getItem("nombreUsuarioLogeado") 
  }
}
