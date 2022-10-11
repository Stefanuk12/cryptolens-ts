// Dependencies
import { TKeyErrorD } from "../types/TStandardKeyError"
import { ILicenseKey } from "./IKeyGet.js"
import { IStandardResponse } from "./IStandardResponse"

//
export interface IProductKeyGetRequest {
    ProductId: number
    Page?: number
    OrderBy?: string
    SearchQuery?: string
    v?: number
}

//
export interface IProductKeyGetResponse extends IStandardResponse<TKeyErrorD> {
    licenseKeys: ILicenseKey[]
    returned: number
    total: number
    pageCount: number
}