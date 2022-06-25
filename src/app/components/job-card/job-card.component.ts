import { Component, Input } from '@angular/core';
import { Job } from 'src/app/models/job.model';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent {

  @Input() job!: Job;
}
