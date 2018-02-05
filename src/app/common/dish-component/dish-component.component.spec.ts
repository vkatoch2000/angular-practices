import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishComponentComponent } from './dish-component.component';

describe('DishComponentComponent', () => {
  let component: DishComponentComponent;
  let fixture: ComponentFixture<DishComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
