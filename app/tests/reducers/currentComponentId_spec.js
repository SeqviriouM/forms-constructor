import { expect } from 'chai';
import { currentComponentId } from '../../reducers/currentComponentId';
import { setComponentId } from '../../actions/currentComponentId';

describe('currentComponentId reducer', () => {
  it('handle INIT', () => {
    const initialState = undefined;
    const nextState = currentComponentId(initialState, {});

    expect(nextState).to.equal(-1);
  });


  it('handle SET', () => {
    const initialState = -1;
    const nextState = currentComponentId(initialState, setComponentId({ currentId: 0 }));

    expect(nextState).to.equal(0);
  });
});
