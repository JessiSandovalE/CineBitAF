import { Usuarios } from './../../../module/user.module';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

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

  ngOnInit() {
    this.cargarData();
  }

}
