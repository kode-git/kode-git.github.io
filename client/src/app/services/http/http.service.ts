import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private readonly http : HttpClient) { }

  /**
   * Invocation of a GET request to the url specified in input
   * @param url is the url for the request
   * @returns the response from the GET request
   */
  getInvoke(url : string) {
    return this.http.get(url).pipe(map((val: any) => {
      return val;
    }));
  }

  /**
   * Invocation of a POST request to the url specified in input with the body given by the invocation
   * @param url is the url of the endpoint for the request
   * @param payload is the request payload inside the HTTP request
   * @returns the response of the invocation
   */
  postInvoke(url : string, payload : any){
    return this.http.post(url, payload).pipe(map((val: any) => {
      return val;
    }));
  }

}
