import { Component, OnInit, Input } from '@angular/core';
import { GeneService } from '../../services/gene.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input()
  user = {"firstName":"", lastName:""};
  
  private samples: any[];


  constructor(private geneService: GeneService) { }

  ngOnInit() {
    this.geneService.getUserRegex(this.user.firstName+this.user.lastName).subscribe(res =>{
      this.samples = res;
    })
  }

  statusFilter(status){
  
    var local = this.samples.filter(x => {
      
      return x.status == status;
    });
    return local.length;
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


  closeUsers(){
    this.user = {"firstName":"", lastName:""};
  }
  

  


}
