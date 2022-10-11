// Dependencies
import { TKeyErrorD } from "../types/TStandardKeyError"
import { ILicenseKey } from "./IKeyGet.js"
import { IStandardResponse } from "./IStandardResponse"

//
export interface IProductKeyGetRequest {
    ProductId: number
    Page: number | undefined
    OrderBy: string | undefined
    SearchQuery: string | undefined
    v?: number
}

//
export interface IProductKeyGetResponse extends IStandardResponse<TKeyErrorD> {
    licenseKey: ILicenseKey[]
    returned: number
    total: number
    pageCount: number
}