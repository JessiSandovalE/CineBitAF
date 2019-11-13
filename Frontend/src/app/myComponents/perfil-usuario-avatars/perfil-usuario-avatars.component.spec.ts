import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilUsuarioAvatarsComponent } from './perfil-usuario-avatars.component';

describe('PerfilUsuarioAvatarsComponent', () => {
  let component: PerfilUsuarioAvatarsComponent;
  let fixture: ComponentFixture<PerfilUsuarioAvatarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilUsuarioAvatarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilUsuarioAvatarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
