import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
  public access_token: string = "";
  public id_token: string = "";
  public user_full_name: string = "";
  public email: string = "";

  private userIdSubject = new BehaviorSubject<string | null>(null);
  public userId$ = this.userIdSubject.asObservable(); // Observable for other components to subscribe to

  set userId(value: string) {
    this.userIdSubject.next(value);
  }

  get userId(): string | null {
    return this.userIdSubject.value;
  }

  constructor() { }
}
