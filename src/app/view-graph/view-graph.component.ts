import { Component, OnInit, Input ,SimpleChanges} from '@angular/core';
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
  @Input() data2 : [any];
  @Input() title2 : string = "";

constructor(private tempeDBService : TempeDBService) { }

  ngOnChanges(change : SimpleChanges) {
      if ('data' in change){
        Highcharts.chart('container', this.get_options());
      }
      //console.log(this.data);
  }

  ngOnInit(){}


  get_options(){
    var options: any = {
      chart: {
        zoomType: 'xy',
        type : 'spline'
      },
      title: {
        text: this.title
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
      },{
        name : this.title2,
        data : this.data2
      }
  ]
    }
    return options;
  }
}
