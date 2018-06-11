import { ICoordinates } from './Coordinates';

export interface IGeoBoundingBox {

    leftTop: ICoordinates;
    rightBottom: ICoordinates;
}