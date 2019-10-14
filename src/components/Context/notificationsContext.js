import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { SnackbarProvider, useSnackbar } from 'notistack';
import Notification from "../Notification/Notification";

const NotificationsContext = createContext({});

function NotificationsProvider({ children }) {
  return (
    <SnackbarProvider
      maxSnack={8}
      preventDuplicate
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}>
      <NotificationsContent>
        {children}
      </NotificationsContent>
    </SnackbarProvider>
  )
}

function NotificationsContent({ children }) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [state, setState] = useState({
    todoCount: 0,
    todoData: [],
    ordersCount: 0,
    ordersData: [],
  });
  
  const showNotification = useCallback(({
                                          key = '',
                                          title = '',
                                          message = '',
                                          path,
                                          icon,
                                          type,
                                          autoHideDuration = 5000,
                                          playSound = false,
                                          persist = false
                                        }) => {
    enqueueSnackbar(message, {
      key,
      persist,
      autoHideDuration: autoHideDuration,
      content: (
        <div>
          <Notification
            title={title}
            message={message}
            path={path}
            type={type}
            icon={icon}
            playSound={playSound}
            closeHandler={() => closeSnackbar(key)}
          />
        </div>
      )
    });
  }, [closeSnackbar, enqueueSnackbar]);
  
  const value = useMemo(() => {
    return {
      state: {
        ...state,
        showNotification
      },
      setState
    }
    // eslint-disable-next-line
  }, [state]);
  
  return (
    <NotificationsContext.Provider value={value}>
      {children}
    </NotificationsContext.Provider>
  );
}

function useNotificationsContext() {
  const context = useContext(NotificationsContext);
  if (!context) {
    throw new Error('useNotificationsContext must be used within a NotificationsProvider');
  }
  
  const { state } = context;
  const {
    showNotification,
  } = state;
  
  function showErrorNotification({ key = 'error', title = 'Что-то пошло не так!', message = 'Попробуйте ещё раз' }) {
    showNotification({
      key,
      title,
      message,
      icon: 'warning',
      type: 'error',
    })
  }
  
  function showSuccessNotification({ title, message }) {
    showNotification({
      key: 'success',
      title,
      message,
      type: 'success',
    })
  }
  
  return {
    showNotification,
    showErrorNotification,
    showSuccessNotification,
  }
}

export { NotificationsProvider, useNotificationsContext }
