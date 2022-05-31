import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  srcSet;
  altSet;
  blurbText;
  gitLink;
  constructor() { 
    this.srcSet="";
  this.altSet="";
  this.blurbText="";
  this.gitLink="";

  }

  ngOnInit(): void {
  }

}
