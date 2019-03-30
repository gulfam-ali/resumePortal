import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import * as ENV from '../configs/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiURL: any;
  requestHeader : any;
  header: any = [];

  constructor(private http: HttpClient) {
    this.apiURL = ENV.urls[ENV.pf].apiURL;
  }

  setRequestHeader()
  {
    try {
      let userData = JSON.parse(sessionStorage.getItem('user_data'));
      this.header = {
        'Content-Type':  'application/json',
        'Authorization': userData.token
      };
    }
    catch(e){
      this.header = {
        'Content-Type':  'application/json'
      };
    }

    this.requestHeader = new HttpHeaders(this.header);
  }


  callMethods(method, url, body, params) {
    this.setRequestHeader();
    let _httpRequest = new HttpRequest(method, this.apiURL+url, body, {
      headers: this.requestHeader,
      params: params,
      responseType: 'json',
      reportProgress: true,
      withCredentials: false
    });
    console.log(_httpRequest);
    return new Promise((resolve, reject) => {
      this.http.request(_httpRequest).subscribe(
        data => {
          if (data['statusText'] == "OK" && data["body"]) {
            resolve(data);
          }
        },
        error => {
          reject(error);
        });
    });
  }

  getMethod(url, params) {
    console.log(params);
    if(params){
      url = url + '?';
      let keysArray = Object.keys(params);
      for (let i = 0; i < keysArray.length; i++) {
        url = url + keysArray[i] + '=' + params[keysArray[i]];
        if (i <= keysArray.length - 2) {
          url = url + '&';
        }
      }
    }
    return new Promise((resolve, reject) => {
      this.callMethods('GET', url, null, null)
        .then(
          (data) => {
            resolve(data);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }

  postMethod(url, body) {
    return new Promise((resolve, reject) => {
      this.callMethods('POST', url, body, null)
        .then(
          (data) => {
            resolve(data);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }

  putMethod(url, body) {
    return new Promise((resolve, reject) => {
      this.callMethods('PUT', url, body, null)
        .then(
          (data) => {
            resolve(data);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }
}
