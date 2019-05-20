import React from 'react';
import { formatMessage } from 'umi/locale';
import Link from 'umi/link';
import Exception from '@/components/Exception';

const Exception404 = () => (
  <Exception
    type="404"
    desc={formatMessage({ id: 'exception.description.404' })}
    linkElement={Link}
    backText={formatMessage({ id: 'exception.back' })}
  />
);

export default Exception404;
