import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Container } from 'react-bootstrap';

/**
 * Generic not found page component.
 * @param {props} RouteComponentProps
 * @returns JSX.Element
 */
function NotFoundPage(props: RouteComponentProps) {
  return (
    <Container className='container-max-1600'>
      <b>404 - Page not found</b>
      <p>We're sorry, the page your looking for doesn't exists!</p>
    </Container>
  );
}

export default NotFoundPage;
