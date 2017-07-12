import { IUserTotal } from "./userTotal";

export interface IDailyStatistics {
    "DailyTotals": IDayTotal[];
}

export interface IDayTotal {
    "Day": string;
    "UserTotals": IUserTotal[]
}