import keyMirror from 'keymirror';

export const ACTIONS = keyMirror({
  HOME_CONTAINER_MOUNT: null,
  HOME_CONTAINER_UNMOUNT: null,

  HOME_CONTAINER_SORT_TABLE: null,
  HOME_CONTAINER_CHANGE_FORM: null,

  HOME_CONTAINER_ADD_DATA_REQUEST: null,
  HOME_CONTAINER_ADD_DATA_SUCCESS: null,
  HOME_CONTAINER_ADD_DATA_FAIL: null
});

export const LIST_HEADERS = [
  'Дата',
  'Выручка',
  'Серебро руб',
  'Индекс ММВБ'
];