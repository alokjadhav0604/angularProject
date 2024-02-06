import { FormsModule } from '@angular/forms';
import { Component, Inject } from "@angular/core";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'dialog-content-example-dialog',
    templateUrl: 'editModel.component.html',
    styleUrls: ['editModel.component.scss'],
    standalone: true,
    imports: [MatDialogModule, MatButtonModule,FormsModule,MatInputModule],
  })

export class DialogContentExampleDialog {
  name:any ="";
  email:any ="";
  contactNumber:any ='';
  productInformation:any='';

  constructor(private dialogRef: MatDialogRef<DialogContentExampleDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.name = this.data.data.name;
    this.email = this.data.data.email;
    this.contactNumber = this.data.data.contactNumber;
    this.productInformation = this.data.data.productInformation;
  }
 
  ngOnInit() {
    this.name = this.data.data.name;
    this.email = this.data.data.email;
    this.contactNumber = this.data.data.contactNumber;
    this.productInformation = this.data.data.productInformation;
  }

  confirm(){
    let data = {
      "id":this.data.data.id,
      "name" : this.name,
      "email" : this.email,
      "contactNumber" : this.contactNumber,
      "productInformation" : this.productInformation
    }
    this.dialogRef.close({event:true, data:data});
  }

}