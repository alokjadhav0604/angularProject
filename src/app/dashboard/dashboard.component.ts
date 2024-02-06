import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  name:String='alok';
  age:Number=18;
  gender:string='male';
  hobbies1:String='';
  hobbies2:String='';
  listOfRecord:any=[];
  searchtext:String='';
  allinfo:boolean=true;
  


  constructor(){}
  
  ngOnInit(){}
  
  addRecord () {
    console.log("name",this.name, "age",this.age, "gender",this.gender,"hobbies 1",this.hobbies1,"hobbies 2",this.hobbies2);

    let obj = {
      name : this.name,
      age : this.age,
      gender : this.gender,
      hobbies1 : this.hobbies1,
      hobbies2 : this.hobbies2,
      show: true
    }
    this.listOfRecord.push(obj);
    console.log("this.listofRecord",this.listOfRecord);
  }

  remove(data:any){
    console.log("removed",data.name);
    this.listOfRecord = this.listOfRecord.filter((indata:any) => indata.name !== data.name)
    console.log("this.listofRecord",this.listOfRecord);
  }

  searchData(data:any){

    if(data.length > 3){
      for(let l of this.listOfRecord){
        if(data.name != l.name){
          l.show = false;
        }
      }
    }

    // if(data == ''){
    //    l.show = true;
    //  }

   }
  
    //this.listOfRecord = this.listOfRecord.filter((indata:any) => indata.name == data.name)

}


