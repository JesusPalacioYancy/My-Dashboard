import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title title="Change Detection - {{ currentFramework() }}"/>

    <pre> {{ frameworkAsSignal() | json }} </pre>
    <pre> {{ frameworkAsProperty | json }} </pre>

  `,
})
export default class ChangeDetectionComponent { 

  public frameworkAsSignal = signal({
    name: 'Angular',
    version: '12.0.0',
  });

  public frameworkAsProperty = {
    name: 'Angular',
    version: '12.0.0',
  };

  public currentFramework = computed(() => this.frameworkAsSignal().name);

  constructor() {
    setTimeout(() => {
      // this.frameworkAsProperty.name = 'React';
      this.frameworkAsSignal.update(value => ({ ...value, name: 'React' }));
      console.log('Hecho')
    }, 3000);

  }

}
