import { ICoordinates } from './../models/Coordinates';
import { IGeoBox } from './../models/GeoBox';
import { ILocation } from '../models/Location';
import { DaysOfWeek } from '../models/Event';

/** Query of locations */
export interface IGeoBoxQuery {
    geoBox: IGeoBox;
}

/** Query of events */
export interface IAdvancedQuery extends  Partial<ILocation> {

    namme: string;
    address: string;

    // between 0 to 25
    radius: [number, number];
    coordinates: ICoordinates;
    
    time: [string, string];
    
    externals: { [key: string]: boolean };
    days: DaysOfWeek[];
}
