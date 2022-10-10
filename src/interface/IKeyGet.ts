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
    productId: number
    id: number
    key: string
    created: string
    expires: string
    period: number
    f1: boolean
    f2: boolean
    f3: boolean
    f4: boolean
    f5: boolean
    f6: boolean
    f7: boolean
    f8: boolean
    notes: string | null
    block: false
    globalId: string
    customer: ICustomer
    activatedMachines: IActivationData[]
    trialActivation: boolean
    maxNoOfMachines: number
    allowedMachines: string[]
    dataObjects: IDataObject[]
    signDate: string
    signature: string | null
}
export interface ILicenseStatus {
    isValid: boolean
    reasonForInvalidity: 0 | 1 | 2
    trial: boolean
    timeLimited: boolean
    timeLeft: number
}
export interface IMetadata {
    activatedMachines: number | string
    licenseStatus: ILicenseStatus
    usedFloatingMachines: number
}
export interface IKeyGetResponse extends IStandardResponse<TStandardKeyError> {
    licenseKey: ILicenseKey
    signature: string | undefined
    metadata: IMetadata | undefined
}