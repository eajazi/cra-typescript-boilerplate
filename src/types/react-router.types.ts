export interface RouteObject {
  caseSensitive: boolean;
  children?: RouteObject[];
  element?: React.ReactNode;
  path: string;
}
