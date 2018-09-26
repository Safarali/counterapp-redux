const setActiveSession = (activeSession) => (
    {
        type: "SET_ACTIVE_SESSION",
        payload: activeSession
    }
);


const updateCounter = (type, changeAmount) => (
    {
        type,
        payload: changeAmount
    }
);


export { setActiveSession, updateCounter };
