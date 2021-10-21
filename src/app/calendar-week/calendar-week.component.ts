import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-week',
  templateUrl: './calendar-week.component.html',
  styleUrls: ['./calendar-week.component.css']
})
export class CalendarWeekComponent implements OnInit {

  @Input() listaNasledjena:any;
  constructor() { }

  ngOnInit(): void {
    console.log("OVO JE IZ CHILD KOMPONENTE");
    console.log(this.listaNasledjena);
    
  }

}
