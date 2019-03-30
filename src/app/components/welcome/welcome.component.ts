import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  cardActive: string = 'login';
  emailValid: boolean = true;
  login: any = {
    email : '',
    password : ''
  };

  register: any = {
    email: '',

  };
  constructor(public apiService: HttpService, public toastr: ToastrService) { }

  ngOnInit() {
    
  }

  loginUser()
  {
    console.log(this.login);
    this.apiService.postMethod('login', this.login).then(
      (resp) => {
        console.log(resp);
        let data = resp['body'].data;
        let user_data = data.user_data;
        user_data['token'] = data.token;
        localStorage.setItem('user_data', JSON.stringify(user_data));
      },
      (err) => {
        console.log(err);
        this.toastr.error('Something went wrong', 'Oops!');
      }
    );
  }

  registerUser()
  {
    console.log(this.register);
    this.apiService.postMethod('register', this.register).then(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
        this.toastr.error('Something went wrong', 'Oops!');
      }
    );
  }

  checkEmail(email){
    console.log('Validating - '+email);
    this.emailValid = (!this.validateEmail(email))?false:true;
  }

  validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email.toLowerCase());
  }

}
