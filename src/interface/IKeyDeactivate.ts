// Dependencies
import { TKeyErrorA } from "../types/TStandardKeyError.js";
import { IStandardResponse } from "./IStandardResponse.js";

//
export interface IKeyDeactivateRequest {
    ProductId: number
    Key: string
    MachineCode?: string
    Floating?: boolean
    OSInfo?: boolean
    v?: number
}

//
export interface IKeyDeactivateResponse extends IStandardResponse<TKeyErrorA> {}