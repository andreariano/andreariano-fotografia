import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategorySlide } from '../category-slide/category-slide';

@Component({
  selector: 'page-category-tiles',
  templateUrl: 'category-tiles.html'
})
export class CategoryTiles {
  constructor(public navCtrl: NavController) {
    
  }

  goToCategorySlidePage(photoId: number) {
    this.navCtrl.push(CategorySlide, {
      id: photoId
    });
  }
}
