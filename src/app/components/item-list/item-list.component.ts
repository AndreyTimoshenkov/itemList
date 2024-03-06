import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatIconModule } from '@angular/material/icon';
import { mockData } from '../item-list/mock.data';
import { ListItemComponent } from './list-item/list-item.component';
import { DataService } from './services/data.service';
import { IListItem } from './interfaces/listItem.interface';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    ListItemComponent,
    // MatDividerModule,
    // MatIconModule,
  ],
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent {
  data: IListItem[] = [];

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe((users) => (this.data = users));
  }
}
