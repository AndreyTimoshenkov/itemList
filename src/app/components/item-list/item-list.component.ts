import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { ListItemComponent } from './list-item/list-item.component';
import { DataService } from './services/data.service';
import { IListItem } from './interfaces/listItem.interface';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    ListItemComponent,
    MatGridListModule,
    // MatDividerModule,
    // MatIconModule,
  ],
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent {
  data: IListItem[] = [];

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe((users) => (this.data = users));
  }
}
