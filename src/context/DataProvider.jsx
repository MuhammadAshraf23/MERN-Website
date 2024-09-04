import { createContext, useState } from "react";

export const DataContext = createContext(null);

const signupInitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phoneNumber: "",
};

const DataProvider = ({ children }) => {
  const [account, setAccount] = useState('');
  const [signup, setSignup] = useState(signupInitialValues);
  return (
    <DataContext.Provider value={{ account, setAccount, signup, setSignup }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
