import { Component, OnInit, Input } from '@angular/core';


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

  constructor() { }

  ngOnInit(): void {
  }

  update(){
    console.log(this);
  }

}
