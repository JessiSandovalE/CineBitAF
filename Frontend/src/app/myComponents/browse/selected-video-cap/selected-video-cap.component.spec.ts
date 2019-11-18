import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedVideoCapComponent } from './selected-video-cap.component';

describe('SelectedVideoCapComponent', () => {
  let component: SelectedVideoCapComponent;
  let fixture: ComponentFixture<SelectedVideoCapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedVideoCapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedVideoCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
