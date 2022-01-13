import { Component } from '@angular/core';
import {ListAPIserviceService} from './list-apiservice.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mylistAPI';
  data:any
  constructor(private user:ListAPIserviceService){
    this.user.getData().subscribe(data=>{
      console.warn(data)
      this.data=data
    })
  }
}
