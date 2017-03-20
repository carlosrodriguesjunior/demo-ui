import { ItemModel } from './itemModel';
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class MyListService {

    OnSelectItem = new EventEmitter<ItemModel>();

    constructor(private http: Http) {

    }

    get() {
        return this.http.get("http://localhost:3000/api/list")
            .map((response: Response) => {
                return <ItemModel[]>response.json();
            })
            .toPromise()

    }

}
