import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operator/first';

@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.css']
})
export class NewcomponentComponent implements OnInit {

fname="string";
lname="string";
Gender="string";


  constructor() { }

  ngOnInit() {
  }

}

