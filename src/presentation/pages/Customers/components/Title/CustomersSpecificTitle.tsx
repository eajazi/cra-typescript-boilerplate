import React from 'react';

import { Typography } from '@material-ui/core';
import { CustomersSpecificTitleViewModel } from './CustomerSpecificTitle.ViewModel';
import { CustomersSpecificTitleProps } from './interfaces/CustomerSpecificTitleProps';

const CustomersSpecificTitle = ({ title }: CustomersSpecificTitleProps): JSX.Element => {
  const vm = CustomersSpecificTitleViewModel();

  return (
    <Typography variant="h6" color="primary">
      {`${vm.titlePrefix} ${title}`}
    </Typography>
  );
};

export default CustomersSpecificTitle;
