import { fromJS } from 'immutable';
import { ACTIONS } from '../constants';

/**
 *
 * @param state
 */
export const appInitSuccess = (state) => (
  state.merge({
    isInitialized: true,
  })
);

export const appInitFail = (state, error) => state.merge({
  error,
  isInitialized: true
});

const initialApplicationState = fromJS({
  isInitialized: false,
  menuItems: [
    {
      id: 1,
      title: 'Главная',
      route: '/'
    },
    {
      id: 2,
      title: 'Графики',
      route: '/charts'
    }
  ]
});

export function application(state = initialApplicationState, action) {
  switch (action.type) {
    case ACTIONS.APPLICATION_INIT_SUCCESS:
      return appInitSuccess(state, action.payload);
    case ACTIONS.APPLICATION_INIT_FAIL:
    default:
      return state;
  }
}
