import { TestBed } from '@angular/core/testing';

import { contenidoService } from '../Servicios/contenido.service';

describe('contenidoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: contenidoService = TestBed.get(contenidoService);
    expect(service).toBeTruthy();
  });
});
