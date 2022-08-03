import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.css']
})
export class Test4Component implements OnInit {

  constructor(private fb:FormBuilder) { }
  simpleForm=this.fb.group({
    myname:['',[Validators.minLength(5),Validators.maxLength(15)]],
   myroll:['',[Validators.required]],
   mymark1:['0',[Validators.min(0),Validators.max(100)]],
   mymark2:['0',[Validators.min(0),Validators.max(100)]],
   mymark3:['0',[Validators.min(0),Validators.max(100)]]
  })

  ngOnInit() {
  }

}
