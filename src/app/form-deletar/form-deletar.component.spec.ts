import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDeletarComponent } from './form-deletar.component';

describe('FormDeletarComponent', () => {
  let component: FormDeletarComponent;
  let fixture: ComponentFixture<FormDeletarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDeletarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
