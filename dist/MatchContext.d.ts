import React from 'react';
import { match } from 'react-router';
import { Mixed, TypeOf } from 'technoidentity-utils';
export declare const MatchContext: React.Context<match<{}> | undefined>;
export declare function useMatch<Spec extends Mixed>(paramsSpec: Spec): match<TypeOf<Spec>>;
export declare function useParams<Spec extends Mixed>(paramsSpec: Spec): TypeOf<Spec>;
//# sourceMappingURL=MatchContext.d.ts.map