import { Range } from './Range';
import { Time } from './Time';
import { ICoordinates } from './../models/Coordinates';
import { IGeoBox } from './../interfaces/GeoBox';
import { DaysOfWeek } from "../interfaces/DaysOfWeek";

/** Query of locations */
export interface IGeoBoxQuery {
    geoBox: IGeoBox;
}

/** Query of events */
export interface IAdvancedQuery {

    name: string;
    address: string;

    // between 0 to 25
    radius: Range<number>;
    coordinates: ICoordinates;
    
    time: Range<Time>;
    
    externals: { [key: string]: boolean };
    days: DaysOfWeek[];
}

