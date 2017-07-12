import { IUserTotal } from "./userTotal";

export interface IYearlyStatistics {
    "YearlyTotals": IYearTotal[];
}

export interface IYearTotal {
    "Year": number;
    "UserTotals": IUserTotal[]
}