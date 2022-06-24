import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
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
    .pipe(tap(res => this.jobs = res));
  }

  getJob(jobId: string): Observable<Job> {
    console.log(jobId);

    const job = this.jobs.find(c => true)!;
    return of(job)
  }
}




@Injectable({ providedIn: 'root' })
export class DataService {


}
