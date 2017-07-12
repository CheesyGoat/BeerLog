import { IUserTotal } from "./userTotal";

export interface IDailyStatistics {
    "DailyTotals": IDayTotal[];
}

export interface IDayTotal {
    "Day": number;
    "UserTotals": IUserTotal[]
}