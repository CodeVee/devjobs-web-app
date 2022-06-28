import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DialogRef } from '@ngneat/dialog';
import { JobFilter } from 'src/app/models/job.model';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchModalComponent implements OnInit {

  locationCtrl = new FormControl('');
  fullTimeCtrl = new FormControl(false);
  data: JobFilter;
  constructor(public ref: DialogRef<JobFilter, JobFilter>) {
    this.data = this.ref.data;
    this.locationCtrl.setValue(this.data.location);
    this.fullTimeCtrl.setValue(this.data.fullTime);
   }

  ngOnInit(): void {
    const c = this.ref.data
  }

  search(): void {
    const result = {
      ...this.data,
      location: this.locationCtrl.value,
      fullTime: this.fullTimeCtrl.value
    } as JobFilter
    this.ref.close(result);
  }

}
