import React from 'react';
import styles from './index.less';
import { PageContainer } from '@ant-design/pro-components';
import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { useModel } from '@umijs/max';

export default function Page() {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
      </div>
    </PageContainer>
  );
}
