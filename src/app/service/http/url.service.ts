import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  SERVER_URL = "http://" + location.hostname + ":8080/";
  GET_TRANSFORMERS = this.SERVER_URL + "transformer";
  GET_FIGHT_RESULTS = this.SERVER_URL + "match/fight";


   /**
    * Convert object to queryparam string
    */
  insertQueryParamToUrl = (url: string, params: any) => {
    if(params){
      return url + "?" + Object.keys(params).map(key => {
        return (key + "=" + params[key]);
      }).join("&");
    }else{
      return url;
    }
  }
}
