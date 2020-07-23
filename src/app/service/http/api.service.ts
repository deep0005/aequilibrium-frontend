import { UrlService } from './url.service';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private urlService: UrlService, private http: HttpClient) { }

  /**
   * Get transformers team
   */
  getTransformers = (type: string) => {
    const httpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
    })
    return this.http.get<any>(this.urlService.insertQueryParamToUrl(this.urlService.GET_TRANSFORMERS, {
      type: type
    }), { headers: httpHeaders });
  }
  
  /**
   * Get fight results
   */
  getFightResults = (payload: any) => {
    const httpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
    })
    return this.http.post<any>(this.urlService.GET_FIGHT_RESULTS, payload, { headers: httpHeaders });
  }
}
