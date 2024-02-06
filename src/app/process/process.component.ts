import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentExampleDialog } from '../editModel/editModel.component';
import { DialogAnimationsExampleDialog } from '../deleteDailog/delete.componet';
import { addStudentInfoContentExampleDialog } from '../addStudentInfo/addStudentInfo.component';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent {
  student:any=[];
  dataSource:any=[];
  studentInformation :any =[];
  constructor(private studentService:StudentService, public dialog: MatDialog){}

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(
      (studentData)=>{ this.studentInformation = studentData; }
    );
  }

  DeleteDialog(data:any): void {
    const dialogRef = this.dialog.open(DialogAnimationsExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.studentService.deleteOnetudentRecords(data).subscribe((student)=>{
          this.ngOnInit();
        });
      }
    });
  }

  editDialog(data: any) {
    const dialogRef = this.dialog.open(DialogContentExampleDialog,{
        data: {
          data: data
        }
      });

    dialogRef.afterClosed().subscribe(result => {
      this.studentService.updateTheStudentRecords(result.data.id, result.data).subscribe((studentInfo)=> {
        this.ngOnInit();
      });
    });
  }

  AddDialog() {
    const dialogRef = this.dialog.open(addStudentInfoContentExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
      this.studentService.adddStudentRecords(result.data).subscribe((studentInfo)=> {
        this.ngOnInit();
      });
    });
  }
}