import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { certificates } from 'src/app/fake-data/certificates';
import { ICertificate } from 'src/app/models/ICertificate';

@Component({
  selector: 'app-certificate-list',
  templateUrl: './certificate-list.component.html',
  styleUrls: ['./certificate-list.component.scss']
})
export class CertificateListComponent {
  @Input() activeItem: number;
  @Input() certificates: ICertificate[];
  @Input() isActiveArea: boolean;
  @Input() setIsActiveArea: () => void;
  @Output() setCertificate = new EventEmitter<number>();

  onClickItem(id: number) {
    this.setCertificate.emit(id)
  }
  onClickButton() {
    this.setIsActiveArea();
  }
}
