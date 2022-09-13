import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateAreaComponent } from './certificate-area.component';

describe('CertificateAreaComponent', () => {
  let component: CertificateAreaComponent;
  let fixture: ComponentFixture<CertificateAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificateAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
