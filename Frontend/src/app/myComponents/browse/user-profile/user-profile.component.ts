import { Usuarios } from './../../../module/user.module';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

<<<<<<< HEAD
/*   mostrarContrasena(){
    var tipo = document.getElementById("password");
    if(tipo.type == "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
 } */
 
  constructor() {}
=======
  constructor( private usuariosService: UserService) { }
    user = localStorage.getItem('idUsuarioLogeado')

    cargarData(){
      let nombre = document.getElementById('name');
      let contra = document.getElementById('pass');
      let correo = document.getElementById('email');
      let imagen = document.getElementById('profileImg')
      this.usuariosService.getUsuarioID(this.user).subscribe(response =>{
        console.log(response);
        nombre.textContent = response.nombre;
        contra.textContent = "*******";
        correo.textContent = response.correo;
        imagen.setAttribute('src', response.imagen)
    
      })

    }
>>>>>>> b002d6f6e36cd3ea7338024dd54a24f3ff9ffc78

  ngOnInit() {
    this.cargarData();
  }

}
