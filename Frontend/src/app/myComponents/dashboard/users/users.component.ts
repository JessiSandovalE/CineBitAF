import { Component, OnInit } from '@angular/core';
import { UserService} from '../../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userList:any =[]

  constructor(private userService: UserService) { }

  getUsuarios(){
    this.userService.getUsuarios().subscribe(res => {
      this.userList = res
      console.log(res);
    }),error =>{
      console.log('Hay un error con la conexion de la API', error)
    }
  }

  borrarUsuario(usuario){
    let id = usuario
   this.userService.deleteUsuarios(usuario).subscribe(response=>{
     this.getUsuarios() 
    })
    console.log("Borro Exitosamente");
  
  }

  ngOnInit() {
    this.getUsuarios();
  }

}
