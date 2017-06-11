import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategorySlide } from '../category-slide/category-slide';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-category-tiles',
  templateUrl: 'category-tiles.html'
})
export class CategoryTiles {
  categoryName: string = "";

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.categoryName = navParams.get('categoryName');
  }

  goToCategorySlidePage(photoId: number) {
    this.navCtrl.push(CategorySlide, {
      id: photoId
    });
  }
}
