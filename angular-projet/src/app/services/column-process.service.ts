import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColumnProcessService {

  constructor() { }

  productColumns() {
    return [
      {
        field: 'id',
        header: 'ID',
      },
      {
        field: 'name',
        header: 'Nom',
      },
      {
        field: 'description',
        header: 'Description',
      },
      {
        field: 'price',
        header: 'Prix',
      },
    ];
  }

}
