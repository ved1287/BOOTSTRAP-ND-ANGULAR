import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor(private rs:RestService,private fb:FormBuilder) { }

  public categoryForm=this.fb.group({
    categoryname:['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
    categorydesc:[]
  })
  public categoryResponse;
  ngOnInit() {
  }
  Add(){
    let category={ 
      name:this.categoryForm.get("categoryname").value,
      description:this.categoryForm.get("categorydesc").value
    }
this.rs.addDataToServer(category).subscribe(
  (data)=>{
    this.categoryResponse=data;
  }
)
  }

}
