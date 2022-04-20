import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlterarComponent } from './form-alterar.component';

describe('FormAlterarComponent', () => {
  let component: FormAlterarComponent;
  let fixture: ComponentFixture<FormAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAlterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
