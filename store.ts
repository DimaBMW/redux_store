//созданеи store c middleware для api
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
     redures_name: import_name,

    [import_name.reducerPath]: import_name.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(
      import_name.middleware,
      import_name.middleware,
    ),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

  //подключение store
import App from './components/App';
import { Provider } from 'react-redux';
import store from 'store/store'
  <Provider store={store}>
    <App />
  </Provider>,
