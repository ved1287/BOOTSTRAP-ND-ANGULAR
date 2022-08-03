import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {

  constructor(private fb:FormBuilder ) { }
  simpleForm=this.fb.group({
  myname:['Zensar',Validators.required],
 myemail:['',[Validators.minLength(5),Validators.maxLength(15)]],
 mysalary:['0',[Validators.min(1000),Validators.max(5000)]]
})
  ngOnInit() {
  }

}
