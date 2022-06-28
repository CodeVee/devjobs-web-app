import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DialogService } from '@ngneat/dialog';
import { Subject, takeUntil } from 'rxjs';
import { JobFilter } from 'src/app/models/job.model';
import { SearchModalComponent } from '../search-modal/search-modal.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {

  @Output() filterChange = new EventEmitter<JobFilter>();
  filterForm!: FormGroup<FilterForm>;
  protected sub = new Subject<void>();
  constructor(private fb: FormBuilder, private dialog: DialogService) { }

  ngOnInit(): void {
    this.filterForm = this.fb.nonNullable.group({
      search: '',
      location: '',
      fullTime: [false]
    })
  }

  ngOnDestroy(): void {
    this.sub.next();
    this.sub.complete();
  }

  private getCurrentFilter(): JobFilter {
    const { search, location, fullTime } = this.filterForm.value;

    const filter: JobFilter = {
      search: search as string,
      location: location as string,
      fullTime: fullTime as boolean
    };
    return filter;
  }

  search(): void {
    const filter = this.getCurrentFilter();

    this.filterChange.emit(filter);
  }

  openFilter(): void {
    const filter = this.getCurrentFilter();
    const dialogRef = this.dialog.open(SearchModalComponent, {
      data: filter
    });

    dialogRef.afterClosed$.pipe(takeUntil(this.sub)).subscribe(result => {
      if (result) {
        this.filterForm.patchValue({
          location: result.location,
          fullTime: result.fullTime
        });
        this.search();
      }
    });
  }

}

interface FilterForm {
  search: FormControl<string>;
  location: FormControl<string>;
  fullTime: FormControl<boolean>;
}
