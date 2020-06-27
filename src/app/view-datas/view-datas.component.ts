import { Component, OnInit, Input } from '@angular/core';
import { TempeDBService } from '../services/tempeDB.service'


@Component({
  selector: 'app-view-datas',
  templateUrl: './view-datas.component.html',
  styleUrls: ['./view-datas.component.scss']
})
export class ViewDatasComponent implements OnInit {

  @Input() id : string;
  ids : string[] = ["test", "choix2"]; // TODO : peupler avec requette
  @Input() date_debut : Date;
  @Input() date_fin : Date;
  @Input() data : [][];

  constructor(private tempeDBService : TempeDBService) { }

  ngOnInit(): void {
  }

  update(){
    console.log(this);
    this.tempeDBService.setTitle(this.id);
  }

}
