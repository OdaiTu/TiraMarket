import { Component, OnInit } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'tm-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  constructor() { }

  ngOnInit() : any {

    $(".list-img-item").click(function(){
      var current_src = $(this).attr('src');
      $("#main").attr('src', current_src);
    });

    $(".btn-const-add-comment").click(function () {
      $(".new-comment").slideDown(1000).css("display", "block");

    });
  }





}
