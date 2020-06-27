import { Component, OnInit, Input } from '@angular/core';
import { TempeDBService } from '../services/tempeDB.service'


@Component({
  selector: 'app-view-datas',
  templateUrl: './view-datas.component.html',
  styleUrls: ['./view-datas.component.scss']
})
export class ViewDatasComponent implements OnInit {

  id : string;
  ids : string[] = ["test", "choix2"]; // TODO : peupler avec requette
  date_debut : Date;
  date_fin : Date;
  data : [][];

  constructor(private tempeDBService : TempeDBService) { }

  ngOnInit(): void {
  }

  update(){
    console.log(this);
  }

}
