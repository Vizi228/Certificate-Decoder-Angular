import { Component, EventEmitter ,Input,Output } from '@angular/core';
import { ICertificate } from 'src/app/models/ICertificate';
import { convertFromASN } from 'src/app/utils/converter';
import ASN1, { StreamOrBinary } from '@lapo/asn1js';

@Component({
  selector: 'app-certificate-area',
  templateUrl: './certificate-area.component.html',
  styleUrls: ['./certificate-area.component.scss']
})
export class CertificateAreaComponent {
  @Input() certificateInfo: ICertificate;
  @Input() certificates: ICertificate[];
  @Input() activeItem: number;
  @Input() isActiveArea: boolean;
  @Input() setItem: (id: number) => void;
  @Output() addCertificates = new EventEmitter<ICertificate>();
  onDrop(e: any) {
    e.preventDefault();
    let files = e.dataTransfer.files;
    const reader = new FileReader();
    reader.onload = async () => {
      try {
          const result = ASN1.decode(reader.result as StreamOrBinary);
          const converted = convertFromASN(result);
          if(this.certificates.some(item => item.commonName === converted.commonName)) {
            alert('Такий сертифікат вже існує, виберіть інший')
          } else {
            localStorage.setItem('certificates', JSON.stringify(this.certificates.concat([converted])));
            this.addCertificates.emit(converted);
            this.setItem(this.certificates.length);
          }
      } catch (error) {
        alert(`${error}`);
      }
    };
    reader.readAsBinaryString(files[0]);
  }
  onStart(e: DragEvent) {
    e.preventDefault();
  }
  onLeave(e: DragEvent) {
    e.preventDefault();
  }

}
