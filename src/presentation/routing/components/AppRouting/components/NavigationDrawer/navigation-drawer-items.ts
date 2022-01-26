interface Links {
  linkName: string;
  icon: string;
  path: string;
}

export const navigationDrawerItems: Links[] = [
  {
    linkName: 'First page',
    icon: 'home',
    path: '/app/first-app-page',
  },
  {
    linkName: 'Customers',
    icon: 'graphic_eq',
    path: '/app/customers',
  },
];
