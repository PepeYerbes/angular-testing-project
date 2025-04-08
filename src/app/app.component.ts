import { Component } from '@angular/core';
import { TaskListComponent } from "./task-list/task-list.component";
import { TaskItemComponent } from "./task-item/task-item.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [TaskListComponent, TaskItemComponent],
  standalone: true,
})
export class AppComponent {
  title = 'angular-testing-project';

 
}
