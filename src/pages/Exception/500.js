import React from 'react';
import { formatMessage } from 'umi/locale';
import Link from 'umi/link';
import Exception from '@/components/Exception';

const Exception500 = () => (
  <Exception
    type="500"
    desc={formatMessage({ id: 'exception.description.500' })}
    linkElement={Link}
    backText={formatMessage({ id: 'exception.back' })}
  />
);

export default Exception500;
