import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoryTiles } from '../category-tiles/category-tiles';
import { Contact } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToCategoryPage(categoryName: string) {
    this.navCtrl.push(CategoryTiles, {
      categoryName: categoryName
    });
  }

  gotoContact(){
    this.navCtrl.push(Contact);
  }
}
