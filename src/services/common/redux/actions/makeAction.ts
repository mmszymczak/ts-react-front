export interface IActionPayload<T> {
  type: string;
  payload: T;
}

export interface IActionWithPayload<T> {
  (payload: T): IActionPayload<T>;
}

export interface IAction {
  type: string;
}

export interface IActionWithoutPayload {
  (): IAction;
}

const makeAction = (type: string): IActionWithoutPayload => {
  return () => ({
    type,
  });
};

export const makeActionWithPayload = <PayloadType = unknown>(type: string): IActionWithPayload<PayloadType> => {
  return (payload: PayloadType) => ({
    type,
    payload,
  });
};

export default makeAction;
