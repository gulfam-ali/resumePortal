import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ResumeListingComponent } from './components/resume-listing/resume-listing.component';
import { ResumeCreationComponent } from './components/resume-creation/resume-creation.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TagInputModule } from 'ngx-chips';
import { HeaderComponent } from './core/header/header.component';
import { HttpService } from './services/http.service';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ResumeListingComponent,
    ResumeCreationComponent,
    WelcomeComponent,
    HeaderComponent
  ],
  imports: [
    TagInputModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
