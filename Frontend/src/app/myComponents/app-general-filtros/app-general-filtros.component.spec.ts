import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGeneralFiltrosComponent } from './app-general-filtros.component';

describe('AppGeneralFiltrosComponent', () => {
  let component: AppGeneralFiltrosComponent;
  let fixture: ComponentFixture<AppGeneralFiltrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppGeneralFiltrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppGeneralFiltrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
