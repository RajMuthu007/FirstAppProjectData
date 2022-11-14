import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingdataComponent } from './sortingdata.component';

describe('SortingdataComponent', () => {
  let component: SortingdataComponent;
  let fixture: ComponentFixture<SortingdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortingdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortingdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
