import { trigger, transition, style, animate } from '@angular/animations';
import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCode,
  faLaptopCode,
  faDatabase,
  faServer,
  faGraduationCap,
  faBriefcase,
  faInfinity,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [FontAwesomeModule, NgIf, NgClass],
  animations: [
    trigger('educationInsertRemoveTrigger', [
      transition(':enter', [
        animate(
          '300ms ease-out',
          style({ opacity: 0, transform: 'translateX(-100%)' })
        ),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'translateX(0%)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-out',
          style({ opacity: 0, transform: 'translateX(100%)' })
        ),
      ]),
    ]),
    trigger('workInsertRemoveTrigger', [
      transition(':enter', [
        animate(
          '300ms ease-out',
          style({ opacity: 0, transform: 'translateX(-100%)' })
        ),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'translateX(0%)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-out',
          style({ opacity: 0, transform: 'translateX(-100%)' })
        ),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'portfolio';
  faLaptopCode = faLaptopCode;
  faCode = faCode;
  faDB = faDatabase;
  faServer = faServer;
  faCap = faGraduationCap;
  faWork = faBriefcase;
  faDevops = faInfinity;

  isEducation = true;
  isWork = false;

  onClickToggle(key: any) {
    if (key === 'qualification') {
      this.isWork = false;
      this.isEducation = true;
    }
    if (key === 'work') {
      this.isWork = true;
      this.isEducation = false;
    }
  }
}
