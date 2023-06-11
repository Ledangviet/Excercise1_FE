import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaildialogComponent } from './detaildialog.component';

describe('DetaildialogComponent', () => {
  let component: DetaildialogComponent;
  let fixture: ComponentFixture<DetaildialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetaildialogComponent]
    });
    fixture = TestBed.createComponent(DetaildialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
