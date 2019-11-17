import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAdminAgregarComponent } from './perfil-admin-agregar.component';

describe('PerfilAdminAgregarComponent', () => {
  let component: PerfilAdminAgregarComponent;
  let fixture: ComponentFixture<PerfilAdminAgregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilAdminAgregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilAdminAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
