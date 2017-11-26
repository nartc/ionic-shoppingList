import { Item } from '../../models/item/item.model';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shoppingList$: Observable<Item[]>

  constructor(
    public navCtrl: NavController,
    private _shoppingListService: ShoppingListService) {
      this.shoppingList$ = this._shoppingListService.getShoppingList()
        .snapshotChanges()
        .map(changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }));
        });
  }

}
