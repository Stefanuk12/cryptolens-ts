export interface IStandardResponse<T = string | null> {
    // 0(=success) or 1(=error)
    result: "0" | "1"
    // The message that provides additional information about the result
    message: T
}
export interface IStandardResponseAny extends IStandardResponse {
    [key: string]: any
}