import { Component, OnInit, Input } from '@angular/core';
import { TempeDBService } from '../services/tempeDB.service'


@Component({
  selector: 'app-view-datas',
  templateUrl: './view-datas.component.html',
  styleUrls: ['./view-datas.component.scss']
})
export class ViewDatasComponent implements OnInit {

  id : string;
  id2 : string;
  ids : string[];
  date_debut : Date;
  date_fin : Date;
  data : [][];
  data2 : [][];
  auto_change : boolean = false;

  constructor(private tempeDBService : TempeDBService) { }


  ngOnInit(): void {
    this.tempeDBService.get_capteurs((response)=>this.ids = response);
  }

  update(capteur, index){
    this.tempeDBService.get_historique(
      capteur,
      this.date_debut, this.date_fin,
      (data) => {
        if (index == 1){
          this.data = data;
        } else{
          this.data2 = data;
        }
      }
      );
  }

}
