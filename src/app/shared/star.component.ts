import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{
    _numberOfStars: number = 5;
    _widthMultiplier: number = 75; // Multiplier used to display star images

    @Input() rating: number;
    starWidth: number = this._widthMultiplier;

    ngOnChanges(): void {
        this.starWidth = this.rating * this._widthMultiplier / this._numberOfStars;
    }
}