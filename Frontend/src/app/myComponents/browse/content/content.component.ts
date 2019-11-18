import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { contenidoService } from '../../../services/contenido.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
 
/* listaDePeliculas: any = []


constructor(private contenidoService: contenidoService) { }

obtenerContenido(){
  this.contenidoService.getContenido().subscribe(res=>{

    console.log(res);

   this.listaDePeliculas = res
  })
}


  ngOnInit() {
    this.obtenerContenido();
  }

} */

listaDePeliculas: any = []

info = {_id:""};

constructor(private contenidoService: contenidoService,  private router: Router) { }

obtenerContenido(){
  this.contenidoService.getContenido().subscribe(res=>{

    console.log(res);

   this.listaDePeliculas = res
  })
}

Componente(pelicula){
  console.log(pelicula);
  localStorage.setItem('InfoPelicula',pelicula._id);

  if(pelicula.type == "movie"){
    this.router.navigate(['/browse/watch'])
  }
  else{
    
    this.router.navigate(['/browse/watchSerie'])
  }


/*   this.router.navigate(['/browse/watch']) */
}

  ngOnInit() {
    this.obtenerContenido();
  }

}


