// Dependencies
import { TStandardKeyError } from "../types/TStandardKeyError.js";
import { IActivationData } from "./IActivationData.js";
import { ICustomer } from "./ICustomer.js";
import { IDataObject } from "./IDataObject.js";
import { IStandardResponse } from "./IStandardResponse.js";

//
export interface IKeyGetRequest {
    ProductId: number
    Key: string
    Sign?: boolean
    FieldsToReturn?: number
    SignMethod?: number
    Metadata?: boolean
    FloatingTimeInterval?: number
    ModelVersion?: 1 | 2 | 3
    v?: number
}

//
export interface ILicenseKey {
    ProductId: number
    ID: number
    Key: string
    Created: string
    Expires: string
    Period: number
    F1: boolean
    F2: boolean
    F3: boolean
    F4: boolean
    F5: boolean
    F6: boolean
    F7: boolean
    F8: boolean
    Notes: string | null
    Block: false
    GlobalId: string
    Customer: ICustomer
    ActivatedMachines: IActivationData[]
    TrialActivation: boolean
    MaxNoOfMachines: number
    AllowedMachines: string[]
    DataObjects: IDataObject[]
    SignDate: string
    Signature: string
}
export interface ILicenseStatus {
    IsValid: boolean
    ReasonForInvalidity: 0 | 1 | 2
    Trial: boolean
    TimeLimited: boolean
    TimeLeft: number
}
export interface IMetadata {
    ActivatedMachines: number | string
    LicenseStatus: ILicenseStatus
    UsedFloatingMachines: number
}
export interface IKeyGetResponse extends IStandardResponse<TStandardKeyError> {
    LicenseKey: ILicenseKey
    Signature: string | undefined
    Metadata: IMetadata | undefined
}