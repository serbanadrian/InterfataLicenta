import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-lista-pers',
  templateUrl: './lista-pers.component.html',
  styleUrls: ['./lista-pers.component.css']
})
export class ListaPersComponent implements OnInit {
  persons!: any[];
  personName: string = '';
  @Output() personClick = new EventEmitter<string>();
  constructor(private http: HttpClient) {}
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
selectPerson(personName: string) {
  this.personClick.emit(personName);
}
updatePersonName(name: string) {
  this.personClick.emit(name);
}
}
