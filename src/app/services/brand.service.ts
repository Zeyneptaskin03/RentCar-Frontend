import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
apiUrl = "https://localhost:44340/api/brands/"
  constructor(private httpClient:HttpClient) { }
  
  getBrands():Observable<ListResponseModel<Brand>>{
   return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl+ 'getall');
  }
}