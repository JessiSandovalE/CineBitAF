import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { contenidoService } from '../../../services/contenido.service';
import {Router} from "@angular/router";
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-bit-like',
  templateUrl: './bit-like.component.html',
  styleUrls: ['./bit-like.component.css']
})
export class BitLikeComponent implements OnInit {

  listaDePeliculas: any = []

  info = {_id:""};

  pelicula_like = {favorite: true};

  
  constructor(public rest: contenidoService, private contenidoService: contenidoService,  private router: Router) { }
  
  getFav(){
    this.contenidoService.getFav(this.listaDePeliculas.favorite).subscribe(res=>{
  
      console.log(res);
  
     this.listaDePeliculas = res
    })
  } 

  
  

/*   getGenres(pelicula){
    this.contenidoService.getGenres(Comedia).subscribe(
      (genresDB)=>{
        this.genres=genresDB
        console.log(this.genres)
      }
    )
  }  */
  
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
      this.getFav();
    }
  
    dislike(pelicula){
      console.log(pelicula)
      this.pelicula_like.favorite = false;
      this.rest.updateContenidoLike(this.listaDePeliculas[0]._id, this.pelicula_like).subscribe((result) => {
        this.getFav();
        alert("Eliminado de mi lista BitLike");
      }, (err) => {
        console.log(err);
      });
  

    }
  }
