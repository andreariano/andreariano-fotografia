import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class Category {
  isNavBarHidden: boolean = true;
  navBarClass: string = "";

  constructor(public navCtrl: NavController) {
    
  }

  toggleNavbar(){
    this.isNavBarHidden = !this.isNavBarHidden;
    if (this.navBarClass == "animated fadeIn")
      this.navBarClass = "";
    else
      this.navBarClass = "animated fadeIn";
  }
}
