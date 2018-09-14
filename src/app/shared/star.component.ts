import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{
    numberOfStars: number = 5;
    widthMultiplier: number = 75; // Multiplier used to display star images

    @Input()
    rating: number;
    starWidth: number = this.widthMultiplier;

    ngOnChanges(): void {
        this.starWidth = this.rating * this.widthMultiplier / this.numberOfStars;
    }
}