import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import { DatabaseInfo } from '../../../types';

interface DatabaseDetailsProps {
  db: DatabaseInfo | undefined;
}

// Container
const Container = styled.a`
  display: flex;
  justify-content: space-between;
`;

const DatabaseDetails = ({ db }: DatabaseDetailsProps) => {
  if (!db) return null;
  return (
    <Container>
      <Typography variant="h2">{`${db.db_name}`}</Typography>
      <Typography variant="h2">{`${db.db_size}`}</Typography>
    </Container>
  );
};

export default DatabaseDetails;
