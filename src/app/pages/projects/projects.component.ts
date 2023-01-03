import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github/github.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  repos: any[];
  constructor(private readonly githubService: GithubService) { }

  async ngOnInit(): Promise<void> {
    this.repos = await this.githubService.getParsedRepoData('kode-git');
    var i = 0
    for(var repo of this.repos){
      if(i % 2 == 0){
        repo.color = '#ECECEC'
      } else {
        repo.color = '#FAFAFA'
      }
      i++;
    }
  }


}
