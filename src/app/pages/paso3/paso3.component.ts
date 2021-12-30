import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paso3',
  templateUrl: './paso3.component.html',
  styleUrls: ['./paso3.component.css']
})
export class Paso3Component implements OnInit {

  constructor(private router: Router) { 
    const urlTree = this.router.parseUrl(this.router.url);

    console.log(urlTree.queryParams['token']);
    console.log(urlTree.queryParams['type']);
  }

  ngOnInit(): void {
  }

}
