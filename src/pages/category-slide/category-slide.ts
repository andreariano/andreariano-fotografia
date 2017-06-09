import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-category',
  templateUrl: 'category-slide.html'
})
export class CategorySlide {
  @ViewChild(Slides) slides: Slides;

  isNavBarHidden: boolean = true;
  navBarClass: string = "";
  id: number = 1;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.id = navParams.get('id');
  }

  ionViewWillEnter(){
    this.slides.slideTo(this.id -1, 500);
  }

  toggleNavbar(){
    this.isNavBarHidden = !this.isNavBarHidden;
    if (this.navBarClass == "animated fadeIn")
      this.navBarClass = "";
    else
      this.navBarClass = "animated fadeIn";
  }
}
