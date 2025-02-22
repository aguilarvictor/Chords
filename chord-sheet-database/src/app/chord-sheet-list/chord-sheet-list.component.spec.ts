import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordSheetListComponent } from './chord-sheet-list.component';

describe('ChordSheetListComponent', () => {
  let component: ChordSheetListComponent;
  let fixture: ComponentFixture<ChordSheetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChordSheetListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChordSheetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
