import { IUserTotal } from "./userTotal";

export interface IBreweryStatistics {
    "GrandTotal": number;
    "UserTotals": IUserTotal[]
}