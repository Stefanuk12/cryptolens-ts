// Dependencies
import { TStandardKeyError } from "../types/TStandardKeyError.js";
import { IStandardResponse } from "./IStandardResponse.js";

//
export interface IKeyBlockRequest {
    ProductId: number
    Key: string
    v?: number
}

//
export interface IKeyBlockResponse extends IStandardResponse<TStandardKeyError> {}