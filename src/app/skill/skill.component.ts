import { Component, OnInit } from '@angular/core';

export interface SkillElement {
  name: string;
  category: string;
  years: string;
  other: string;
}

const ELEMENT_DATA: SkillElement[] = [
  {name: 'HTML', category: 'フロントエンド', years: '1年', other: '業務で経験'},
  {name: 'CSS', category: 'フロントエンド', years: '1年', other: '業務で経験'},
  {name: 'JavaScript', category: 'フロントエンド', years: '1年未満', other: '業務で経験'},
  {name: 'Angular', category: 'フロントエンド', years: '1年未満', other: ''},
  {name: 'Node.js', category: 'バックエンド', years: '1年未満', other: '業務で経験'},
  {name: 'Ruby', category: 'バックエンド', years: '1年未満', other: '業務で経験'},
  {name: 'Rails', category: 'バックエンド', years: '1年未満', other: '業務で経験'},
  {name: 'PHP', category: 'バックエンド', years: '1年未満', other: ''},
  {name: 'Laravel', category: 'バックエンド', years: '1年未満', other: ''},
  {name: 'AWS', category: 'インフラ', years: '1年', other: '業務で経験'},
  {name: 'Apache', category: 'インフラ', years: '1年未満', other: '業務で経験'},
  {name: 'MySQL', category: 'DB', years: '1年未満', other: ''},
  {name: 'PostgreSQL', category: 'DB', years: '1年未満', other: ''},
  {name: 'CircleCI', category: 'その他', years: '1年未満', other: ''},
  {name: 'Heroku', category: 'その他', years: '1年未満', other: ''},
];

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['name', 'category', 'years', 'other'];
  dataSource = ELEMENT_DATA;

}
