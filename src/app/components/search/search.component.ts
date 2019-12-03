import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() search:EventEmitter<string> = new EventEmitter();
  public inputText: string;
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.search.emit(this.inputText)
  }

}
