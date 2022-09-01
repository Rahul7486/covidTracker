import { Component } from '@angular/core';
import { Covid19DataService } from 'src/app/services/covid19-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listState:any[] = [];
  covidData:any[] = [];
  stateName:string = 'Andaman and Nicobar Islands';
  distListDsata:any [] = [];
  constructor(private datacovid:Covid19DataService) {

  }

  ngOnInit(): void {
    this.loadState();
    // this.stateWiseData();
  }
  refList:any[] = [];
  loadState(){
    fetch('https://data.covid19india.org/state_district_wise.json').then(res=>res.json()).then(data=>{
      this.listState = data;
      let refLists = Object.keys(data).map((key) => ({ name: key, ...data[key] }));
      this.refList = refLists;
      if(this.refList.length){
        let distList =  Object.keys(this.refList[1].districtData).map((key) => ({ name: key, ...this.refList[1].districtData[key] }));
        this.distListDsata = distList;
      }
    })
  }

  stateChange(e:any){
    this.stateName = e.target.value;
    this.stateWiseData(this.stateName);
  }

  stateWiseData(e?: any){
    e = this.stateName;
    // this.datacovid.getCovidData().subscribe(data=>this.covidData = data);
    // console.log(this.covidData)
    let dist = this.refList.find(data => data.name == e);
    if(dist && dist.districtData){
        let distList =  Object.keys(dist.districtData).map((key) => ({ name: key, ...dist.districtData[key] }));
        this.distListDsata = distList;
        console.log(this.distListDsata)
    }
  }
}
