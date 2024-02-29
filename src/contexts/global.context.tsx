import { FC, createContext, useState, PropsWithChildren } from 'react';


type GlobalContextType = {
  isModalOpen: boolean;
  setModalOpen: (openModal: boolean) => void;
  isFormInModal: boolean;
  setIsFormInModal: (formInModal: boolean) => void;
}

export const GlobalContext = createContext<GlobalContextType>({
  isModalOpen: false,
  setModalOpen: () => {},
  isFormInModal: false,
  setIsFormInModal: () => {},
});

export const GlobalProvider: FC<PropsWithChildren>  = ({ children }) => {

  const [isModalOpen, setModalOpen] = useState(false);
  const [isFormInModal, setIsFormInModal] = useState(false);

  const value = { isModalOpen, setModalOpen, isFormInModal, setIsFormInModal };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
