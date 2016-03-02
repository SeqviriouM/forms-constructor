import { List, Map } from 'immutable';
import { expect } from 'chai';
import { form } from '../../reducers/form';
import { getDefaultData, addComponent } from '../../actions/form';

describe('form reducer', () => {
  it('handle INIT', () => {
    const initialState = {};
    const nextState = form(initialState, getDefaultData());

    expect(nextState).to.equal(
      Map({
        name: 'form',
        method: 'get',
        title: 'Form',
        components: List(),
      })
    );
  });

  it('handle ADD_COMPONENT', () => {
    const initialState = form({}, getDefaultData());
    const nextState = form(initialState, addComponent({ id: 0 }));

    expect(nextState).to.equal(Map(
      {
        name: 'form',
        method: 'get',
        title: 'Form',
        components: List.of(Map({
          id: 0,
          title: 'Default title',
          formControl: Map(),
        })),
      }
    ));
  });
});
