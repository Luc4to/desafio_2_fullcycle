import { Injectable } from '@nestjs/common';

import { Route } from './types';

@Injectable()
export class AppService {
  getRoutes(): Route[] {
    return [
      {
        id: 1,
        title: 'Ponto 1',
        startPosition: { lat: -24.478504, lng: -46.675092 },
        endPosition: { lat: -24.479129, lng: -46.675685 },
      },
      {
        id: 2,
        title: 'Ponto 2',
        startPosition: { lat: -24.479607, lng: -46.675932 },
        endPosition: { lat: -24.480017, lng: -46.676045 },
      },
      {
        id: 3,
        title: 'Ponto 3',
        startPosition: { lat: -24.480466, lng: -46.676109 },
        endPosition: { lat: -24.480876, lng: -46.676071 },
      },
      {
        id: 4,
        title: 'Ponto 4',
        startPosition: { lat: -24.481501, lng: -46.675942 },
        endPosition: { lat: -24.482092, lng: -46.675792 },
      },
      {
        id: 5,
        title: 'Ponto 5',
        startPosition: { lat: -24.483186, lng: -46.676054 },
        endPosition: { lat: -24.484378, lng: -46.676071 },
      },
    ];
  }
}
