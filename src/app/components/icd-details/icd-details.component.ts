import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GetCodesService } from '../../services/get-codes.service';

@Component({
  selector: 'icd-details',
  templateUrl: './icd-details.component.html',
  styleUrls: ['./icd-details.component.scss']
})
export class IcdDetailsComponent implements OnInit {
  @Input() data: any[] | undefined;
  @Output() callback = new EventEmitter<any>();
  constructor(private service: GetCodesService) { }

  ngOnInit(): void {
    console.log(typeof this.data)
  }

  getChildCodes(code: string){
    this.service.getChildrenCodes(code)
    .subscribe((response: any) => {
      console.log(response, 'aaya re');
    });
  }

}
