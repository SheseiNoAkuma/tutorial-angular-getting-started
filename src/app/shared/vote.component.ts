import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'pm-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnChanges {
  constructor() { }
  @Input() _value;
  @Output() notify: EventEmitter<number> = new EventEmitter<number>();
  get value(): number {
    return this._value;
  }
  set value(value: number) {
    this._value = value;
  }
  plus(): void {
    this.value++;
    this.notify.emit(this.value);
  }
  minus(): void {
    this.value--;
    this.notify.emit(this.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
}
