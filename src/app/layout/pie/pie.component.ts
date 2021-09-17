import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

 public desarrollador = 'JOSE RAMON';
 public fecha = new Date();
 
  constructor() { }

  ngOnInit(): void {
  }

}
