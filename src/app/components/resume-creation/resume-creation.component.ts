import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-resume-creation',
  templateUrl: './resume-creation.component.html',
  styleUrls: ['./resume-creation.component.scss']
})
export class ResumeCreationComponent implements OnInit {

  technical_skills : any = [];
  personal_skills : any = [];

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

}
