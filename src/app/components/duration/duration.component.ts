import { Component, OnInit, ViewChild } from '@angular/core';
import { DurationPipe } from '../../shared/pipes/duration.pipe';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss'],
  providers: [DurationPipe]
})
export class DurationComponent implements OnInit {

  duration: string;
  constructor(private durationPipe: DurationPipe) { }

  ngOnInit() {
  }

  calcDuration($event){
    console.log($event.srcElement.value)
    this.duration = this.durationPipe.transform($event.srcElement.value);
  }

}
