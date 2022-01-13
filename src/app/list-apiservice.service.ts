import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ListAPIserviceService {

  constructor(private http:HttpClient) { }

  getData()
  {
  let url = "https://api.sampleapis.com/futurama/characters"
  return this.http.get(url);
  }
}
