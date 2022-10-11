export enum EFeatureType {
    Default,
    TimeLimited,
    Trial
}
export interface IFeature {
    name: string
    type: EFeatureType
}
export interface IFeatureDefinition {
    f1: IFeature
    f2: IFeature
    f3: IFeature
    f4: IFeature
    f5: IFeature
    f6: IFeature
    f7: IFeature
    f8: IFeature
    allLicensesTimeLimited: boolean
    blockExpiredLicenses: boolean
}