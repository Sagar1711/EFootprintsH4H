import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Trail } from './trail';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { CommentComponent } from './comment/comment.component';
import { GraphDataService } from './graph-data.service';

@Component({
  selector: 'app-trail',
  templateUrl: './trail.component.html',
  styleUrls: ['./trail.component.scss']
})
export class TrailComponent implements OnInit {
  faPlus = faPlus;
  dataList: Trail[];
  constructor(public dialog: MatDialog, private _dataStore: GraphDataService) {
    this.dataList = _dataStore.dataList;
  }

  ngOnInit(): void {
  }

  openDialog(index: number) {
    this.dialog.open(CommentComponent, {
      data: { commentsIndex: index },
    });
  }

}
