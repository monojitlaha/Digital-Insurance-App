import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-iphone',
  templateUrl: './iphone.component.html',
  styleUrls: ['./iphone.component.css']
})
export class IphoneComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  public submit():void{
    window.location.href='~/Register.html';
  }

}
