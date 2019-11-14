import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedPeliComponent } from './selected-peli.component';

describe('SelectedPeliComponent', () => {
  let component: SelectedPeliComponent;
  let fixture: ComponentFixture<SelectedPeliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedPeliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedPeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
