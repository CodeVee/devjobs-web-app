import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { Job } from 'src/app/models/job.model';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-info',
  templateUrl: './job-info.component.html',
  styleUrls: ['./job-info.component.scss']
})
export class JobInfoComponent implements OnInit, OnDestroy {

  job!: Job;
  protected sub = new Subject<void>();
  constructor(private route: ActivatedRoute, private jobService: JobService) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntil(this.sub), switchMap(params => {
      const id = +(params.get('id') as string);
      return this.jobService.getJob(id);
    }))
    .subscribe(job => this.job = job);
  }

  ngOnDestroy(): void {
    this.sub.next();
    this.sub.complete();
  }

}
