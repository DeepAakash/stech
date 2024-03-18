// multilingual.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MultilingualService {
  private baseUrl = 'http://139.99.62.139:3000/0608T/D10P21';

  constructor(private http: HttpClient) {}

  getUserDetails(): Observable<any> {
    return this.http.get(`${this.baseUrl}/CAF2481BFE584C38FB29114F5DEF5`);
  }

  getHeaderData(countryCode: string, langCode: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getMenuMaster`, {
      params: {
        country_code: countryCode,
        lng_code: langCode
      }
    });
  }

  getPageData(sessionId: string, countryCode: string, pageId: string, langCode: string, sectionId: string): Observable<any> {
    const params = {
      session_id: sessionId,
      country_code: countryCode,
      page_id: pageId,
      lng_code: langCode,
      section_id: sectionId,
    };
    return this.http.get(`${this.baseUrl}/7ADC224AC32E8`, { params });
  }
  
  getFooterData(countryCode: string, langCode: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getFooterData`, {
      params: {
        country_code: countryCode,
        lng_code: langCode
      }
    });
  }
}
