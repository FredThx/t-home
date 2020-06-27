import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;


@Component({
  selector: 'app-view-graph',
  templateUrl: './view-graph.component.html',
  styleUrls: ['./view-graph.component.scss']
})
export class ViewGraphComponent implements OnInit {

  @Input() data : [any];

  constructor() { }

  ngOnInit() {
    Highcharts.chart('container', this.get_options());
  }

  get_options(){
    var options: any = {
      Chart: {
        type: 'area',
        height: 700
      },
      title: {
        text: 'Essai'
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
      series: [{
        name: 'Asia',
        data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
        name: 'Europe',
        data: [163, 203, 276, 408, 547, 729, 628]
    }, {
        name: 'America',
        data: [18, 31, 54, 156, 339, 818, 1201]
    }]
    }
    return options;
  }
}
