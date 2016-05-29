import { createSelector } from 'reselect';

export const currentControlSelector = createSelector(
  [state => state.form, state => state.currentComponentId],
  (form, currentComponentId) => {
    if (currentComponentId !== undefined && currentComponentId !== -1) {
      return {
        type: 'component',
        data: form.get('components').find(item => item.get('id') === currentComponentId).get('formControl'),
      }  
    }
    return {
      type: 'form',
      data: form,
    };
  }
);
