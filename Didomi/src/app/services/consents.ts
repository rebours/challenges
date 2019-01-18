import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../../environments/environment";

export class customers {
  public static custom = [
    { name: 'pierre-louis', email: "pierre-louis.rebours@epitech.eu", consents: 'Receive newsletter.' },
    { name: 'Alain', email: "alain.schmits@gmail.fr", consents: 'Receive newsletter. Be shown targeted ads.' }]
}


@Injectable()
export class ConsentsServices {


  url = environment.url;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };

  constructor(private http: HttpClient) {
  }

  getAllConsent() {
    return (customers.custom);
    // simulation get data;
    // const url = this.url + '/consents';
    // return this.http.get(url, this.httpOptions);
  }


  addNewConsent(requestBody) {
    customers.custom.push({
      name: requestBody.name,
      email: requestBody.email,
      consents: requestBody.consents
    });
    // simulation post data
    // const url = this.url + '/consent';
    // return this.http.post(url, requestBody, this.httpOptions);
  }

}
