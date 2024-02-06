import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from "@angular/material/dialog";

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'delete.componet.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})

export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
}