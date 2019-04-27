import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeModalComponent } from './create-employee-modal.component';

describe('CreateEmployeeModalComponent', () => {
  let component: CreateEmployeeModalComponent;
  let fixture: ComponentFixture<CreateEmployeeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEmployeeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
