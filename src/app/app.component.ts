import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resume';
  is_logged: boolean = false;

  ngOnInit() {
    try {
      let token = JSON.parse(localStorage.getItem('user_data')).token;
      this.is_logged = true;
    }
    catch(e){
      this.is_logged = false;
    }
  }
}
