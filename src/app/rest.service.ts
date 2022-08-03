import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from './Post';
import { ICategory } from './Category';
import { IAdvt } from './Advt';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private url:string="http://localhost:9052/advertise/category";
  private url2:string="http://localhost:9052/advertise/addCategory";
  private url3:string="http://localhost:9052/advertise/getCategoryById";
  private url4:string="http://localhost:9053/user/advertise/";


  constructor(private http:HttpClient) { }
  getDataFromServer():Observable<ICategory[]>{
    return this.http.get<ICategory[]>(this.url);
  }
  addDataToServer(data:any):Observable<ICategory[]>{
    return this.http.post<ICategory[]>(this.url2,data);
  }
  getDataFromServer1(id:any):Observable<ICategory[]>{
    return this.http.get<ICategory[]>(this.url3+"/"+id);
  }
  getDataFromServer2(userName):Observable<IAdvt[]>{
    return this.http.get<IAdvt[]>(this.url4+"/"+userName);
  }
  
}
