import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Job, JobFilter } from 'src/app/models/job.model';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  filteredJobs: Job[] = [];
  private jobs: Job[] = [];
  protected sub = new Subject<void>();
  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.jobService.getJobs().pipe(takeUntil(this.sub))
    .subscribe(jobs => {
      this.jobs = jobs;
      this.filteredJobs = [...this.jobs];
    });
  }

  ngOnDestroy(): void {
    this.sub.next();
    this.sub.complete();
  }

  filterJobs(filter: JobFilter): void {
    this.filteredJobs = [...this.jobs];

    if (filter.search) {
      this.filteredJobs = this.filteredJobs.filter(job => {
        const search = filter.search.toLowerCase();
        return job.position.toLowerCase().includes(search) ||
                job.company.toLowerCase().includes(search)
      })
    }

    if (filter.location) {
      this.filteredJobs = this.filteredJobs.filter(job => {
        return job.location.toLowerCase().includes(filter.location.toLowerCase())
      })
    }

    if (filter.fullTime) {
      this.filteredJobs = this.filteredJobs.filter(job => job.contract === 'Full Time')
    }
  }

}
