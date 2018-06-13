import { ICoordinates } from './../models/Coordinates';
import { IGeoBox } from './../models/GeoBox';
import { ILocation } from '../models/Location';

/** The main interface for search queries */
export interface ISearchQuery {

    /** @prop Additional properties such as accessability etc. */
    properties?: { [key: string]: string | boolean };
}

/** Query of locations */
export interface IGeoRectangleQuery extends ISearchQuery {
    geoBox: IGeoBox;
    searchTimeSpan: TimeSpanQuery;
}

/** Query of events */
export interface IAdvancedQuery extends ISearchQuery {
    byRadius: RadiusQuery;
    searchTimeSpan: TimeSpanQuery;
    text?: string;

    /** @prop Additional properties such as accessability etc. */
    locationProperties?: ILocation;
}

export type RadiusQuery = {
    center: ICoordinates
    radius: number;
}

export type TimeSpanQuery = {
    start: Date;
    end: Date;
}