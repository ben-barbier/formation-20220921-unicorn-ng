import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatAll, concatMap, delay, filter, forkJoin, from, mergeMap, Observable, toArray } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Capacity } from '../models/capacity.model';
import { Unicorn, UnicornDTO } from '../models/unicorn.model';
import { CapacitiesService } from './capacities.service';

@Injectable({
  providedIn: 'root',
})
export class UnicornsService {
  constructor(private readonly _http: HttpClient, private readonly _capacitiesService: CapacitiesService) {}

  public getAll(): Observable<UnicornDTO[]> {
    return this._http.get<UnicornDTO[]>(`${environment.apiUrl}/unicorns`);
  }

  public get(id: number): Observable<UnicornDTO> {
    return this._http.get<UnicornDTO>(`${environment.apiUrl}/unicorns/${id}`).pipe(delay(Math.random() * 1000));
  }

  public delete(unicorn: UnicornDTO): Observable<void> {
    return this._http.delete<void>(`${environment.apiUrl}/unicorns/${unicorn.id}`).pipe(delay(Math.random() * 1000));
  }

  public update(unicorn: Unicorn): Observable<UnicornDTO> {
    const unicornToUpdate: UnicornDTO = { ...unicorn, capacities: unicorn.capacities.map(c => c.id) };

    return this._http.put<UnicornDTO>(`${environment.apiUrl}/unicorns/${unicorn.id}`, unicornToUpdate).pipe(delay(Math.random() * 1000));
  }

  public getSuperUnicorns(): Observable<UnicornDTO[]> {
    return this.getAll().pipe(
      concatAll(),
      filter(u => u.weight > 100),
      map(u => ({ ...u, name: u.name.toUpperCase() })),
      map(u => ({ ...u, weight: u.weight - 10 })),
      map(u => ({ ...u, hobbies: u.hobbies.concat('DEV') })),
      toArray()
    );
  }

  public deleteUnicorns(unicorns: UnicornDTO[]): Observable<any> {
    return from(unicorns).pipe(concatMap(unicorn => this._http.delete(`${environment.apiUrl}/unicorns/${unicorn.id}`)));
  }

  public getAllWithCapacitiesLabels(): Observable<Unicorn[]> {
    return this.getAll().pipe(
      concatAll(),
      mergeMap(unicorn =>
        from(unicorn.capacities).pipe(
          mergeMap(capacityId => this._capacitiesService.get(capacityId)),
          toArray(),
          map(capacities => ({ ...unicorn, capacities: capacities }))
        )
      ),
      toArray()
    );
  }

  public getAllWithCapacitiesLabels2(): Observable<Unicorn[]> {
    return forkJoin([this.getAll(), this._capacitiesService.getAll()]).pipe(
      map(([unicorns, capacities]: [UnicornDTO[], Capacity[]]): Unicorn[] => {
        return unicorns.map((unicorn: UnicornDTO): Unicorn => {
          return {
            ...unicorn,
            capacities: unicorn.capacities.map(capacityId => capacities.find(c => c.id === capacityId) as Capacity),
          };
        });
      })
    );
  }
}
