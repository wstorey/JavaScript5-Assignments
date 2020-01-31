import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { SafePipe } from './safe.pipe';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentFilterPipe } from './content-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    SafePipe,
    ContentListComponent,
    ContentFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
