// Dependencies
import { TStandardKeyError } from "../types/TStandardKeyError.js"
import { IStandardResponse } from "./IStandardResponse.js"

//
export interface IKeyCreateTemplate {
    LicenseTemplateId: string
    v?: number
}

//
export interface IKeyCreateTemplateResponse extends IStandardResponse<TStandardKeyError | "The specified template id is not allowed because feature lock. Please use an access token with feature lock set to 0 or set it to the id of the license template."> {
    key: string
    rawResponse: any
}