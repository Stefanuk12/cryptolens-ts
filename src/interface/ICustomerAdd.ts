// Dependencies
import { IStandardResponse } from "./IStandardResponse.js"

//
export interface ICustomerAddRequest {
    Name: string
    Email: string
    CompanyName: string
    EnableCustomerAssociation?: boolean
    AllowActivationManagement?: boolean
    AllowMultipleUserAssociation?: boolean
    v?: number
}

//
export interface ICustomerAddResponse extends IStandardResponse<"Access denied." | "The input parameters were incorrect."> {
    customerId: number
    portalLink: string | undefined
    secret: string
}