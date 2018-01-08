import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoopComponent } from './woop.component';

describe('WoopComponent', () => {
  let component: WoopComponent;
  let fixture: ComponentFixture<WoopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
