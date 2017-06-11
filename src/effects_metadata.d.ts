export interface EffectMetadata {
    propertyName: string;
    dispatch: boolean;
}
export declare function Effect({dispatch}?: {
    dispatch: boolean;
}): PropertyDecorator;
export declare function getSourceForInstance(instance: Object): any;
export declare const getSourceMetadata: (i: Object) => EffectMetadata[];