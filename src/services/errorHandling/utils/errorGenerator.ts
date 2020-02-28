export default function errorGenerator(error: any) {
  function renderStatusInfo() {
    if (error.status) {
      return `Status: ${error.status} - ${error.statusText}`;
    }
    return '';
  }

  return {
    type: 'danger',
    code: `XYZ-${error.status}001`,
    description: `Error occured while processing one of operations:
      ${error.config.data}
      ${error.request.responseURL}
      ${renderStatusInfo()}`,
    title: 'Error occured while processing one of operations',
  };
}
