import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryDetailsNewComponent } from './industry-details-new.component';

describe('IndustryDetailsNewComponent', () => {
  let component: IndustryDetailsNewComponent;
  let fixture: ComponentFixture<IndustryDetailsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustryDetailsNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustryDetailsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
