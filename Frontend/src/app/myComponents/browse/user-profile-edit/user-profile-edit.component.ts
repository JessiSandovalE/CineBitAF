import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {Router} from "@angular/router"


@Component({
  selector: 'app-userprofileedit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.css']
})
export class UserProfileEditComponent implements OnInit {
  people = { nombre: "", correo: "", password: "" };
  user = localStorage.getItem('idUsuarioLogeado');

  constructor(
    private builder: FormBuilder,
    private usuariosService: UserService,
    private router: Router 
  ) { }

 
  userForm: FormGroup = this.builder.group({
    name: ["", Validators.required],
    email: ["", Validators.required],
    password: ["", Validators.required]
  })

  enviar(updateForm){
    this.people.nombre = updateForm.name;
    this.people.correo = updateForm.email;
    this.people.password = updateForm.password;
    this.usuariosService.updateUsuario(this.user,this.people).subscribe(response=>{
      alert("Se actualizaron los datos");
      let nameProfile = document.getElementById('nameProfile');
      nameProfile.textContent = response.nombre;
      this.router.navigate(['/login'])
      console.log(response);
    })
  }
  cargarData(){
    let imagen = document.getElementById('imgEdit')
    this.usuariosService.getUsuarioID(this.user).subscribe(response =>{
      imagen.setAttribute('src', response.imagen);
    })
  }


  
  ngOnInit() {
    this.cargarData()
  }

}
