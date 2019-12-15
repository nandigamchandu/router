import React from 'react';
import { BrowserRouterProps, HashRouterProps } from 'react-router-dom';
export declare type RouterType = 'browser' | 'hash';
export declare type RouterProps<T extends RouterType> = (T extends 'browser' ? BrowserRouterProps : HashRouterProps) & {
    readonly variant?: T;
    readonly children: React.ReactNode;
};
export declare function Router<T extends RouterType>({ variant, children, ...props }: RouterProps<T>): JSX.Element;
//# sourceMappingURL=Router.d.ts.map