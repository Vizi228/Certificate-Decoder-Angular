import { Component, OnInit } from '@angular/core';
import { certificates } from 'src/app/fake-data/certificates';
import { ICertificate } from 'src/app/models/ICertificate';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {
  activeItem: number = -1;
  certificates: ICertificate[] = [];
  isActiveArea: boolean = false;
  setItem(id: number) {
    this.activeItem = id;
    this.isActiveArea = false;
  }

  setIsActiveArea() {
    this.isActiveArea = !this.isActiveArea;
  }

  addCertificates(certificate: ICertificate) {
    this.certificates.push(certificate);
  }

  ngOnInit(): void {
    const certificates = localStorage.getItem('certificates');
    if(certificates) {
      this.certificates = JSON.parse(certificates) as ICertificate[]
    }
  }
}
