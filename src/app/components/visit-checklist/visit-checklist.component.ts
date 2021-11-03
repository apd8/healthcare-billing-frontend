import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'visit-checklist',
  templateUrl: './visit-checklist.component.html',
  styleUrls: ['./visit-checklist.component.scss']
})
export class VisitChecklistComponent implements OnInit {
  @Input() data: any[] | undefined;
  @Output() callback = new EventEmitter<any>();
  constructor() { }
  newArray: any[] = [];
  newObj= {};
  ngOnInit(): void {
  }

  

  checkValue(ev: any, data: any){
    if(ev.target.checked){
      // Pushing the object into array
      this.newArray.push(data);
    }else {
      let removeIndex = this.newArray.findIndex(itm => itm.code===data.code);

      if(removeIndex !== -1)
        this.newArray.splice(removeIndex,1);
    }

    //Duplicates the obj if we uncheck it
    console.log(this.newArray);
    this.callback.emit(this.newArray);
  }

}
