import { IEntity } from './Entity';
import { ICoordinates } from './Coordinates';

export interface ILocation extends IEntity {

    /** @prop The name of the location */
    name: string;

    /** @prop The type should be overrided in inherit objects */
    type: string;

    /** @prop The coordinates of the location */
    coordinates: ICoordinates;

    /** @prop Is the location is active (not in shiputzim for example) */
    isActive?: boolean;
}

export interface ISynagogue extends ILocation {

    type: 'synagogue'
}

export interface IMikve extends ILocation {
    
    type: 'mikve'
}

export interface IYeshiva extends ILocation {
    
    type: 'yeshiva'
}