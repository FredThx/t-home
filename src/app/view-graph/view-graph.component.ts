import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import { TempeDBService } from '../services/tempeDB.service'

declare var require: any;


@Component({
  selector: 'app-view-graph',
  templateUrl: './view-graph.component.html',
  styleUrls: ['./view-graph.component.scss']
})
export class ViewGraphComponent implements OnInit {

  @Input() data : [any];
  @Input() title : string;

constructor(private tempeDBService : TempeDBService) { }

  ngOnInit() {
    Highcharts.chart('container', this.get_options());
  }

getTitle(){
  return this.tempeDBService.getTitle();
}

  get_options(){
    var options: any = {
      Chart: {
        zoomType: 'x',
      },
      title: {
        text: this.tempeDBService.getTitle()
      },
      credits: {
        enabled: false
      },
      xAxis: {
        type : 'datetime'
      },
      series: [{
        name: this.title,
        data: this.data
    }]
    }
    return options;
  }
}
