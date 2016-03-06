import { createSelector } from 'reselect';

export const currentControlSelector = createSelector(
  [state => state.form, state => state.currentControlId],
  (form, currentControlId) => {
    if (currentControlId !== undefined && currentControlId !== -1) {
      return form.get('components').find(item => item.get('id') === currentControlId);
    }
    return form;
  }
);
