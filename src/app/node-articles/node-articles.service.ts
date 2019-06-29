import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRepository } from '../core/repository/i-repository';
import { NodeArticlesModel } from './model/node-articles.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NodeArticlesListModel } from './model/node-articles-list.model';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class NodeArticlesService implements IRepository<NodeArticlesModel> {
    protected baseUrl = `${environment.baseUrl}/articles/node`;
    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<NodeArticlesListModel> {
        const url = this.baseUrl;
        return this.httpClient.get<NodeArticlesListModel>(url)
            .pipe(
                map(res => this.processorGetAll(res))
            );
    }
    get(id: string | number): Observable<NodeArticlesModel> {
        throw new Error('Method not implemented.');
    }
    update<R>(el: NodeArticlesModel): Observable<R> {
        throw new Error('Method not implemented.');
    }
    delete(id: string | number): Observable<any> {
        const url = `${this.baseUrl}/${id}`;
        return this.httpClient.delete(url);
    }

    private processorGetAll(response: NodeArticlesListModel): NodeArticlesListModel {
        console.log('entro');
        const result = new NodeArticlesListModel();
        response.items.forEach(item => {
            if (item.title || item.story_title) {
                item.story_title = item.story_title || item.title;
                result.items.push(item);
            }
        });

        result.total = result.items.length;
        return result;
    }
}
