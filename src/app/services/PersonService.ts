import {Injectable} from '@angular/core';

export interface People {
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

@Injectable({
  providedIn: 'root'
})
export class PersonService{
  getPerson(): People[] {
    return CHARLIE;
  }
}
