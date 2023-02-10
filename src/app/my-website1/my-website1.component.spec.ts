import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWebsite1Component } from './my-website1.component';

describe('MyWebsite1Component', () => {
  let component: MyWebsite1Component;
  let fixture: ComponentFixture<MyWebsite1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyWebsite1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyWebsite1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
