import { Observable } from 'rxjs';

export interface IRepository<T> {

    getAll(): Observable<any>;

    get(id: string | number): Observable<T>;

    update(el: T): Observable<any>;

    delete(id: string | number): Observable<any>;
}
