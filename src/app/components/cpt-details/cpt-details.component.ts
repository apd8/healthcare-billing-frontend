import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GetCodesService } from 'src/app/services/get-codes.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'cpt-details',
  templateUrl: './cpt-details.component.html',
  styleUrls: ['./cpt-details.component.scss']
})
export class CptDetailsComponent implements OnInit {
  @Input() data: any[] | undefined;
  selectedCptCodes: any = [];
  icdCodes: any = [];
  cptCodes: any = [];
  @Output() callback = new EventEmitter<any>();
  constructor(private service: GetCodesService,private  notifyService: NotificationService) { 
    this.icdCodes = service.claimObj.icd10Codes;
  }

  ngOnInit(): void {
  }

  saveEncounter() {
    this.service.saveClaim().subscribe((res) => {
      if(res) {
        this.notifyService.showSuccess("Claim has been Added !!", "Success")
      }
    })
  }

  selectCptCodes(ev: any, data: any, id: string) {
    if(ev.target.checked){
      data['id'] = id;
      this.selectedCptCodes.push({"code" : data.code, "rate": data.rate});
      this.cptCodes.push(data.code);
    } else {
      let removeIndex = this.selectedCptCodes.findIndex((itm: any) => itm.code === data.code);
      let removeIndexCpt = this.cptCodes.findIndex((itm: any) => itm === data.code);
      if(removeIndex !== -1)
        this.selectedCptCodes.splice(removeIndex,1);
      if(removeIndexCpt !== -1)
        this.cptCodes.splice(removeIndex,1);
    }
    this.service.setCptCodes(this.cptCodes);
  }

}
