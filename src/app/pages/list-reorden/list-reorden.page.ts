import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorden',
  templateUrl: './list-reorden.page.html',
  styleUrls: ['./list-reorden.page.scss'],
})
export class ListReordenPage implements OnInit {

personajes:string[]=['Aquaman','Superman','Mujer Maravilla','Batman','Flash'];

  constructor() { }

  ngOnInit() {
  }
doReorder(event:any){
  console.log(event);
  const itemMover=this.personajes.splice(event.detail.form,1)[0];
  this.personajes.splice(event.detail.to,0,itemMover);

  event.detail.complete();
  console.log(this.personajes);

  }
}
