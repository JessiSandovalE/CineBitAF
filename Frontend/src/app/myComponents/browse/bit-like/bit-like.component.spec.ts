import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitLikeComponent } from './bit-like.component';

describe('BitLikeComponent', () => {
  let component: BitLikeComponent;
  let fixture: ComponentFixture<BitLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
