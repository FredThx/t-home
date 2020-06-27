import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDatasComponent } from './view-datas.component';

describe('ViewDatasComponent', () => {
  let component: ViewDatasComponent;
  let fixture: ComponentFixture<ViewDatasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDatasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
