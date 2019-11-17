import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service'

@Component({
  selector: 'app-useravatar',
  templateUrl: './user-profile-avatar.component.html',
  styleUrls: ['./user-profile-avatar.component.css']
})
export class UserProfileAvatarComponent implements OnInit {

  constructor( private usuariosservice: UserService) { }
  //variables 
  people= {imagen:""};
  user = localStorage.getItem('idUsuarioLogeado');


  cargarImg(){
      let imgProfile = document.getElementById('imgProfile');
      this.usuariosservice.getUsuarioID(this.user).subscribe(response =>{
        console.log(response);
        imgProfile.setAttribute('src', response.imagen);
      })

  }
    //metodo que cambia la imagen de perfil
    imgChange(source){
      let imgActual  = document.getElementById('imgProfile');
      let newImg = source.src;
      console.log(newImg)
      imgActual.setAttribute("src", newImg);
      let nav  = document.getElementById('imgNav');
      nav.setAttribute("src", newImg);
  
    }
    //metodo que consume el servicio update, para reflejarlo en la db
    updateImg(){
      let imgActual  = document.getElementById('imgProfile');
      let srcActual = imgActual.getAttribute('src')
      this.people.imagen = srcActual; 
      this.usuariosservice.updateUsuario(this.user, this.people).subscribe(response =>{
        alert ('Se actualizo correctamente');
      })
  
    }
  

  ngOnInit() {
    this.cargarImg();

  }

}
