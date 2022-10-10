// Dependencies
import { TStandardKeyError } from "../types/TStandardKeyError"
import { IStandardResponse } from "./IStandardResponse"

//
export interface IKeyMachineLockLimitRequest {
    ProductId: number
    Key: string
    NumberOfMachines: number
    v?: number
}

//
export interface IKeyMachineLockLimitResponse extends IStandardResponse<TStandardKeyError> {}