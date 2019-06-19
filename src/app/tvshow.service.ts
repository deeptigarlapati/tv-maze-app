import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { getRandomString } from "selenium-webdriver/safari";
import { map } from "rxjs/operators";
import { ICurrentShow } from "./icurrent-show";
import { Observable } from "rxjs";
import { ISingleShowDetails } from "./isingleShowDetails";

interface ICurrentServiceShow {
  score: number;
  show: ICurrentServiceShowDetails;
}

interface ICurrentServiceShowDetails {
  id: string;
  image: {
    medium: string;
  };
  language: string;
  name: string;
  rating: {
    average: string;
  };
  summary: string;
  runtime: number;
  genres: object;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
  };
}
export interface ITvshowService {
  getShowsByName(showName: string): Observable<ICurrentShow[]>
  getSingleShowByName(showName: string): Observable<ICurrentShow>
}
@Injectable({
  providedIn: "root"
})
export class TvshowService implements ITvshowService {
  constructor(private httpClient: HttpClient) {}

  getShowsByName(showName: string): Observable<ICurrentShow[]> {
    return this.httpClient
      .get<ICurrentServiceShow[]>(
        `${environment.baseUrl}api.tvmaze.com/search/shows?q=${showName}`
      )
      .pipe(
        map(serviceShows =>
          serviceShows.map(serviceShow => {
            var appSingleShow: ICurrentShow = this.transformToAppShow(
              serviceShow
            );
            console.log(appSingleShow);
            return appSingleShow;
          })
        )
      );
  }
  getSingleShowByName(showName: string): Observable<ICurrentShow> {
    return this.httpClient
      .get<ICurrentServiceShowDetails>(
        `${environment.baseUrl}api.tvmaze.com/singlesearch/shows?q=${showName}`
      )
      .pipe(
        map(serviceShow => {
          var appShow: ICurrentShow = this.transformToSingleShow(serviceShow);
          console.log(appShow);
          return appShow;
        })
      );
  }

  transformToSingleShow(
    serviceShow: ICurrentServiceShowDetails
  ): ISingleShowDetails {
    return {
      name: serviceShow.name,
      image: serviceShow.image
        ? serviceShow.image.medium
        : "assets/no-image.png ",
      runtime: serviceShow.runtime,
      rating: serviceShow.rating.average
        ? serviceShow.rating.average
        : "Not Rated",
      language: serviceShow.language,
      network: serviceShow.network,
      genres: serviceShow.genres,
      summary: serviceShow.summary
    };
  }

  transformToAppShow(serviceShow: ICurrentServiceShow): ICurrentShow {
    return {
      name: serviceShow.show.name,
      image: serviceShow.show.image
        ? serviceShow.show.image.medium
        : "assets/no-image.png ",
      runtime: serviceShow.show.runtime,
      rating: serviceShow.show.rating.average
        ? serviceShow.show.rating.average
        : "Not Rated",
      language: serviceShow.show.language,
      summary: serviceShow.show.summary
    };
  }
}
