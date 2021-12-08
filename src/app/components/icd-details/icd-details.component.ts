import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GetCodesService } from '../../services/get-codes.service';

@Component({
  selector: 'icd-details',
  templateUrl: './icd-details.component.html',
  styleUrls: ['./icd-details.component.scss']
})
export class IcdDetailsComponent implements OnInit {
  
  showChildData: boolean = false;
  childData: any[] = [];
  grandChildData: any[] = [];
  parentIcdCode: string = "";
  selected: any = null;
  childCode: any = null;
  selectedIcdCodes: any[] = [];
  @Input() data: any[] | undefined;
  @Output() callback = new EventEmitter<any>();
  constructor(private service: GetCodesService, private elementRef:ElementRef) { 

  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }
  
  toggleArrow(event: any, child: any) {
      event.target.classList.toggle("down");
      if(child["showSubcodes"] && child["showSubcodes"] == true) {
        child["showSubcodes"] = false;
      } else {
        child["showSubcodes"] = true;
      }
  }

  selectIcd(ev: any, data: any) {
    if(ev.target.checked){
      this.selectedIcdCodes.push(data.code);
    } else {
      let removeIndex = this.selectedIcdCodes.findIndex((itm: any) => itm === data.code);
      if(removeIndex !== -1)
        this.selectedIcdCodes.splice(removeIndex,1);
    }
    this.service.setIcdCodes(this.selectedIcdCodes);
  }

  goBack() {
    this.showChildData = false;
    this.selectedIcdCodes = [];
    this.parentIcdCode = "";
    this.service.setIcdCodes(this.selectedIcdCodes);
  }

  changeIcd(code: string) {
    this.childCode = code;
    this.service.getICDChildCodes(code)
    .subscribe((response: any) => {
      if(response != null)
      this.grandChildData = response;
    });
    this.selectedIcdCodes = [];
    this.service.setIcdCodes(this.selectedIcdCodes);
  }

  getChildCodes(item: any){
    this.parentIcdCode = item.code;
    this.service.getICDChildCodes(item.code)
    .subscribe((response: any) => {
      if(response != null)
        this.showChildData = true;
      this.childData = response;
    });
  }

}
