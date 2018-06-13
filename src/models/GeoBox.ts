import { ICoordinates } from './Coordinates';

export interface IGeoBox {

    upperRight: ICoordinates;
    bottomLeft: ICoordinates;
}