import { Component, OnInit, Input } from '@angular/core';
import { TempeDBService } from '../services/tempeDB.service'


@Component({
  selector: 'app-view-datas',
  templateUrl: './view-datas.component.html',
  styleUrls: ['./view-datas.component.scss']
})
export class ViewDatasComponent implements OnInit {

  id : string;
  ids : string[] = ["test", "Cave"]; // TODO : peupler avec requette
  date_debut : Date;
  date_fin : Date;
  data : [][];
  auto_change : boolean = false;

  constructor(private tempeDBService : TempeDBService) { }

  ngOnInit(): void {
  }

  update(){
    this.tempeDBService.get_historique(
      this.id,
      this.date_debut, this.date_fin,
      (data) => {
        this.data = data;
      }
      );
  }

}
