import React, { Fragment } from 'react';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

const Routes = () => <Fragment>{renderRoutes(routes)}</Fragment>;

export default Routes;
