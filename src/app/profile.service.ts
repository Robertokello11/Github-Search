import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  users!: import("/home/moringa/Documents/Moringa-school-projects/Github-search/github/src/app/user").User;
  githubUser(searchMe: string) {
    throw new Error('Method not implemented.');
  }
  gitUserRepos(searchMe: string) {
    throw new Error('Method not implemented.');
  }

  private username:string;
  private clientId = '83c6c2b47ea64c3c24e4';
  private clientSecret = '4ac69186772cf4986634097fb6106cc8cf9d6c7f';
  getProfileRepo: any;
  // users!: import("/home/moringa/Documents/Moringa-school-projects/Github-search/github/src/app/user").User;
  

  constructor(private http:HttpClient) { 
    this.username ="Robertokello11"
  }
  //create new function to get all profile data from github
  getProfileData(){
    return this.http.get('https://api.github.com/users/Robertokello11');
  }
}
