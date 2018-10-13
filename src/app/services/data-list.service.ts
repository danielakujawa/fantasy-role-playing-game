import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataListService {

  private baseUrl = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

  constructor(private httpClient: HttpClient) { }

    getAllGnomes(): Promise<any> {
      return this.httpClient.get(`${this.baseUrl}`)
      .toPromise();
    }

    getByProfession(value): Promise<any> {
      return this.httpClient.get(`${this.baseUrl}`)
      .toPromise();
    }
  }
