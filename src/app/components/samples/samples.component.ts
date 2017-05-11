import { Component, OnInit } from '@angular/core';
import { GeneService} from '../../services/gene.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css']
})
export class SamplesComponent implements OnInit {
  private samples: any[];
  private origSampleSize;
  private userName;
  private selectedUser;

  constructor(private geneService: GeneService) { }

  ngOnInit() {
    this.geneService.getAllSamples()
      .subscribe(res =>{
        this.samples = res;
        this.origSampleSize = this.samples.length;
      })
  }


  tableClassSelector(status)
  {
    status = status.toLowerCase();
        
    if(status == 'received')
    {
      return "table-action";
    } else if( status == 'accessioning')
    {
      return "table-info";
    } else if(status == 'in lab')
    {
      return "table-warning";
    } else
    {
      return "table-success";
    }
  }

  barcodeSort(){
    this.samples = this.samples.sort((a, b) => {
      return (a.barcode > b.barcode) ? 1 : -1;
    });
  }

  createdSort(){
    this.samples = this.samples.sort((a,b) => {
      return (a.createdAt > b.createdAt) ? 1 : -1;
    })
  }

  statusSort(){
    this.samples = this.samples.sort((a,b) => {
      return (a.status > b.status) ? 1 : -1;
    })
  }
  
  lastnameSort(){
    this.samples = this.samples.sort((a,b) => {
      return (a.lastName > b.lastName) ? 1 : -1;
    })
  }

  statusFilter(status){
    this.samples = this.samples.filter( a => {
      return a.status == status;     
    })
  }

  barcodeFilter(barcode){
    this.samples = this.samples.filter( a => {
      return a.barcode == barcode;
    })
  }

  dateFilter(date){
    this.samples = this.samples.filter( a => {
      return a.createdAt == date;
    })
  }

  resetSamples(){
    this.geneService.getAllSamples().subscribe(res => {
      this.samples = res;
    })

    this.userName = null;
    this.selectedUser = null;
  }

  ratio(){
    return this.samples.length / this.origSampleSize * 100;
  }

  userRegexFilter(){
    if(this.userName.length > 0)
    {
      this.geneService.getUserRegex(this.userName).subscribe(res => {
        this.samples = res;
      })
    }
  }

  selectUser(user)
  {
    this.selectedUser = {"lastName":user.lastName, "firstName":user.firstName};
  }

}
