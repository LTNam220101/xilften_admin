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
import './style.css';
export const FeeIcon = BookIcon;

interface Props {}

export const FeeList = () => (
  <List>
    <Datagrid>
      <ImageField source="image" title="name" />
      <TextField source="name" />
      <TextField source="descriptions" sx={{ width: 600 }} />
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
    <SimpleForm sx={{ width: '80%' }}>
      <TextInput disabled source="id" sx={{ width: '100%' }} />
      <TextInput source="name" sx={{ width: '100%' }} />
      <TextInput source="image" sx={{ width: '100%' }} />
      <TextInput source="descriptions" multiline sx={{ width: '100%' }} />
      <TextInput source="url" sx={{ width: '100%' }} />
      <DateInput source="createdAt" sx={{ width: '100%' }} />
      <TextInput source="categories" sx={{ width: '100%' }} />
      <TextInput source="actors" sx={{ width: '100%' }} />
      <TextInput source="voteAverage" sx={{ width: '100%' }} />
      <TextInput source="voteQuantity" sx={{ width: '100%' }} />
    </SimpleForm>
  </Edit>
);

export const FeeCreate = () => (
  <Create title="Create a movie">
    <SimpleForm sx={{ width: '80%' }}>
      <TextInput source="name" sx={{ width: '100%' }} />
      <TextInput source="image" sx={{ width: '100%' }} />
      <TextInput multiline source="descriptions" sx={{ width: '100%' }} />
      <TextInput source="url" sx={{ width: '100%' }} />
      <DateInput source="createdAt" sx={{ width: '100%' }} />
      <TextInput source="categories" sx={{ width: '100%' }} />
      <TextInput source="actors" sx={{ width: '100%' }} />
    </SimpleForm>
  </Create>
);

const Div = styled.div``;
