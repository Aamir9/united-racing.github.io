export interface upack{
    upackId?:number;
    name?:string,
    by?:string,
    cars?:string,
    tracks?:string,
    laps?:string,
    setups?:string,
    subs?:string,
    price?:number,
    isSupported?:boolean,
}


export interface UpacksBySim{
    simValue?:number;
    upacks?: Array<upack>;
    }


