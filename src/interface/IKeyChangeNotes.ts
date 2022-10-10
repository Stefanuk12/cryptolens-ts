// Dependencies
import { TStandardKeyError } from "../types/TStandardKeyError"
import { IStandardResponse } from "./IStandardResponse"

//
export interface IKeyChangeNotesRequest {
    ProductId: number
    Key: string
    Notes: string
    v?: number
}

//
export interface IKeyChangeNotesResponse extends IStandardResponse<TStandardKeyError | "The notes field cannot be more than 500 characters."> {}