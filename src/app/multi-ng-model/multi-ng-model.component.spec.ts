import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiNgModelComponent } from './multi-ng-model.component';

describe('MultiNgModelComponent', () => {
  let component: MultiNgModelComponent;
  let fixture: ComponentFixture<MultiNgModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiNgModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiNgModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
