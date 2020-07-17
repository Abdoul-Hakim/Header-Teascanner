import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor() { }

  public teaName: string;
  public oldLength = 0;
  public isTeaSelected = true;
  public isTeawareSelected = false;
  public teaList = [ { name: 'Matcha'}, { name: 'Rooibos'}, { name:'Green'} ];

  ngOnInit(): void {
    this.teaList.sort();
  }

  public selectTea(){
    this.isTeaSelected = true;
    this.isTeawareSelected = false;
  }
  public selectTeaware(){
    this.isTeaSelected = false;
    this.isTeawareSelected = true;
  }


}
