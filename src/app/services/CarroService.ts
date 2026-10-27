import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carros } from '../models/carros';

@Injectable({ providedIn: 'root' })
export class CarrosService {
    private http = inject(HttpClient)
    private apiUrl = 'http://localhost:8080/carros'

    listar(): Observable<Carros[]> {
        return this.http.get<Carros[]>(this.apiUrl);
    }

    buscarPorId(id: number): Observable<Carros> {
        return this.http.get<Carros>(`${this.apiUrl}/${id}`)
    }

    cadastrar(carro: Omit<Carros, 'id'>): Observable<Carros> {
        return this.http.post<Carros>(this.apiUrl, carro);
    }

    atualizar(id: number, carro: Omit<Carros, 'id'>): Observable<Carros> {
        return this.http.put<Carros>(`${this.apiUrl}/${id}`, carro);
    }

    excluir(id:number) : Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}