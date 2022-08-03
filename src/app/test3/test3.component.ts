import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {

  constructor(private rs:RestService) { }
  public Advertise=[];
  ngOnInit() {
  }
  find(userName){
    this.rs.getDataFromServer2(userName).subscribe(
      (data)=>{
        
        this.Advertise=data;
      }
    )
        
    
    }

}
