import {Component, OnDestroy, OnInit} from '@angular/core';
import {People, PersonService} from '../services/PersonService';

@Component({
  selector: 'pm-basic-table',
  templateUrl: './ranking.component.html',
  providers: [PersonService]
})
export class RankingComponent implements OnDestroy, OnInit {
  showAcknowledgment = false;
  people: People[];
  _listFilter: string;
  private readonly comparator = (a, b) => b.points - a.points;


  constructor(private personService: PersonService) { }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.people = this.performFilter(value);
  }

  toggleAcknowledgment(): void {
    this.showAcknowledgment = !this.showAcknowledgment;
  }

  performFilter(value: string): People[] {
    return this.personService.getPerson().filter(p => p.name.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1
      || p.team.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1)
      .sort(this.comparator);
  }


  onValueChange(person: People, points: number): void {
    console.log('new points for ' + person.name + ' is ' + points);
    person.points = points;
    this.people.sort(this.comparator);
  }

  ngOnDestroy(): void {
    console.log('OnDestroy destroy');
  }

  ngOnInit(): void {
    console.log('OnInit init');
    this.people = this.personService.getPerson().sort(this.comparator);
  }
}
