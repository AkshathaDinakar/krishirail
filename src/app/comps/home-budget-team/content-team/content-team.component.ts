import { Component } from '@angular/core';

@Component({
  selector: 'app-content-team',
  templateUrl: './content-team.component.html',
  styleUrls: ['./content-team.component.css']
})
export class ContentTeamComponent {

  Team = [
    {
      username: 'User1',
      position: 'Senior Developer',
      image: '/assets/call/user1.jpg',
    },
    {
      username: 'User2',
      position: 'Junior Developer',
      image: '/assets/call/user2.jpg',
    },
    {
      username: 'User3',
      position: 'Project Manager',
      image: '/assets/call/user3.jpg',
    },
    {
      username: 'User4',
      position: 'Frontend Developer',
      image: '/assets/call/user4.jpg',
    },
    {
      username: 'User5',
      position: 'Backend Developer',
      image: '/assets/call/user5.jpg',
    },
    {
      username: 'User6',
      position: 'UX Designer',
      image: '/assets/call/user6.jpg',
    },
    {
      username: 'User7',
      position: 'Product Manager',
      image: '/assets/call/user7.jpg',
    },
    {
      username: 'User8',
      position: 'QA Engineer',
      image: '/assets/call/user8.jpg',
    },
    {
      username: 'User9',
      position: 'Data Analyst',
      image: '/assets/call/user9.jpg',
    },
    {
      username: 'User10',
      position: 'Software Architect',
      image: '/assets/call/user10.jpg',
    },
  ];
  
}
