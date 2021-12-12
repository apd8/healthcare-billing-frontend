import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GetCodesService } from 'src/app/services/get-codes.service';

@Component({
  selector: 'cpt-details',
  templateUrl: './cpt-details.component.html',
  styleUrls: ['./cpt-details.component.scss']
})
export class CptDetailsComponent implements OnInit {
  @Input() data: any[] | undefined;
  selectedCptCodes: any = [];
  icdCodes: any = [];
  @Output() callback = new EventEmitter<any>();
  constructor(private service: GetCodesService) { 
    this.icdCodes = service.claimObj.icdCodes;
  }

  ngOnInit(): void {
  }

  selectCptCodes(ev: any, data: any, id: string) {
    if(ev.target.checked){
      data['id'] = id;
      this.selectedCptCodes.push(data);
    } else {
      let removeIndex = this.selectedCptCodes.findIndex((itm: any) => itm.code === data.code);
      if(removeIndex !== -1)
        this.selectedCptCodes.splice(removeIndex,1);
    }
    this.service.setCptCodes(this.selectedCptCodes);
  }

}
