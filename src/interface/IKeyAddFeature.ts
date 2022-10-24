import { TStandardKeyError } from "../types/TStandardKeyError"
import { IStandardResponse } from "./IStandardResponse"

//
export interface IKeyAddFeatureRequest {
    ProductId: string
    Key: string
    Feature: number
    v?: number
}

//
export interface IKeyAddFeatureResponse extends IStandardResponse<TStandardKeyError> {}