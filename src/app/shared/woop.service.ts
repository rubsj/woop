import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Woop} from "./woop.model";

const BASE_URL = 'http://localhost:3004/woops/';
const HEADER = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable()
export class WoopService {
  /*  woopList = [
   { wish : "Wish 1" , outcome : "Outcome for wish 1"},
   { wish : "Wish 2" , outcome : "Outcome for wish 2"},
   { wish : "Wish 3" , outcome : "Outcome for wish 3"},
   { wish : "Wish 4" , outcome : "Outcome for wish 4"},
   { wish : "Wish 5" , outcome : "Outcome for wish 5"}
   ];

   loadWishes(){
   return this.woopList;
   }  */


  constructor(private httpClient: HttpClient) {
  }

  loadWishes() {
    return this.httpClient.get<Woop[]>(BASE_URL);
  }

  saveWish(wish: Woop) {
    console.log('saving wish')
    return wish.id ? this.updateWish(wish) : this.createWish(wish);
  }

  createWish(wish: Woop) {
    console.log("Creating wish ", JSON.stringify(wish));
    return this.httpClient.post(`${BASE_URL}`, JSON.stringify(wish), HEADER);
  }

  updateWish(wish: Woop) {
    console.log("Updating wish ", JSON.stringify(wish));
    return this.httpClient.patch(`${BASE_URL}${wish.id}`, JSON.stringify(wish), HEADER);
  }

  deleteWish(wish) {
    console.log('deleting wish' , wish.id);
    return this.httpClient.delete(`${BASE_URL}${wish.id}`)
  }
}
