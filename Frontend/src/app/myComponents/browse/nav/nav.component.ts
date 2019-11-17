import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private usuariosservice: UserService) { }
  user = localStorage.getItem('idUsuarioLogeado');

  cargarDatos(){
    let imgProfile = document.getElementById('imgNav');
    let p = document.getElementById('nameProfile');
    this.usuariosservice.getUsuarioID(this.user).subscribe(response =>{
      console.log(response);
      imgProfile.setAttribute('src', response.imagen);
      p.textContent = response.nombre;

    })

}

  ngOnInit() {
   this.cargarDatos();
  }

}
