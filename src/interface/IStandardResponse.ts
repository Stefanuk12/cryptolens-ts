export enum EResponseResult {
    Success,
    Error
}
export interface IStandardResponse<T = string | null> {
    // 0(=success) or 1(=error)
    result: EResponseResult
    // The message that provides additional information about the result
    message: T
}