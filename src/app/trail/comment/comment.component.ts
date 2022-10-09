import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GraphDataService } from '../graph-data.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  commentForm = new FormGroup({
    comment: new FormControl('', [Validators.required]),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _dataStore: GraphDataService,
  public dialogRef: MatDialogRef<CommentComponent>,
  private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    console.log(this.data.commentsIndex);
  }

  postComment() {
    console.log(this.commentForm.controls["comment"].value);
    if (this.commentForm.controls["comment"].value)
    this._dataStore.dataList[this.data.commentsIndex].comments = [...this._dataStore.dataList[this.data.commentsIndex].comments, this.commentForm.controls["comment"].value];
    this.dialogRef.close();
    this._snackBar.open("Comment Posted Successfully!!!", "Dismiss", {
      duration: 3000
    })
  }

}
