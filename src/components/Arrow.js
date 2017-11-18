import React from 'react';
import { Link } from 'react-router-dom';

export default ({ className, path }) => (
  <Link to={path} className={className}></Link>
);
