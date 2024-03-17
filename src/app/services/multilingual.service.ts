import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MultilingualService {
  private baseUrl = 'http://139.99.62.139:3000/0608T/D10P21';

  constructor(private http: HttpClient) {}

  getUserDetails(token: string): Observable<any> {
    const url = `${this.baseUrl}/${token}/CAF2481BFE584C38FB29114F5DEF5`;
    return this.http.get<any>(url);
  }

  getMultilingualData(
    token: string,
    sessionId: string,
    countryCode: string,
    pageId: string,
    langCode: string,
    sectionId: string
  ): Observable<any> {
    const url = `${this.baseUrl}/${token}/7ADC224AC32E8`;
    const params = {
      session_id: sessionId,
      country_code: countryCode,
      page_id: pageId,
      lng_code: langCode,
      section_id: sectionId,
    };
    return this.http.get<any>(url, { params });
  }
}
