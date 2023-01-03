import { Injectable } from '@angular/core';
import {HttpService} from '../http/http.service'
import {Environment} from '../environment/environment'

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private readonly http : HttpService) { }

  /**
   * Retrieves an array of JSON with information of repositories from an user specified by the input name
   * @param name is the name of the Github user
   * @returns an array of JSON with information of repositories 
   * @warning void array is not managed in the method
   */
  async retrievesRepoData(name : string){
    const url = "https://api.github.com/users/" + name + "/repos";
    return await this.http.getInvoke(url).toPromise();
  }

  /**
   * Function to filter data from the collection of JSON given in input from Github API
   * @param inputName is the name of the parsed github account
   * @returns a collection of JSON with parsed essential data
   */
  async getParsedRepoData(inputName : string){
    try{
      const env = new Environment();
      const name = env.githubName;
      if(name != inputName){
        console.error('Invalid name, github name didn\'t match with the environment value')
        return [];
      }
      const repositories = await this.retrievesRepoData(name);
      var data = []; // output data
      for(let repo of repositories){
        data.push({
          name : repo.name,
          fullName : repo.full_name,
          description : repo.description,
          url : repo.html_url,
          topics : repo.topics,
          updated : repo.updated_at,
        });
      }
      return data;
    } catch(e){
      console.error('Error during the GET invocation for data from', name, 'github account');
      return [];
    }
  }
}
