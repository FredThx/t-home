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
  _multi_axe : boolean;

  //On change multi_axe
  set multi_axe(value) {
    this._multi_axe = value;
    Highcharts.chart('container', this.get_options());
  }

constructor(private tempeDBService : TempeDBService) { }

  ngOnChanges(change : SimpleChanges) {
      if ('data' in change || 'data2' in change){
        Highcharts.chart('container', this.get_options());
      }
      //console.log(this.data);
  }

  ngOnInit(){}


  get_options(){
    var axe2 = 0;
    if (this._multi_axe){
      axe2 = 1;
    }
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
      yAxis:[{},{opposite:true}],
      series: [{
        name: this.title,
        yAxis : 0,
        data: this.data
      },{
        yAxis : axe2,
        name : this.title2,
        data : this.data2
      }
  ]
    }
    return options;
  }
}
