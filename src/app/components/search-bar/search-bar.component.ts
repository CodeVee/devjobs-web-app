import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { JobFilter } from 'src/app/models/job.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() filterChange = new EventEmitter<JobFilter>();
  filterForm!: FormGroup<FilterForm>;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.filterForm = this.fb.nonNullable.group({
      search: '',
      location: '',
      fullTime: [false]
    })
  }

  search(): void {
    const { search, location, fullTime } = this.filterForm.value;

    const filter: JobFilter = {
      search: search as string,
      location: location as string,
      fullTime: fullTime as boolean
    };

    this.filterChange.emit(filter);
  }

}

interface FilterForm {
  search: FormControl<string>;
  location: FormControl<string>;
  fullTime: FormControl<boolean>;
}
