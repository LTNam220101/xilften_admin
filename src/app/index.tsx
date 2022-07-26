/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { fetchUtils, Admin, Resource } from 'react-admin';
import myDataProvider from '../myDataProvider';

import { FeeList, FeeEdit, FeeCreate, FeeIcon } from './pages/Fee';
import { UserList, UserEdit, UserCreate, UserIcon } from './pages/User';

import { GlobalStyle } from 'styles/global-styles';

import { useTranslation } from 'react-i18next';

export function App() {
  const fetchJson = (url, options: any = {}) => {
    if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
    }
    // add your own headers here
    options.headers.set('X-Total-Count', '0-20/500');
    options.headers.set('Access-Control-Expose-Headers', 'Content-Range');
    return fetchUtils.fetchJson(url, options);
  };
  const dataProvider = myDataProvider(`http://localhost:3001`, fetchJson);
  // const test = async () => {
  //   const data = await dataProvider.getList('movie', {
  //     pagination: { page: 1, perPage: 5 },
  //     sort: { field: 'title', order: 'ASC' },
  //     filter: {},
  //   });
  //   console.log(data);
  // };
  // test();
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <Admin dataProvider={dataProvider}>
        <Resource
          name="movie"
          list={FeeList}
          edit={FeeEdit}
          create={FeeCreate}
          icon={FeeIcon}
        />
        <Resource
          name="user"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          icon={UserIcon}
        />
      </Admin>
      <GlobalStyle />
    </BrowserRouter>
  );
}
