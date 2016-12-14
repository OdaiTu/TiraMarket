import { Component, OnInit } from '@angular/core';
declare  var $ : any;

@Component({
  selector: 'tm-userstate',
  templateUrl: './userstate.component.html',
  styleUrls: ['./userstate.component.css']
})
export class UserstateComponent implements OnInit {

  constructor() { }

  ngOnInit() : any {
    $('.message a').click(function(){
      $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    });
  }

}
