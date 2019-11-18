import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { contenidoService } from '../../../services/contenido.service';
import {Router} from "@angular/router";
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-selected-video-cap',
  templateUrl: './selected-video-cap.component.html',
  styleUrls: ['./selected-video-cap.component.css']
})
export class SelectedVideoCapComponent implements OnInit {

  peliculas: any = []

  infopeli_local : any;
  
  pelicula_like = {favorite: false};

  constructor(public rest: contenidoService,  
              private _http: HttpClient,  
              private router: Router, 
              private sanitizier: DomSanitizer) { 
  }

  ngOnInit() {

    this.infopeli_local = localStorage.getItem('InfoPelicula');
    console.log(this.infopeli_local)


    this.rest.getContenidoid(this.infopeli_local).subscribe((result) => {
      // this.productData = result;
      this.peliculas = result;
      console.log(result);
      console.log(this.peliculas)

      console.log(this.peliculas[0].trailer)


      //this.router.navigate(['/product-details/'+result._id]);
    }, (err) => {
      console.log(err);
    });

  }

  
  Like(pelicula){
    console.log(pelicula)
    this.pelicula_like.favorite = true;
    this.rest.updateContenidoLike(this.peliculas[0]._id, this.pelicula_like).subscribe((result) => {
      alert("Serie agregada a BitLike");
    }, (err) => {
      console.log(err);
    });
  }


  GetEmbedUrl(){
    return this.sanitizier.bypassSecurityTrustResourceUrl(this.peliculas[0].trailer)
  } 

}

