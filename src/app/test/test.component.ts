import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private rs:RestService) { }
public allPosts=[];
public allCategory=[];
  ngOnInit() {
this.rs.getDataFromServer().subscribe(
  (data)=>{
// this.allPosts=data
    this.allCategory=data;
  }
)
  }

}
