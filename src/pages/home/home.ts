import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  

  message: string='';
  constructor(public navCtrl: NavController, private socialSharing: SocialSharing, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  shareInfo() {
  
    this.socialSharing.share('message').
      then(() => {
        alert("Sharing success");
        // Success!
      }).catch(() => {
        // Error!
        alert("Share failed");
      });
  }

}
