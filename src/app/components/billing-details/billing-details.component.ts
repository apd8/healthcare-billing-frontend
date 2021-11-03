import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.scss']
})


export class BillingDetailsComponent implements OnInit {
  chargesList: any[] = [];

  constructor() { }
  ngOnInit(): void {
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

  visitInfo = [{
    "name": "ICD",
    "label": "ICD Content",
    "details": [{
      "label": "ICD Content"
    }
    ]
  }, {
    "name": "CPT",
    "label": "cpt Content",
    "details": [
      {
        "label": "Office Visit: New Patient",
        "value": [
          {
            "code": 99201,
            "name": "FOCUSED HISTORY/EXAM(99201)",
            "selected": false,
            "unit": 1,
            "modifiers" : "",
            "fee": 0.00,
            "icd": "R42",
            "planAmount": 0.00,
            "patientAmount": 0.00,
            "coPay": 0.00
          },
          {
            "code": 99202,
            "name": "EXPANDED HISTORY/EXAM(99202)",
            "selected": false,
            "unit": 1,
            "icd": "R42",
            "modifiers" : "",
            "fee": 0.00,
            "planAmount": 0.00,
            "patientAmount": 0.00,
            "coPay": 0.00,
          },
          {
            "code": 99203,
            "name": "DETAILED HISTORY/EXAM(99201)",
            "selected": false,
            "unit": 1,
            "icd": "R42",
            "modifiers" : "",
            "fee": 0.00,
            "planAmount": 0.00,
            "patientAmount": 0.00,
            "coPay": 0.00,
          },
          {
            "code": 99204,
            "name": "COMPLEX HISTORY/EXAM(99204)",
            "selected": false,
            "unit": 1,
            "icd": "R42",
            "modifiers" : "",
            "fee": 0.00,
            "planAmount": 0.00,
            "patientAmount": 0.00,
            "coPay": 0.00,
          },
          {
            "code": 99205,
            "name": "COMPREH. HISTORY/EXAM(99205)",
            "selected": false,
            "unit": 1,
            "icd": "R42",
            "modifiers" : "",
            "fee": 0.00,
            "planAmount": 0.00,
            "patientAmount": 0.00,
            "coPay": 0.00,
          }
        ]
      },
      {
        "label": "Office Visit: Established",
        "value": [
          {
            "code": 99211,
            "name": "FOCUSED HISTORY/EXAM(99211)",
            "selected": false,
            "unit": 1,
            "modifiers" : "",
            "fee": 0.00,
            "icd": "R42",
            "planAmount": 0.00,
            "patientAmount": 0.00,
            "coPay": 0.00,
          },
          {
            "code": 99212,
            "name": "EXPANDED HISTORY/EXAM(99212)",
            "selected": false,
            "unit": 1,
            "icd": "R42",
            "modifiers" : "",
            "fee": 0.00,
            "planAmount": 0.00,
            "patientAmount": 0.00,
            "coPay": 0.00,
          },
          {
            "code": 99213,
            "name": "DETAILED HISTORY/EXAM(99213)",
            "selected": false,
            "unit": 1,
            "icd": "R42",
            "modifiers" : "",
            "fee": 0.00,
            "planAmount": 0.00,
            "patientAmount": 0.00,
            "coPay": 0.00,
          },
          {
            "code": 99214,
            "name": "COMPLEX HISTORY/EXAM(99214)",
            "selected": false,
            "unit": 1,
            "icd": "R42",
            "modifiers" : "",
            "fee": 0.00,
            "planAmount": 0.00,
            "patientAmount": 0.00,
            "coPay": 0.00,
          }
        ]
      },
      {
        "label": "Office Consultation",
        "value": [
          {
            "code": 99241,
            "name": "MINIMAL VISIT(99241)",
            "selected": false,
            "unit": 1,
            "icd": "R42",
            "modifiers" : "",
            "fee": 0.00,
            "planAmount": 0.00,
            "patientAmount": 0.00,
            "coPay": 0.00,
          },
          {
            "code": 99242,
            "name": "LIMITED VISIT(99242)",
            "selected": false,
            "unit": 1,
            "icd": "R42",
            "modifiers" : "",
            "fee": 0.00,
            "planAmount": 0.00,
            "patientAmount": 0.00,
            "coPay": 0.00,
          }
        ]
      },
      {
        "label": "Vestibular",
        "value": [
          {
            "code": 92541,
            "name": "SPONTANEOUS(92541)",
            "selected": false,
            "unit": 1,
            "modifiers" : "",
            "fee": 0.00,
            "icd": "R42",
            "planAmount": 0.00,
            "patientAmount": 0.00,
            "coPay": 0.00,
          },
          {
            "code": 92542,
            "name": "POSITIONAL(92542)",
            "selected": false,
            "icd": "R42",
            "unit": 1,
            "modifiers" : "",
            "fee": 0.00,
            "planAmount": 0.00,
            "patientAmount": 0.00,
            "coPay": 0.00,
          }
        ]
      }
    ]
  }, {
    "name": "Visit Extra Info",
    "label": "visit Content",
    "details": [{
      "label": "visit content"
    }]
  },
  {
    "name": "Claim Editing",
    "label": "claim Content",
    "details": [{
      "label": "claim content"
    }]
  }]
  
  onChangeCallback(data: any[]) {
    this.chargesList = data;
  }


}
