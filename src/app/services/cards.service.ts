import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Album } from '../models/album.interface';

@Injectable({
    providedIn: 'root'
})

export class CardsService {

    constructor(private http: HttpClient) { }

    get(): Observable<Album[]> {
        return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/photos');
    }

    delete(id: number) {
        return this.http.delete(`https://jsonplaceholder.typicode.com/photos/${id}`)
    }

}
