import React from 'react';
import { useBusiness } from './context/BusinessContext';
import { Login } from './components/Login';
import { WebinarPresentation } from './components/WebinarPresentation';

const App = () => {
    const { user, setUser } = useBusiness();

    // Persistencia de sesión
    React.useEffect(() => {
        const savedUser = localStorage.getItem('masterclass_user');
        if (savedUser) setUser(savedUser);
    }, []);

    if (!user) return <Login />;

    return <WebinarPresentation />;
};

export default App;
