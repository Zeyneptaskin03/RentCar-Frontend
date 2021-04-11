import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/carimage.service';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  apiUrl = 'https://localhost:44340/';
  images: CarImage[] = [];
  carDetails: Car[];

  constructor(
    private carService: CarService,
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetailByCarId(params['carId']);
        this.getImagesByCarId(params['carId']);
      }
    });
  }

  getCarDetailByCarId(carId: number) {
    this.carService.getCarDetailByCarId(carId).subscribe((response) => {
      this.carDetails = response.data;
    });
  }

  getImagesByCarId(carId: number) {
    this.carImageService.getImagesByCarId(carId).subscribe((response) => {
      this.images = response.data;
    });
  }

}
