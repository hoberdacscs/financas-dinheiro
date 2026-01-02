
import React from 'react';
import { useNavigate } from 'react-router-dom';

type NavItem = {
    id: string;
    icon: string;
    label?: string;
    path: string;
    isFab?: boolean;
    filled?: boolean;
};

type BottomNavProps = {
    active: string;
};

const BottomNav: React.FC<BottomNavProps> = ({ active }) => {
    const navigate = useNavigate();

    const navItems: NavItem[] = [
        { id: 'dashboard', icon: 'grid_view', label: 'Resumo', path: '/dashboard', filled: active === 'dashboard' },
        { id: 'wallet', icon: 'account_balance_wallet', label: 'Carteira', path: '/budgets' },
        { id: 'add', icon: 'add', isFab: true, path: '/add-transaction' },
        { id: 'categories', icon: 'category', label: 'Categorias', path: '/categories' },
        { id: 'profile', icon: 'person', label: 'Perfil', path: '/profile', filled: active === 'profile' }
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 z-30 flex justify-center w-full px-4 pb-4 pt-2 bg-gradient-to-t from-background-dark via-background-dark/95 to-transparent pointer-events-none">
            <div className="pointer-events-auto flex w-full max-w-md items-center justify-around rounded-2xl bg-[#1c2721] bg-opacity-95 backdrop-blur-md border border-white/5 px-2 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
                {navItems.map((item) => {
                    if (item.isFab) {
                        return (
                            <div key={item.id} className="relative -top-6">
                                <button
                                    onClick={() => navigate(item.path)}
                                    className="flex items-center justify-center size-14 rounded-full bg-primary text-background-dark shadow-[0_0_20px_rgba(19,236,128,0.4)] hover:scale-105 transition-transform">
                                    <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>{item.icon}</span>
                                </button>
                            </div>
                        );
                    }
                    return (
                        <button
                            key={item.id}
                            onClick={() => navigate(item.path)}
                            className={`flex flex-col items-center justify-center gap-1 p-2 w-14 rounded-xl transition-colors ${item.id === active ? 'text-primary' : 'text-text-secondary hover:text-white'}`}>
                            <span className={`material-symbols-outlined ${item.filled || item.id === active ? 'filled' : ''}`}>
                                {item.icon}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default BottomNav;
