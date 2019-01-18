import { Component } from '@angular/core';
import { TournamentsPage } from '../tournaments/tournaments';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html',
})
export class MyTeamsPage {

  constructor(private navCtrl: NavController) {}

  goToTournaments(){
    this.navCtrl.push(TournamentsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTeamsPage');
  }

}
