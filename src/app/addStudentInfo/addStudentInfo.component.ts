import { FormsModule } from "@angular/forms";
import { Component, Inject } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'addStudentInfo.componet.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatDialogModule,FormsModule,MatInputModule],
})

export class addStudentInfoContentExampleDialog {
  name:any ="";
  email:any ="";
  contactNumber:any ='';
  productInformation:any='';

  constructor(private dialogRef: MatDialogRef<addStudentInfoContentExampleDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {}
  
  confirm(){
    let data = {
      "name" : this.name,
      "email" : this.email,
      "contactNumber" : this.contactNumber,
      "productInformation" : this.productInformation
    }
    this.dialogRef.close({event:true, data:data});
  }
}