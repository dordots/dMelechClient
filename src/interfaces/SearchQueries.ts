import { ICoordinates } from './../models/Coordinates';
import { IGeoBoundingBox } from './../models/GeoBoundingBox';

/** The main interface for search queries */
export interface ISearchQuery {

}

/** Query of locations */
export interface ILocationsQuery extends ISearchQuery {
    byRadius?: RadiusQuery;
    byGeoBoundingBox?: IGeoBoundingBox;
    text?: string;

    /** @prop Additional properties such as accessability etc. */
    properties?: { [key: string]: string | boolean };
}

/** Query of events */
export interface IEventsQuery extends ISearchQuery {
    byRadius?: RadiusQuery;
    geoBoundingBox?: IGeoBoundingBox;
    searchTimeSpan: TimeSpanQuery;
    text?: string;
}

export type RadiusQuery = {
    center: ICoordinates
    radius: number;
}

export type TimeSpanQuery = {
    start: Date;
    end: Date;
}