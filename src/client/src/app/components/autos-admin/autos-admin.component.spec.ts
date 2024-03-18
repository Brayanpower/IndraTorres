import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutosAdminComponent } from './autos-admin.component';

describe('AutosAdminComponent', () => {
  let component: AutosAdminComponent;
  let fixture: ComponentFixture<AutosAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutosAdminComponent]
    });
    fixture = TestBed.createComponent(AutosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
