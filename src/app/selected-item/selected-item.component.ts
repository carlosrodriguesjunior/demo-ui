import { ItemModel } from './../itemModel';
import { MyListService } from './../my-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.css']
})
export class SelectedItemComponent implements OnInit {

  item: ItemModel = new ItemModel();

  constructor(public myListService: MyListService) { }

  ngOnInit() {

    this.myListService.OnSelectItem.subscribe((item: ItemModel) => {
      this.item = item;
    })

  }

}
