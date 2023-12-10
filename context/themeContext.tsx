/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, useState } from 'react';

interface ConnectProps {
  approvalModal: any,
  setApprovalModal: any,
  WCURI: any,
  setWCUri: any, 
}

const ConnectContext = createContext<ConnectProps> ({
	approvalModal: null,
	setApprovalModal: () => null, 
	WCURI: null,
	setWCUri: () => () => null, 
});

export const ConnectContextProvider = ({children}: any) => {
	const [approvalModal, setApprovalModal] = useState();
	const [WCURI, setWCUri] = useState<string>();
	return (
		<ConnectContext.Provider value={{approvalModal, setApprovalModal, WCURI, setWCUri}}>
			{children}
		</ConnectContext.Provider>
	);
};

export const useConnectProvider = () => useContext(ConnectContext); 