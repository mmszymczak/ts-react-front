import React from 'react';
import { Redirect } from 'react-router';
import { NOT_FOUND_PAGE } from 'config/paths';

/**
 * Example guardian guarding route.
 * @param {component} JSX.Element
 * @returns JSX.Element
 * To check guardian pattern you can visit
 * https://www.thegreatcodeadventure.com/jwt-auth-with-phoenix-and-react-router-4/
 */
export function CanRender(component: JSX.Element) {
  // isRenderPossible can be replaced with condition
  // For example check if specific value is present in store.
  const isRenderPossible = true;
  let result: JSX.Element;
  if (isRenderPossible) {
    result = component;
  } else {
    result = <Redirect to={NOT_FOUND_PAGE} />;
  }

  return result;
}

export default CanRender;
