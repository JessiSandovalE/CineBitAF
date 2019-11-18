import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {

  constructor(
    private builder: FormBuilder, 
    private router: Router) { }
    

 
   contenido= this.builder.group({
   
    title: ['', Validators.required],
    poster_path: ['', Validators.required],
    genres: ['', Validators.required],
    original_title  : ['', Validators.required],
    overview:['', Validators.required],  
    popularity:['', Validators.required],
    release_date:['', Validators.required],
    runtime:['', Validators.required],
    vote_average:['', Validators.required],
    vote_count:['', Validators.required],
    director:['', Validators.required],
    trailer:['', Validators.required],
    profile_path: ['', Validators.required]
      
   })
 
  ngOnInit() {
  }

}
