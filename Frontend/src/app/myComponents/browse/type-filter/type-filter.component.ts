import { Component, OnInit } from '@angular/core';
import {contenidoService} from '../../../services/contenido.service';

@Component({
  selector: 'app-type-filter',
  templateUrl: './type-filter.component.html',
  styleUrls: ['./type-filter.component.css']
})
export class TypeFilterComponent implements OnInit {

  constructor(private contenidoService:contenidoService) { }
  filteredByType_local:any;
  filteredByType:any;
  listaDePeliculas:any;
  ngOnInit() {
    this.filteredByType_local=localStorage.getItem('filteredByType');
    console.log(this.filteredByType_local)
    this.getType();
  }

  getType(){
    this.contenidoService.getType(this.filteredByType_local).subscribe(res=>{
  
      console.log(res);
  
     this.listaDePeliculas = res
    })
  } 

}
