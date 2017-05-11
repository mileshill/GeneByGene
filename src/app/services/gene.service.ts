import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";


@Injectable()
export class GeneService {
  private baseurl: string = "http://localhost:5000/api/values";

  constructor(private http: Http) { }

  getAllSamples()
  {
    return this.http.get(this.baseurl + "/samples/-1")
      .map(res => res.json());
  } 

  getUserRegex(userName)
  {
    return this.http.get(this.baseurl + "/users/" + userName)
      .map(res => res.json());
  }

  getUsers()
  {
    return this.http.get(this.baseurl + '/users')
      .map(res => res.json());
  }

  getStatuses()
  {
    return this.http.get(this.baseurl + '/statuses')
      .map(res => res.json());
  }

  addSample(barcode, statusId, createdBy){
    var body = JSON.stringify({
      "barcode":barcode,
      "statusId":statusId,
      "createdBy":createdBy
    });

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
  
    
    return this.http.post(this.baseurl +'/samples', body, {headers: headers})
      .map(res => res.json());
    }
}