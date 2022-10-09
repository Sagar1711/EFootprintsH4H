import { Injectable } from '@angular/core';
import { Trail } from './trail';

@Injectable({
  providedIn: 'root'
})
export class GraphDataService {

  dataList: Trail[] = [
    {
      name: 'Shell',
      subtitle: 'Oil Company',
      logo: '../../assets/logo1.svg',
      graphData: {
        labels: ['2016', '2017', '2018', '2019', '2020'],
        datasets: [
          {
            data: [72, 73, 71, 70, 63],
            label: 'Million Tonnes Co2',
            fill: true,
            tension: 0.5,
            borderColor: 'rgb(255,0,0)',
            backgroundColor: 'rgba(255,0,0,0.3)',
          },
          {
            data: [28, 27, 29, 30, 37],
            label: 'Custom rating out of 100',
            fill: true,
            tension: 0.5,
            borderColor: 'rgb(0,255,0)',
            backgroundColor: 'rgba(0,255,0,0.3)',
          },
        ],
      },
      chartOptions: {
        responsive:  true
      },
      comments: []
    },
    {
      name: 'Exxon Mobil',
      subtitle: 'Oil and Gas',
      logo: '../../assets/logo2.png',
      graphData: {
        labels: ['2016', '2017', '2018', '2019', '2020'],
        datasets: [
          {
            data: [93, 95, 97, 88, 85],
            label: 'Million Tonnes Co2',
            fill: true,
            tension: 0.5,
            borderColor: 'rgb(255,0,125)',
            backgroundColor: 'rgba(255,0,125,0.3)',
          },
          {
            data: [7, 5, 3, 12, 15],
            label: 'Custom rating out of 100',
            fill: true,
            tension: 0.5,
            borderColor: 'rgb(125,255,100)',
            backgroundColor: 'rgba(125,255,100,0.3)',
          },
        ],
      },
      chartOptions: {
        responsive:  true
      },
      comments: []
    },
    {
      name: 'company 3',
      subtitle: 'Food Company',
      logo: '../../assets/arizona-state-university-logo-vertical.png',
      graphData: {
        labels: ['2016', '2017', '2018', '2019', '2020'],
        datasets: [
          {
            data: [93, 95, 60, 53, 72],
            label: 'Million Tonnes Co2',
            fill: true,
            tension: 0.5,
            borderColor: 'rgb(3, 248, 252)',
            backgroundColor: 'rgba(3, 248, 252,0.3)',
          },
          {
            data: [7, 5, 40, 47, 28],
            label: 'Custom rating out of 100',
            fill: true,
            tension: 0.5,
            borderColor: 'rgb(3, 252, 148)',
            backgroundColor: 'rgba(3, 252, 148,0.3)',
          },
        ],
      },
      chartOptions: {
        responsive:  true
      },
      comments: []
    },
    {
      name: 'company 4',
      subtitle: 'Fashion Company',
      logo: '../../assets/arizona-state-university-logo-vertical.png',
      graphData: {
        labels: ['2016', '2017', '2018', '2019', '2020'],
        datasets: [
          {
            data: [63, 28, 15, 37, 57],
            label: 'Million Tonnes Co2',
            fill: true,
            tension: 0.5,
            borderColor: 'rgb(224, 13, 224)',
            backgroundColor: 'rgba(224, 13, 224,0.3)',
          },
          {
            data: [37, 72, 85, 63, 43],
            label: 'Custom rating out of 100',
            fill: true,
            tension: 0.5,
            borderColor: 'rgb(111, 13, 224)',
            backgroundColor: 'rgba(111, 13, 224,0.3)',
          },
        ],
      },
      chartOptions: {
        responsive:  true
      },
      comments: []
    },
    {
      name: 'company 5',
      subtitle: 'Media Company',
      logo: '../../assets/arizona-state-university-logo-vertical.png',
      graphData: {
        labels: ['2016', '2017', '2018', '2019', '2020'],
        datasets: [
          {
            data: [67, 79, 53, 42, 31],
            label: 'Million Tonnes Co2',
            fill: true,
            tension: 0.5,
            borderColor: 'rgb(255,0,125)',
            backgroundColor: 'rgba(255,0,125,0.3)',
          },
          {
            data: [33, 21, 47, 78, 69],
            label: 'Custom rating out of 100',
            fill: true,
            tension: 0.5,
            borderColor: 'rgb(125,255,100)',
            backgroundColor: 'rgba(125,255,100,0.3)',
          },
        ],
      },
      chartOptions: {
        responsive:  true
      },
      comments: []
    },
    {
      name: 'company 6',
      subtitle: 'E-commerce Company',
      logo: '../../assets/arizona-state-university-logo-vertical.png',
      graphData: {
        labels: ['2016', '2017', '2018', '2019', '2020'],
        datasets: [
          {
            data: [98, 95, 83, 77, 60],
            label: 'Million Tonnes Co2',
            fill: true,
            tension: 0.5,
            borderColor: 'rgb(224, 224, 13)',
            backgroundColor: 'rgba(224, 224, 13,0.3)',
          },
          {
            data: [2, 5, 27, 33, 40],
            label: 'Custom rating out of 100',
            fill: true,
            tension: 0.5,
            borderColor: 'rgb(13, 224, 213)',
            backgroundColor: 'rgba(13, 224, 213,0.3)',
          },
        ],
      },
      chartOptions: {
        responsive:  true
      },
      comments: []
    }
  ];
  constructor() { }
}
