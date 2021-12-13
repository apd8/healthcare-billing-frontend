import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { GetCodesService } from 'src/app/services/get-codes.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ClaimsService } from 'src/app/services/claims.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
// import * as jspdf from 'jspdf';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'claim-details',
  templateUrl: './claim-details.component.html',
  styleUrls: ['./claim-details.component.scss']
})
export class ClaimDetailsComponent implements OnInit {
  @Input() data: any[] | undefined; 
  claimData:any= [];
  modalRef!: BsModalRef; 
  statement:any = {}; 
  constructor(private service: GetCodesService,
    private  notifyService: NotificationService, 
    private modalService: BsModalService,
    private  claimService: ClaimsService) { 
  }

  ngOnInit(): void {
    this.claimData = this.data;
  }

  processClaim(id: string) {
    this.claimService.processClaim(id).subscribe((res: any)=> {
      if(res) {
        this.service.getClaims()
        .subscribe((response: any[]) => {
          this.data = response;
        });
      }
      this.notifyService.showSuccess("Claim has been processed !!", "Success");
    })
  }

  generateStatement(id: string, template: TemplateRef<any>) {
    this.claimService.generateStatement(id).subscribe((res: any)=> {
      this.statement = res;
      this.notifyService.showSuccess("Statement has been generated !!", "Success");
      this.modalRef = this.modalService.show(
        template,
        Object.assign({}, { class: 'gray modal-lg' })
      );  
    });
  }

  settleClaim(id: string) {
    this.claimService.settleClaim(id).subscribe((res: any)=> {
      this.notifyService.showSuccess("Your claim has been Processed !!", "Success")
    })
  }

  generatePdf(data: any) {
    html2canvas(data, { allowTaint: true }).then(canvas => {
     let HTML_Width = canvas.width;
     let HTML_Height = canvas.height;
     let top_left_margin = 15;
     let PDF_Width = HTML_Width + (top_left_margin * 2);
     let PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
     let canvas_image_width = HTML_Width;
     let canvas_image_height = HTML_Height;
     let totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;
     canvas.getContext('2d');
     let imgData = canvas.toDataURL("image/jpeg", 1.0);
     let pdf = new jspdf('p', 'pt', [PDF_Width, PDF_Height]);
     pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
     for (let i = 1; i <= totalPDFPages; i++) {
       pdf.addPage([PDF_Width, PDF_Height], 'p');
       pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
     }
      pdf.save("HTML-Document.pdf");
   });
 }

  delete(id: string) {
    this.service.deleteClaim(id).subscribe((res: any)=> {
      this.notifyService.showSuccess("Claim Deleted !!", "Success")
      if(res) {
        this.service.getClaims()
        .subscribe((response: any[]) => {
          this.data = response;
        });
      }
    });
  }

}
