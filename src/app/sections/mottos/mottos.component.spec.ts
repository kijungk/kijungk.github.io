import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MottosComponent } from './mottos.component';

describe('MottosComponent', () => {
  let component: MottosComponent;
  let fixture: ComponentFixture<MottosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MottosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MottosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
