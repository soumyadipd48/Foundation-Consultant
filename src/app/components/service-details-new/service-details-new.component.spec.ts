import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetailsNewComponent } from './service-details-new.component';

describe('ServiceDetailsNewComponent', () => {
  let component: ServiceDetailsNewComponent;
  let fixture: ComponentFixture<ServiceDetailsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDetailsNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDetailsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
