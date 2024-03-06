import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IListItem } from '../interfaces/listItem.interface';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent {
  @Input() item!: IListItem;
}
