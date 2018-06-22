import { IEntity } from './Entity';
import { ICoordinates } from './Coordinates';
import { IEvent } from './Event';
import { IMapItem } from '../interfaces/MapItem';

export interface ILocation extends IEntity, IMapItem {

    /** @prop The name of the location */
    name: string;

    /** @prop The type should be overrided in inherit objects */
    type: string;

    /** @prop The address of the location in wrods. */
    address: string;

    /** @prop The coordinates of the location */
    coordinates: ICoordinates;

    /** @prop Additional properties about the location. */
    externals: { [key: string]: boolean };

    /** @prop The events that associated with the location */
    events: IEvent[];
}

export interface ISynagogue extends ILocation {
    
    type: 'synagogue';

    external?: { 
        disabled_access: boolean,
        mikve: boolean,
        parking: boolean,
        shtiblach: boolean
     };
}

export interface IYeshiva extends ILocation {
    type: 'yeshiva'
}

export interface IMikve extends ILocation {
    type: 'mikve'
}