import { Component, OnInit } from '@angular/core';
import { GeneService } from '../../services/gene.service';

@Component({
  selector: 'app-addsample',
  templateUrl: './addsample.component.html',
  styleUrls: ['./addsample.component.css']
})
export class AddsampleComponent implements OnInit {
  private users: any[];
  private statuses: any[];

  private barcode;
  private user;
  private status;

  constructor(private geneService: GeneService) { }

  ngOnInit() {
    this.geneService.getUsers().subscribe(res => {
      this.users = res;
      this.user = res[0];
    });
    
    this.geneService.getStatuses().subscribe(res => {
      this.statuses = res;
      this.status = res[0];
  });
  }


  post(){
    //console.log(this.barcode, this.user, this.status);
    var bar = this.barcode;
    var user = this.users.filter(u => {return u.firstName +' '+ u.lastName == this.user;})[0];
    var stat = this.statuses.filter(s => {return s.status == this.status;})[0];
  
    this.geneService.addSample(bar, stat.statusId, user.userId).subscribe(res => {
      console.log(res);
    })

  }


}
