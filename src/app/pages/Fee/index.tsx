/**
 *
 * Fee
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
  DateField,
  TextField,
  EditButton,
  TextInput,
  DateInput,
  useRecordContext,
  ImageField,
} from 'react-admin';
import BookIcon from '@mui/icons-material/Book';
export const FeeIcon = BookIcon;

interface Props {}

export const FeeList = () => (
  <List>
    <Datagrid>
      <ImageField source="image" title="name"/>
      <TextField source="name" />
      <TextField source="descriptions" />
      <TextField source="views" />
      <TextField source="ratingAverage" />
      <TextField source="ratingQuantity" />
      <TextField source="categories" />
      <TextField source="actors" />
      <TextField source="voteAverage" />
      <TextField source="voteQuantity" />
      <EditButton />
    </Datagrid>
  </List>
);

const FeeTitle = () => {
  const record = useRecordContext();
  return <span>Movie {record ? `"${record.name}"` : ''}</span>;
};

export const FeeEdit = () => (
  <Edit title={<FeeTitle />}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="image" />
      <TextInput source="descriptions" multiline />
      <TextInput source="url" />
      <DateInput source="createdAt" />
      <TextInput source="categories" />
      <TextInput source="actors" />
      <TextInput source="voteAverage" />
      <TextInput source="voteQuantity" />
    </SimpleForm>
  </Edit>
);

export const FeeCreate = () => (
  <Create title="Create a movie">
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="image" />
      <TextInput multiline source="descriptions" />
      <TextInput source="url" />
      <DateInput source="createdAt" />
      <TextInput source="categories" />
      <TextInput source="actors" />
    </SimpleForm>
  </Create>
);

const Div = styled.div``;
