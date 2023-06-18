import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
//import { switchMap } from 'rxjs/operators';
import { map, tap, switchMap } from 'rxjs/operators';
//import { AngularFireDatabase } from '@angular/fire/database';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-pers',
  templateUrl: './lista-pers.component.html',
  styleUrls: ['./lista-pers.component.css']
})
export class ListaPersComponent implements OnInit {
  persons!: any[];
  constructor(private http: HttpClient) {}
//  persons$: Observable<any[]>;
ngOnInit() {
  this.getPersons();
  interval(200)
      .pipe(switchMap(() => this.getPersons()))
      .subscribe();
}
getPersons(): Observable<any> {
  const url = 'https://licentadate-default-rtdb.firebaseio.com/Nume.json';
  return this.http.get<any>(url).pipe(
    map((data) => {
      if (data) {
        return Object.values(data);
      } else {
        return [];
      }
    }),
    tap((persons) => {
      this.persons = persons;
    })
  );
}

}
