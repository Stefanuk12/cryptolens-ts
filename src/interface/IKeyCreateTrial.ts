// Dependencies
import { TKeyErrorB } from "../types/TStandardKeyError.js"
import { IStandardResponse } from "./IStandardResponse.js"

//
export interface IKeyCreateTrialRequest {
    ProductId: number
    MachineCode?: string
    v?: number
}

//
export interface IKeyCreateTrialResponse extends IStandardResponse<TKeyErrorB> {
    key: string
}