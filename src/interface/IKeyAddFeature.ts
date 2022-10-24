import { TStandardKeyError } from "../types/TStandardKeyError"
import { IStandardResponse } from "./IStandardResponse"

//
export interface IKeyAddFeatureRequest {
    ProductId: number
    Key: string
    Feature: number
    v?: number
}

//
export interface IKeyAddFeatureResponse extends IStandardResponse<TStandardKeyError> {}