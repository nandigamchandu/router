import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
export interface SimpleRedirectProps {
    readonly from: string;
    readonly to: string;
    readonly exact?: boolean;
}
export declare const SimpleRedirect: React.FC<SimpleRedirectProps>;
export declare type RouteComponentPropsRemoved<T> = Omit<T, keyof RouteComponentProps>;
export declare function removeRouteComponentProps<T extends RouteComponentProps>(props: T): RouteComponentPropsRemoved<T>;
//# sourceMappingURL=SimpleRedirect.d.ts.map