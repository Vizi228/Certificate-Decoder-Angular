import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CertificateListComponent } from './componets/certificate-list/certificate-list.component';
import { CertificateItemComponent } from './componets/certificate-list/certificate-item/certificate-item.component';
import { MainFormComponent } from './componets/main-form/main-form.component';
import { CertificateAreaComponent } from './componets/certificate-area/certificate-area.component';

@NgModule({
  declarations: [
    AppComponent,
    CertificateListComponent,
    CertificateItemComponent,
    MainFormComponent,
    CertificateAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
