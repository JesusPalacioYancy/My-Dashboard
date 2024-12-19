import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

  type Grade = 'A' | 'B' | 'F';

@Component({
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
})
export default class ControlFlowComponent {

  public showContent = signal(true);
  public grade = signal<Grade>('A');
  public frameworks = signal(['Angular', 'React', 'Vue', 'Svelte', 'Ember']);
  public frameworks2 = signal([]);

  public toogleContent() {
    this.showContent.update((value) => !value);
  };

  changeGrade(grade: Grade) {
    this.grade.set(grade);
  };



};