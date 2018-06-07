import { IEntity } from './Entity';
import { ICoordinates } from './Coordinates';

export interface ILocation extends IEntity {

    /** @prop The name of the location */
    name: string;

    /** @prop The coordinates of the location */
    coordinates: ICoordinates;

    /** @prop Is the location is active (not in shiputzim for example) */
    isActive: boolean;
}