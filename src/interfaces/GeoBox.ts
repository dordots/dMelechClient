import { ICoordinates } from '../models/Coordinates';

export interface IGeoBox {

    upperRight: ICoordinates;
    bottomLeft: ICoordinates;
}