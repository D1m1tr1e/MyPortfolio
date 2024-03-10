import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNameSectionComponent } from './my-name-section.component';

describe('MyNameSectionComponent', () => {
  let component: MyNameSectionComponent;
  let fixture: ComponentFixture<MyNameSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyNameSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyNameSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
