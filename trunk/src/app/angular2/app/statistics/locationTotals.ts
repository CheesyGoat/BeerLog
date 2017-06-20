export interface ILocationTotals {
    Locations: ILocationTotal[];
    //UserTotals: IUserTotals[];
}

export interface ILocationTotal {
    Location: string;
    //UserTotals: ILocationUserTotal[];
}

export interface ILocationUserTotal {
    User: string;
    Total: number;
}

export interface IUserTotals {
    User: string;
    TotalCask: number;
    TotalTasters: number;
    TotalBottled: number;
}