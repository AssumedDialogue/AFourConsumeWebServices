import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindBookComponent } from './find-book.component';

describe('FindBookComponent', () => {
  let component: FindBookComponent;
  let fixture: ComponentFixture<FindBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
