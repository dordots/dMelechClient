import { IEntity } from "./Entity";

export interface IEvent extends IEntity {

    /** @prop The type should be overrided in inherit objects */
    type: string;
    /** @prop Description text */
    description: string;

    /** @prop Boundaries of the time of the event */
    time: Time;
    /** @prop Event time length by minutes */
    length: number;

    /** @prop List of boundries of time by dates that the event should take place in */
    occurence?: Date[];
    /** @prop List of boundries of time by week days that the event should take place in */
    reoccurence?: DaysOfWeek[];
}

/** @type Represents time boundaries of an event (time only; date is omitted) */
type Time = {
    /** @prop Start time (date is omitted) */
    start: Date,
    /** @prop End time (date is omitted) */
    end?: Date
}

/** @type A number represents it's parallel day of the week */
type DaysOfWeek = 1 | 2 | 3 | 4 | 5 | 6 | 7;