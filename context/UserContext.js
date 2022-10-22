import { useSession } from "next-auth/react";
import { createContext, useContext } from "react";
import useSWR from "swr";

const UserContext = createContext();
const fetcher = (url) => axios.get(url).then((res) => res.data);
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

  console.log("global data", userData);

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
