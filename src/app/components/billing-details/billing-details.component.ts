import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GetCodesService } from '../../services/get-codes.service';

@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.scss']
})


export class BillingDetailsComponent implements OnInit {
  chargesList: any[] = [];
  selectedIndex : number = 0;
  codeInfo: any = {};
  configuration: any = {};

  constructor(private service: GetCodesService) { }
  ngOnInit(): void {
      this.service.getICDCodes()
        .subscribe(response => this.codeInfo = response.slice(0,10));
      this.service.getConfigurations()
      .subscribe(response => this.codeInfo["configuration"] = response);
  }

  list = [
    { value: '1', viewValue: 'Radiology' },
    { value: '2', viewValue: 'Cardiology' },
    { value: '3', viewValue: 'Oncology' }
  ];

  encounterList = [
    { value: '1', viewValue: 'Encounter 1' },
    { value: '2', viewValue: 'Encounter 2' },
    { value: '3', viewValue: 'Encounter 3' },
  ];

  visitInfo = [
    {
      "name": "ICD",
      "label": "ICD Content"
    }, {
      "name": "CPT",
      "label": "cpt Content"
    },
    {
      "name": "Claim",
      "label": "claim Content"
    }]

  onTabChanged(event: any) {
    this.selectedIndex = event.index;
  }  

}
