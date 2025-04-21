import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempletFormComponent } from './templet-form.component';

describe('TempletFormComponent', () => {
  let component: TempletFormComponent;
  let fixture: ComponentFixture<TempletFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempletFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempletFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
