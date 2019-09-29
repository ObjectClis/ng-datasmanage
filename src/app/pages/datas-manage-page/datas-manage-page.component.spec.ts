import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasManagePageComponent } from './datas-manage-page.component';

describe('DatasManagePageComponent', () => {
  let component: DatasManagePageComponent;
  let fixture: ComponentFixture<DatasManagePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasManagePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasManagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
