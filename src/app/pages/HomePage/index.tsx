/**
 *
 * HomePage
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Button } from '@nextui-org/react';

const Component = () => <Button>Click me</Button>;


interface Props {}

export const HomePage = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Div>
      <Component/>
    </Div>
  );
});

const Div = styled.div``;
