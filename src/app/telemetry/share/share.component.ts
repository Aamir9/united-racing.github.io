import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
  linkUrl ="";
  btnText= "Generate Link";
  constructor() { }

  ngOnInit(): void {
  }

  generateLink(e){
    this.linkUrl= 'abc.com';
    this.btnText= 'Copy';
    e.stopPropagation();
    e.preventDefault();
  }
}
