import { ICoordinates } from "../models/Coordinates";

/**
 * @type An object that can be displayed in the map must implement this interface.
 */
export interface IMapItem {
    
    /** @prop The type of the item */
    type: string;

    /** @prop The coordinates of the location */
    coordinates: ICoordinates;
}