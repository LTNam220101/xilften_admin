/**
 *
 * User
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import {
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  TextField,
  EditButton,
  TextInput,
  DateInput,
  useRecordContext,
} from 'react-admin';
import BookIcon from '@mui/icons-material/Book';
export const UserIcon = BookIcon;

interface Props {}

export const UserList = () => (
  <List>
    <Datagrid>
      <TextField source="name" />
      <TextField source="email" />
      <TextField source="role" />
      <TextField source="history" />
      <EditButton />
    </Datagrid>
  </List>
);

const UserTitle = () => {
  const record = useRecordContext();
  return <span>User {record ? `"${record.name}"` : ''}</span>;
};

export const UserEdit = () => (
  <Edit title={<UserTitle />}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="role" />
      <DateInput source="history" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = () => (
  <Create title="Create a user">
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="role" />
    </SimpleForm>
  </Create>
);

const Div = styled.div``;
