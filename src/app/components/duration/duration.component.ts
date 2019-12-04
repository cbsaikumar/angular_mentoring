import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DurationPipe } from '../../shared/pipes/duration.pipe';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss'],
  providers: [DurationPipe]
})
export class DurationComponent implements OnInit {

  @Input() duration: number;
  output: string;
  constructor(private durationPipe: DurationPipe) { }

  ngOnInit() {
    this.output = this.durationPipe.transform(this.duration);
  }

  calcOutput(){
    this.output = this.durationPipe.transform(this.duration);
  }

}
