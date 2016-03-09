import { expect } from 'chai';
import { currentControlId } from '../../reducers/currentControlId';
import { setControlId } from '../../actions/currentControlId';

describe('currentControlId reducer', () => {
  it('handle INIT', () => {
    const initialState = undefined;
    const nextState = currentControlId(initialState, {});

    expect(nextState).to.equal(-1);
  });


  it('handle SET', () => {
    const initialState = -1;
    const nextState = currentControlId(initialState, setControlId({ currentId: 0 }));

    expect(nextState).to.equal(0);
  });
});
