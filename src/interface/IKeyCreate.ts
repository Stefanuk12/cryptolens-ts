// Dependencies
import { TKeyErrorC } from "../types/TStandardKeyError.js";
import { ICustomerAddRequest } from "./ICustomerAdd.js";
import { IStandardResponse } from "./IStandardResponse.js";

//
export interface IKeyCreateRequest extends Partial<ICustomerAddRequest> {
    ProductId: number
    Period?: number
    F1?: boolean
    F2?: boolean
    F3?: boolean
    F4?: boolean
    F5?: boolean
    F6?: boolean
    F7?: boolean
    F8?: boolean
    Notes?: string
    Block?: false
    CustomerId?: number
    NewCustomer?: boolean
    AddOrUseExistingCustomer?: boolean
    TrialActivation?: boolean
    MaxNoOfMachines?: number
    AllowedMachines?: string[]
    ResellerId?: number
    NoOfKeys?: number
    v?: number
}

//
export interface IKeyCreateResponseKey extends IStandardResponse<TKeyErrorC> {
    key: string
}
export interface IKeyCreateResponse extends IStandardResponse<TKeyErrorC> {
    key: string | undefined
    keys: IKeyCreateResponseKey[] | undefined
    customerId: number | null
}