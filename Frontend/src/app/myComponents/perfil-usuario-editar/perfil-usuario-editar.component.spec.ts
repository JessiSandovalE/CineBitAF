import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilUsuarioEditarComponent } from './perfil-usuario-editar.component';

describe('PerfilUsuarioEditarComponent', () => {
  let component: PerfilUsuarioEditarComponent;
  let fixture: ComponentFixture<PerfilUsuarioEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilUsuarioEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilUsuarioEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
