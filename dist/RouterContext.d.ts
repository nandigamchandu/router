import { History, Location } from 'history';
import React from 'react';
import { RouteChildrenProps } from 'react-router';
import { Mixed, TypeOf } from 'technoidentity-utils';
interface RouterContext extends RouteChildrenProps {
    setRouteMatched(value: boolean): void;
    getRouteMatched(): boolean;
}
export declare const RouterContext: React.Context<RouterContext>;
export declare function useRouter(): RouterContext;
export declare function useHistory(): History;
export declare function useLocation(): Location;
export declare function useQuery<Spec extends Mixed>(querySpec: Spec): TypeOf<typeof querySpec>;
export {};
//# sourceMappingURL=RouterContext.d.ts.map