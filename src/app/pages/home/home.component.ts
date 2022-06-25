import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from 'src/app/models/job.model';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  jobs$!: Observable<Job[]>;
  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.jobs$ = this.jobService.getJobs();
  }

}
