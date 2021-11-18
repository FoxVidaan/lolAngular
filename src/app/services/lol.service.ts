import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Character} from "../models/Character";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LolService {
  characterStream = new BehaviorSubject<Character[]>([]);

  constructor(private http: HttpClient) { }

  getCharacter = (): void => {
    this.http.get<Character[]>(environment.URL).subscribe(
      data => {
        this.characterStream.next(data);
      }
    );
  }

  deleteCharacter = (id: number): Observable<Character[]> => {
    return this.http.delete<Character[]>(`${environment.URL}/${id}`)
  }

  addCharacter = (data: Character): Observable<Character> => {
    return this.http.post<Character>(environment.URL, data)
  }

  changeState = (data: Character): Observable<Character> => {
    return this.http.patch<Character>(`${environment.URL}/${data.id}`, data)
  }
}
