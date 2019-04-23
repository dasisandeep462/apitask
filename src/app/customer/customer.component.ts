import { Component, OnInit } from '@angular/core';
import{ ConnectService} from '../connect.service'
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {



  public obj=[]

  constructor(private _dataservice:ConnectService) { }

  ngOnInit() {
    this._dataservice.getTask()
    .subscribe(data=>this.obj=data);
  }
  dup:any[];
  onClick(){
    this.obj=this.dup;
    console.log(this.dup)
  }
  res:any;
  sandeep(x){
    for(let i=0;i<this.obj.length;i++){
      if(this.obj[i]._id==x){
        this.res=this.obj[i];
        console.log(x,this.obj[i]._id)
      }
    }
  }

      }
    
  


