import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { contenidoService } from '../../../services/contenido.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
 

 
listaDePeliculas: any = []
filteredByGender:any=[]
filteredByType:any=[]

genresList=['Romance',
'Comedia', 
'Animación', 
'Aventura', 
'Suspenso', 
'Fantasía', 
'Acción y aventura', 
'Drama',
'Fantasía y ciencia ficción',
'Mujeres en la historia']
typesList=['Serie','Película']


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


GetGenres(genre){

  switch (genre) {
    case "Suspenso": 
    genre="Suspense"
      break;
    case"Acción y aventura":
        genre="Action & Adventure"
        break;
    case "Fantasía y ciencia ficción":
        genre="Sci-Fi & Fantasy"
        break;
    case "Mujeres en la historia":
        genre="Historia"
        break;
  }
  console.log(genre);
  this.contenidoService.getGenres(genre).subscribe(
    (genresDB)=>{
      this.filteredByGender=genresDB;
      console.log(this.filteredByGender);
      console.log("genero seleccionado");
      localStorage.setItem('filteredByGender',this.filteredByGender[0].genres);
      this.router.navigate(['/browse/genresFilters']);
    }
  )

} 


GetTypes(type){
  console.log(type);
  switch (type) {
    case "Serie":type="tv" 
      break;
    case "Película":type="movie"
    /* default: */
      break;
  }
  
  this.contenidoService.getType(type).subscribe(
    (dbContent)=>{
      this.filteredByType=dbContent;
      console.log(this.filteredByGender);
      console.log("tipo seleccionado");
      localStorage.setItem('filteredByType',this.filteredByType[0].type);
      this.router.navigate(['/browse/typeFilters']);
    }
  )

} 


  ngOnInit() {
    this.obtenerContenido();
  }

}


