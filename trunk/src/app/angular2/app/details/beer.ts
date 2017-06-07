import { IScore } from './score';

export interface IBeer {
    Id:number;
    Type:string;
    Brewery:string;
    Name:string;
    Percentage:DoubleRange;
    Notes:string;
    Scores:IScore[];
}