import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  listUsers: any = []
  constructor( private userService: UserService ) { }

  obtenerContenido(){
    this.userService.getUsuarios().subscribe(res=>{
  
      console.log(res);
  
     this.listUsers = res
    })
  }
  
  ngOnInit() {
    this.obtenerContenido();
  }

}
