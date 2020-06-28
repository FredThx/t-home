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
  state_bts : boolean[] = [false, false]; //false = not disabled
  querying : boolean = false;

  constructor(private tempeDBService : TempeDBService) { }


  ngOnInit(): void {
    this.tempeDBService.get_capteurs((response)=>this.ids = response);
  }

 get_bt_state(index){
   return this.state_bts[index - 1]; //Ou revoir tous les index!
 }

  update(capteur, index){
    this.state_bts[index-1]= true;
    this.querying = true;
    this.tempeDBService.get_historique(
      capteur,
      this.date_debut, this.date_fin,
      (data) => {
        this.state_bts[index-1]= false;
        this.querying = false;
        if (index == 1){
          this.data = data;
        } else{
          this.data2 = data;
        }
      }
      );
      if (index == 1){
        this.data = null;
      } else{
        this.data2 = null;
      }
  }
  raz(index){
    if (index == 1){
      this.data = null;
    }else{
      this.data2 = null;
    }
  }

}
