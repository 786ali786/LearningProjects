import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildComponentComponent } from './view-child-component.component';

describe('ViewChildComponentComponent', () => {
  let component: ViewChildComponentComponent;
  let fixture: ComponentFixture<ViewChildComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
