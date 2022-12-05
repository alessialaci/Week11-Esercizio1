import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Album } from './models/album.interface';
import { CardsService } from './services/cards.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title = 'Week11-Esercizio1';

    sub!: Subscription;
    cards: Album[] | undefined;
    conteggio: number = 0;
    loading = true;

    constructor(private cardSrv: CardsService) { }

    ngOnInit(): void {
        this.recuperaCarte();
    }

    recuperaCarte() {
        this.sub = this.cardSrv.get().subscribe((ris) => {
            this.cards = ris;
            this.loading = false;
        })
    }

    cancellaCard(id: number) {
        this.sub = this.cardSrv.delete(id).subscribe(() => {
            this.cards = this.cards?.filter((card) => card.id != id);
            console.log(`Card ${id} cancellata`)
        })
    }

    miPiace() {
        this.conteggio++;
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

}
