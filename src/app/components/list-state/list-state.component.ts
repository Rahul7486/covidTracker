import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-state',
  templateUrl: './list-state.component.html',
  styleUrls: ['./list-state.component.css']
})
export class ListStateComponent implements OnInit {
  listState:any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.loadState();
  }

  loadState(){
    fetch('https://data.covid19india.org/state_district_wise.json').then(res=>res.json()).then(data=>{
      this.listState = data;
    })
  }

}
