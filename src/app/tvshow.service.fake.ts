import {Observable, of} from 'rxjs';
import {ITvshowService} from './tvshow.service';
import { ICurrentShow } from "./icurrent-show";

export class TvshowServiceFake implements ITvshowService {
    private fakeTvshow: ICurrentShow = {
        name: 'Girls',
        image: "../assets/tv-icon.png",
        runtime: 30,
        rating: '8',
        language: 'English',
        summary: 'This is a fake tv show testing'
    }

    private fakeTvshows: ICurrentShow[] = [
       {
        name: 'Girls',
        image: "../assets/tv-icon.png",
        runtime: 30,
        rating: '8',
        language: 'English',
        summary: 'This is a fake tv show testing'
       },
       {
        name: 'Girls',
        image: "../assets/tv-icon.png",
        runtime: 30,
        rating: '8',
        language: 'English',
        summary: 'This is a fake tv show testing'
       }
    ]

    
    public getSingleShowByName(showName: string): Observable<ICurrentShow>{
      return of(this.fakeTvshow)
    }
    public getShowsByName(showName: string): Observable<ICurrentShow[]>{
        return of(this.fakeTvshows);
     }
}