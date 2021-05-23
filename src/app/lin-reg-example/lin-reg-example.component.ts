import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Tensor, tensor2d, sequential, layers } from '@tensorflow/tfjs'
import { render } from '@tensorflow/tfjs-vis';
import { CarService } from 'src/app/shared/services/car/car.service'

@Component({
  selector: 'app-lin-reg-example',
  templateUrl: './lin-reg-example.component.html',
  styleUrls: ['./lin-reg-example.component.scss']
})
export class LinRegExampleComponent implements OnInit, AfterViewInit {

  readonly trainData = {
    sizeMB:  [0.080, 9.000, 0.001, 0.100, 8.000,
              5.000, 0.100, 6.000, 0.050, 0.500,
              0.002, 2.000, 0.005, 10.00, 0.010,
              7.000, 6.000, 5.000, 1.000, 1.000],
    timeSec: [0.135, 0.739, 0.067, 0.126, 0.646,
              0.435, 0.069, 0.497, 0.068, 0.116,
              0.070, 0.289, 0.076, 0.744, 0.083,
              0.560, 0.480, 0.399, 0.153, 0.149]
  };

  readonly testData = {
    sizeMB:  [5.000, 0.200, 0.001, 9.000, 0.002,
              0.020, 0.008, 4.000, 0.001, 1.000,
              0.005, 0.080, 0.800, 0.200, 0.050,
              7.000, 0.005, 0.002, 8.000, 0.008],
    timeSec: [0.425, 0.098, 0.052, 0.686, 0.066,
              0.078, 0.070, 0.375, 0.058, 0.136,
              0.052, 0.063, 0.183, 0.087, 0.066,
              0.558, 0.066, 0.068, 0.610, 0.057]
  };

  trainTensors: any;
  testTensors: any;
  x: any;

  readonly model = sequential();

  constructor(public cService: CarService) {
    this.trainTensors = {
      sizeMB: tensor2d(this.trainData.sizeMB, [20, 1]),
      timeSec: tensor2d(this.trainData.timeSec, [20, 1])
    };
    this.testTensors = {
      sizeMB: tensor2d(this.testData.sizeMB, [20, 1]),
      timeSec: tensor2d(this.testData.timeSec, [20, 1])
    };

    this.model.add(layers.dense({inputShape: [1], units: 1}));
    this.model.compile({optimizer: 'sgd', loss: 'meanAbsoluteError'});
    this.x = this.cService;
    console.log(this.cService.test(), "constr");
   }

  ngOnInit(): void {
   console.log(this.cService.test(), "ngOnInit");
  }

  ngAfterViewInit(): void {
    console.log(this.cService.test(), "ngAfterViewInit");
    this.run();   
  }


   run() {
    // Load and plot the original input data that we are going to train on.
    var x = this.cService.getData().subscribe(t => {
      const cleaned = t.map((car: any) => ({
        mpg: car.Miles_per_Gallon,
        horsepower: car.Horsepower,
      }))
      .filter((car: any) => (car.mpg != null && car.horsepower != null));
      
      const values = cleaned.map((d: any) => ({
        x: d.horsepower,
        y: d.mpg,
      }));
    
      render.scatterplot(
        {name: 'Horsepower v MPG'},
        {values}, 
        {
          xLabel: 'Horsepower',
          yLabel: 'MPG',
          height: 300
        }
      );

    })

  
    // More code will be added below
  }
  
  

}
