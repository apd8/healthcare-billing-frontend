import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cpt-details',
  templateUrl: './cpt-details.component.html',
  styleUrls: ['./cpt-details.component.scss']
})
export class CptDetailsComponent implements OnInit {
  @Input() data: any[] | undefined;
  @Output() callback = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    console.log(typeof this.data);
  }

}
