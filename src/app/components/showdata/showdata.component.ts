import { Component, OnInit } from '@angular/core';
import { Covid19DataService } from 'src/app/services/covid19-data.service';
// import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {
  covidData:any[] = [];
  // salesData: ChartData<'bar'> = {
  //   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  //   datasets: [
  //     { label: 'Nagpur', data: [1000, 1200, 1050, 2000, 500] },
  //     { label: 'Amravati', data: [200, 100, 400, 50, 90] },
  //     { label: 'Wardha', data: [500, 400, 350, 450, 650] },
  //     { label: 'Bhandara', data: [1200, 1500, 1020, 1600, 900] },
  //   ],
  // };
  constructor(private datacovid:Covid19DataService) { }

  ngOnInit(): void {
    // this.loadData();
    this.datacovid.getCovidData().subscribe(data=>this.covidData = data);
  }
  // loadData(){
  //   fetch('https://data.covid19india.org/state_district_wise.json').then(res=>res.json()).then(data=>{
  //     this.covidData = data;
  //     // console.log(this.covidData);
  //   })
  // }
  // chartOptions: ChartOptions = {
  //   responsive: true,
  //   plugins: {
  //     title: {
  //       display: true,
  //       text: 'Covid Data Month-Wise',
  //     },
  //   },
  // };
}
