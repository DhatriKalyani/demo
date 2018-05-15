import { Component, OnInit } from '@angular/core';
import { Address } from './address';
 @Component({
  selector: 'app-my-app',
  templateUrl: './my-app.component.html',
  styleUrls: ['./my-app.component.css']
})
export class MyAppComponent implements OnInit {
  address = new Address();
  ngOnInit() {
  }
  onSubmit(){
    alert("thanks for submitting !Data:" +JSON.stringify(this.address.firstname));
  }
}

