import { Component, Input } from '@angular/core';
import { ICertificate } from 'src/app/models/ICertificate';

@Component({
  selector: 'app-certificate-item',
  templateUrl: './certificate-item.component.html',
  styleUrls: ['./certificate-item.component.scss']
})
export class CertificateItemComponent  {
  @Input() certificateItem: ICertificate 
  @Input() isActive: boolean 
}
