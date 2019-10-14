import React, { createContext, useContext, useMemo, useState } from "react";

const AppContext = createContext({});

function AppContextProvider({ children }) {
  const [state, setState] = useState({
    isCartDropdown: false,
    isModal: {
      show: false,
      props: {},
      type: ''
    },
    isLoading: false,
    me: null,
    cart: {
      id: null,
      products: []
    },
    isAuthenticated: false,
    isFetching: true,
    eventTypesList: null,
    colorsList: null,
    metricsList: null,
    orderDeclineReasonsList: null,
    orderPaymentStatusesList: null,
    orderPaymentTypesList: null,
    orderStatusesList: null,
  });
  
  const value = useMemo(() => {
    return {
      state,
      setState
    }
  }, [state]);
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

function useAppContext() {
  const context = useContext(AppContext);
  
  if (!context) {
    throw new Error('useAppContext must be used within a AppContextProvider');
  }
  
  const { state, setState } = context;
  
  function showModal(type, props) {
    setState((prevState) => ({
      ...prevState,
      isModal: {
        show: true,
        props,
        type
      }
    }));
  }
  
  function hideModal() {
    setState((prevState) => ({
      ...prevState,
      isModal: {
        show: false,
        props: {},
        type: ''
      }
    }))
  }
  
  function showLoading() {
    setState((prevState) => ({
      ...prevState,
      isLoading: true
    }));
  }
  
  function hideLoading() {
    setState((prevState) => ({
      ...prevState,
      isLoading: false
    }));
  }
  
  function showCartDropdown() {
    setState((prevState) => ({
      ...prevState,
      isCartDropdown: true
    }));
  }
  
  function hideCartDropdown() {
    setState((prevState) => ({
      ...prevState,
      isCartDropdown: false
    }));
  }
  
  function setMeIn(user) {
    setState((prevState) => ({
      ...prevState,
      isAuthenticated: true,
      me: user
    }));
  }
  
  function setMeOut() {
    setState((prevState) => {
      return {
        ...prevState,
        isAuthenticated: false,
        me: null
      }
    });
  }
  
  function setCart(cart) {
    setState((prevState) => ({
      ...prevState,
      cart: cart
    }));
  }
  
  function resetCart() {
    setState((prevState) => ({
      ...prevState,
      cart: {
        id: null,
        products: []
      }
    }));
  }
  
  return {
    ...state,
    showModal,
    hideModal,
    showLoading,
    hideLoading,
    showCartDropdown,
    hideCartDropdown,
    setMeIn,
    setMeOut,
    setCart,
    resetCart,
  }
}

export { AppContextProvider, useAppContext };


