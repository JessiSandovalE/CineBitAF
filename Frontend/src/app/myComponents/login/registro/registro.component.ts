
import { Component, OnInit } from "@angular/core";
 import { FormGroup, FormBuilder, Validators } from "@angular/forms";
 import { Usuarios}  from "../../../module/user.module";
 import { UserService } from '../../../services/user.service';
import {Router} from "@angular/router"

@Component({
  selector: "registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"]
})
export class RegistroComponent implements OnInit {

  people= {nombre:"", correo:"", password:""};
  usuario: any;
  local = {nombre:""};
  
  constructor(
    private builder: FormBuilder,
    private usuariosservice: UserService,
    private router: Router 
  ) {}
 

  registerForm: FormGroup = this.builder.group({
    name: ["", Validators.required],
    email: ["", Validators.required],
    password: ["", Validators.required]
  });


  enviar(registerForm) {
    console.log(registerForm.name)
    this.people.nombre = registerForm.name;
    this.people.correo = registerForm.email;
    this.people.password = registerForm.password;
    console.log(this.people);
    this.usuariosservice.crearUsuarios(this.people).subscribe(response => {
      alert("Se creo el registro correctamente.");
      this.router.navigate(['/login'])
    });
  }

 
  ngOnInit() {
   
  }
}


