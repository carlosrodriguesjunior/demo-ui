import { ItemModel } from './../itemModel';
import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { MyListService } from '../my-list.service';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {

  list: ItemModel[];

  constructor(public myListService: MyListService) {
    myListService.get()
      .then((result: ItemModel[]) => {
        this.list = result;
      })

  }
  
  selectItem(item:ItemModel){
    this.myListService.OnSelectItem.emit(item);
  }

  ngOnInit() {
  }

}
