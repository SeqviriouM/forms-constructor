import { List, Map } from 'immutable';
import { expect } from 'chai';
import { form } from '../../reducers/form';
import { getDefaultData, addComponent, deleteComponent, cancelDeletionComponent, updateComponents } from '../../actions/form';

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


  it('handle DELETE_COMPONENT', () => {
    const initialState = Map({
      name: 'form',
      method: 'get',
      title: 'Form',
      components: List.of(
        Map({
          id: 0,
          title: 'Default title',
          formControl: Map(),
        }),
        Map({
          id: 1,
          title: 'Default title',
          formControl: Map(),
        })
      ),
    });

    const nextState = form(initialState, deleteComponent({ id: 0 }));

    expect(nextState).to.equal(Map({
      name: 'form',
      method: 'get',
      title: 'Form',
      components: List.of(
        Map({
          id: 0,
          title: 'Default title',
          formControl: Map(),
          isDeleted: true,
        }),
        Map({
          id: 1,
          title: 'Default title',
          formControl: Map(),
        })
      ),
    }));
  });


  it('handle CANCEL_DELETION_COMPONENT', () => {
    const initialState = Map({
      name: 'form',
      method: 'get',
      title: 'Form',
      components: List.of(
        Map({
          id: 0,
          title: 'Default title',
          formControl: Map(),
          isDeleted: true,
        }),
        Map({
          id: 1,
          title: 'Default title',
          formControl: Map(),
          isDeleted: false,
        })
      ),
    });

    const nextState = form(initialState, cancelDeletionComponent({ id: 0 }));

    expect(nextState).to.equal(Map({
      name: 'form',
      method: 'get',
      title: 'Form',
      components: List.of(
        Map({
          id: 0,
          title: 'Default title',
          formControl: Map(),
          isDeleted: false,
        }),
        Map({
          id: 1,
          title: 'Default title',
          formControl: Map(),
          isDeleted: false,
        })
      ),
    }));
  });
});
