import { useSession } from "next-auth/react";
import { createContext, useContext } from "react";
import useSWR from "swr";
import fetcher from "../libs/fetcher";

const UserContext = createContext();

export function UserWrapper({ children }) {
  const { data: session, status } = useSession();

  const {
    data: userData,
    error: userError,
    mutate: mutateUser,
  } = useSWR(() => `/api/login/${session.user.email}`, fetcher);
  // console.log("userData:", userData);
  if (userError) {
    console.log(userError);
  }

  return (
    <UserContext.Provider value={{ userData, mutateUser }}>
      {children}
    </UserContext.Provider>
  );
}

// custom user hook
export function useUserContext() {
  return useContext(UserContext);
}
