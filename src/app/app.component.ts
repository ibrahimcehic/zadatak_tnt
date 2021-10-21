import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  listaEvenata:any;
  /**
   *
   */
  constructor(private dataService: DataService) {
  }
  ngOnInit(): void {
    this.dataService.getJsonData().subscribe((listaEvenata: any)=>{
      this.listaEvenata=listaEvenata;
    });
  }
}
