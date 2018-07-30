import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { baseURL } from '../shared/baseurl'

import { ProcessHttpmsgService } from './process-httpmsg.service';

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

interface AuthResponse {
  status: string,
  success: string
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient,
  private processHTTPMsgService: ProcessHttpmsgService) { }


  signUp(user: any): Observable<any> {
    return this.http.post<AuthResponse>(baseURL + 'user/signUp', 
    {"phone": user.phone, "password": user.password ,"pincode" : user.pincode, "name" : user.username, "address" : user.adress})
    .map(res => {
      return {'success': res.success, 'status' : res.status , 'username': user.name };
    })
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }


  checkJwt(): Observable<any> {
    return this.http.get<AuthResponse>(baseURL + 'user/jwt')
      .map(res => {
      return {'success': res.success, 'status' : res.status};
    })
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  

}
