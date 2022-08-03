import { findLast } from '@angular/compiler/src/directive_resolver';
import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  constructor(private rs:RestService) { }
  public oneCategory;
  ngOnInit() {
  }
    find(id){
this.rs.getDataFromServer1(id).subscribe(
  (data)=>{
    
    this.oneCategory=data;
  }
)
    
}
}


