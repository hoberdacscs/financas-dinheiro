
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './screens/WelcomeScreen';
import DashboardScreen from './screens/DashboardScreen';
import AddTransactionScreen from './screens/AddTransactionScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import BudgetsScreen from './screens/BudgetsScreen';
import ProfileScreen from './screens/ProfileScreen';

const App: React.FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<WelcomeScreen />} />
                <Route path="/dashboard" element={<DashboardScreen />} />
                <Route path="/add-transaction" element={<AddTransactionScreen />} />
                <Route path="/categories" element={<CategoriesScreen />} />
                <Route path="/budgets" element={<BudgetsScreen />} />
                <Route path="/profile" element={<ProfileScreen />} />
            </Routes>
        </HashRouter>
    );
};

export default App;
