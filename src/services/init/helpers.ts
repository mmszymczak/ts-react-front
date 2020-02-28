/**
 * This function was created to dispatch resize event every time app changes size.
 * Needs to be handled every time for IFE to be notified.
 * @returns void
 */
export function onResize() {
  window.document.body.dispatchEvent(new Event('resize'));
}
