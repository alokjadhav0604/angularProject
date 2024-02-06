import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseApiUri="https://localhost:5001/";
  
  constructor(private httpClient: HttpClient) {}
  
  getAllStudents(){
    return this.httpClient.get<any>(this.baseApiUri+'api/students/getAllStudent');
  }

  updateTheStudentRecords(id:any,data:any){
    return this.httpClient.put<any>(this.baseApiUri+'api/students/updatestudent/'+id, data);
  }

  deleteOnetudentRecords(id:any){
    return this.httpClient.delete<any>(this.baseApiUri+'api/students/DeleteStudent/'+id);
  }

  adddStudentRecords(data:any){
    return this.httpClient.post<any>(this.baseApiUri+'api/students/addstudent', data);
  }

}
