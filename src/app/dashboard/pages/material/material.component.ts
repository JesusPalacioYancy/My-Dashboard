import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { BottomSheetOverviewSheetComponent } from './ui/bottom-sheet-overview-sheet/bottom-sheet-overview-sheet.component';

@Component({
  selector: 'app-material',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatBottomSheetModule,
  ],
  templateUrl: './material.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MaterialComponent { 
  
  private _bottomSheet = inject(MatBottomSheet);

  openBottomSheet() {
    this._bottomSheet.open(BottomSheetOverviewSheetComponent);
  }
}
