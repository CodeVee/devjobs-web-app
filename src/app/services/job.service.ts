import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  jobs: Job[] = [];
  private jsonURL = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    if (this.jobs.length) {
      return of(this.jobs);
    }

    return this.http.get<Job[]>(this.jsonURL)
    .pipe(tap(jobs => this.jobs = jobs));
  }

  getJob(jobId: number): Observable<Job> {
    const job = this.jobs.find(c => c.id === jobId);
    if (job) {
      return of(job);
    }

    return this.getJobs().pipe(switchMap(jobs => of(jobs.find(c => c.id === jobId)!)))
  }
}




@Injectable({ providedIn: 'root' })
export class DataService {


}
