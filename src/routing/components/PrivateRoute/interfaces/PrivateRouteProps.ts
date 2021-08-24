import React, { LazyExoticComponent } from 'react';
import { RouteComponentProps } from 'react-router';

export interface PrivateRouteProps {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>
    | LazyExoticComponent<React.ComponentType<any>>;
  path: string;
}
