import {Component, OnDestroy, OnInit} from '@angular/core';

interface People {
  name: string;
  icon: string;
  points: number;
  team: string;
  teamIcon: string;
}

const CHARLIE: People[] = [
  {
    name: 'Giorgio',
    icon: 'assets/images/pill.png',
    points: 4,
    team: 'Charlie',
    teamIcon: 'assets/images/chicken.png'
  },
  {
    name: 'Marco',
    icon: 'assets/images/cucumber.png',
    points: 3,
    team: 'Charlie',
    teamIcon: 'assets/images/chicken.png'
  },
  {
    name: 'CristianBe',
    icon: 'assets/images/pill.png',
    points: 4,
    team: 'Charlie',
    teamIcon: 'assets/images/chicken.png'
  },
  {
    name: 'CristianBu',
    icon: 'assets/images/trophy.png',
    points: 5,
    team: 'Charlie',
    teamIcon: 'assets/images/chicken.png'
  },
  {
    name: 'Claudio',
    icon: 'assets/images/cucumber.png',
    points: 3,
    team: 'Charlie',
    teamIcon: 'assets/images/chicken.png'
  }
];

@Component({
  selector: 'pm-basic-table',
  templateUrl: './ranking.component.html'
})
export class RankingComponent implements OnDestroy, OnInit {
  showAcknowledgment = false;
  people = CHARLIE.sort((a, b) => b.points - a.points);
  listFilter: string;

  toggleAcknowledgment(): void {
    this.showAcknowledgment = !this.showAcknowledgment;
  }

  ngOnDestroy(): void {
    console.log('OnDestroy destroy');
  }

  ngOnInit(): void {
    console.log('OnInit init');
  }
}
