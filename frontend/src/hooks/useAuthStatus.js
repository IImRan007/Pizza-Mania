import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/user/UserContext";

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  // Get user from state
  const { state } = useContext(UserContext);

  useEffect(() => {
    if (state.user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }

    setCheckingStatus(false);
  }, [state.user]);

  return { loggedIn, checkingStatus };
};
