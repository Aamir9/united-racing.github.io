import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu: boolean = false;
  auth: boolean = false;
  prvMode: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
  
    const element = document.getElementById('nav');
    
    if(element.classList.contains('isActive')){
      element.classList.remove('isActive');
    }
    else{
      element.classList.add('isActive');
    }
  }
  toggleAuth(){
    this.auth = !this.auth
  }
  togglePrivate(){
    this.prvMode = !this.prvMode
  }
}
