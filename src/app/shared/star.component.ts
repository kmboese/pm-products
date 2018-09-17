import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{
    _numberOfStars: number = 5;
    _starWidth: number = 86; // Multiplier used to display star images

    @Input() rating: number;
    // Constant used to properly display the star rating
    starWidth: number = this._starWidth;

    // Event to notify product list of star click event
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * this._starWidth / this._numberOfStars;
    }

    // Emit an event notifying the container when the star component is clicked on
    onClick(): void {
        this.ratingClicked.emit(`this item is rated ${this.rating} stars.`);
    }
}