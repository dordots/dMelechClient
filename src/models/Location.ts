import { IEntity } from './Entity';
import { ICoordinates } from './Coordinates';
import { IEvent } from './Event';
import { IMapItem } from '../interfaces/MapItem';

export interface ILocation extends IEntity, IMapItem {

    /** @prop The name of the location */
    name: string;

    /** @prop The type should be overrided in inherit objects */
    type: string;

    /** @prop The coordinates of the location */
    coordinates: ICoordinates;

    /** @prop Additional properties about the location. */
    additionalProperties: { [key: string]: string | number };

    /** @prop Is the location is active (not in shiputzim for example) */
    isActive?: boolean;

    /** @prop Is the location is temporary (will not display without relevant events) */
    isTemporary?: boolean;

    /** @prop The events that associated with the location */
    events: IEvent[];
}

export interface ISynagogue extends ILocation {
    type: 'synagogue'
}

export interface IYeshiva extends ILocation {
    type: 'yeshiva'
}

export interface IMikve extends ILocation {
    type: 'mikve'
}