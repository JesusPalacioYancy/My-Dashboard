import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-bottom-sheet-overview-sheet',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './bottom-sheet-overview-sheet.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomSheetOverviewSheetComponent {

  private _bottomSheetRef = inject<MatBottomSheetRef<BottomSheetOverviewSheetComponent>>(MatBottomSheetRef);

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
