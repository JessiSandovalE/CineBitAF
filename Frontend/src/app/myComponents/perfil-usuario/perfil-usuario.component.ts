import { Router } from '@angular/router';
import { UserService } from './../../Servicios/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'perfilUsuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {


  people= {nombre:"", correo:"", password:""};
  usuario: any;
  local = {nombre:"",correo:""};

  constructor(private userservice: UserService,
              private router: Router) { }


  eliminar(){

    console.log(this.usuario[0]._id)
    this.userservice.deleteUsuarios(this.usuario[0]._id).subscribe((result) => {
      alert("Usuario Eliminado correctamente");
    }, (err) => {
      console.log(err);
    });
    this.router.navigate(['/'])

  }
  ngOnInit() {
  }

}
