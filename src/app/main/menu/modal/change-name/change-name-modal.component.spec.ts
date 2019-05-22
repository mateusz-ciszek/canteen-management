import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeNameModalComponent } from './change-name-modal.component';

describe('ChangeNameModalComponent', () => {
  let component: ChangeNameModalComponent;
  let fixture: ComponentFixture<ChangeNameModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeNameModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeNameModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
