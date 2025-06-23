import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewRecordModalComponent } from './new-record-modal.component';

describe('NewRecordModalComponent', () => {
  let component: NewRecordModalComponent;
  let fixture: ComponentFixture<NewRecordModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NewRecordModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewRecordModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
