import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Theme } from 'src/app/models/theme.enum';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  toggleCtrl = new FormControl(false);
  protected sub = new Subscription();
  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.sub = this.toggleCtrl.valueChanges.subscribe(darkMode => {
      if (darkMode) {
        this.themeService.changeTheme(Theme.Dark)
      }

      if (!darkMode) {
        this.themeService.changeTheme(Theme.Light)
      }
    });
    this.checkTheme();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private checkTheme(): void {
    const themeStr = localStorage.getItem(this.themeService.key) || '';
    if (!themeStr) {
      return;
    }
    const darkMode = themeStr === Theme.Dark;
    if (darkMode) {
      setTimeout(() => {
        this.toggleCtrl.setValue(true);
      });
    }
  }

}
