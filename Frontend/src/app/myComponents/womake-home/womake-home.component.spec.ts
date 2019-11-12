import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomakeHomeComponent } from './womake-home.component';

describe('WomakeHomeComponent', () => {
  let component: WomakeHomeComponent;
  let fixture: ComponentFixture<WomakeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomakeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomakeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
