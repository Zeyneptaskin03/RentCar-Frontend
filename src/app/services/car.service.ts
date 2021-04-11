  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { Car } from '../models/car';
  import { ListResponseModel } from '../models/listResponseModel';
  
  @Injectable({
    providedIn: 'root'
  })
  export class CarService {
  
    apiUrl='https://localhost:44340/api/'
  
    constructor(private httpClient: HttpClient) { }
  
    getCars():Observable<ListResponseModel<Car>>{
      let newPath = this.apiUrl + 'cars/getall'
      return this.httpClient.get<ListResponseModel<Car>>(newPath)
    }
    getCarDetails():Observable<ListResponseModel<Car>>{
      return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl+ 'cars/getcardetails')
    }

    getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
      let newPath = this.apiUrl + 'cars/getbybrand?brandId=' + brandId
      return this.httpClient.get<ListResponseModel<Car>>(newPath)
    }
    getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
      let newPath = this.apiUrl + 'cars/getbycolor?colorId=' + colorId
      return this.httpClient.get<ListResponseModel<Car>>(newPath)
    }
    getCarDetailByCarId(carId:number):Observable<ListResponseModel<Car>>{
      let newPath=this.apiUrl+"cars/getcardetailbycarid?carId="+carId
      return this.httpClient.get<ListResponseModel<Car>>(newPath);
    }
    
  }