
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

type BudgetCategory = {
    name: string;
    icon: string;
    remaining: string;
    spent: number;
    total: number;
    color: string;
    iconBg: string;
    iconColor: string;
    statusText: string;
    statusColor: string;
    progressColor: string;
};

const budgetItems: BudgetCategory[] = [
    {
        name: 'Alimentação',
        icon: 'restaurant',
        remaining: 'R$ 400,00 restantes',
        spent: 800,
        total: 1200,
        color: 'orange',
        iconBg: 'bg-orange-100 dark:bg-orange-900/30',
        iconColor: 'text-orange-600 dark:text-orange-400',
        statusText: '',
        statusColor: '',
        progressColor: 'bg-primary'
    },
    {
        name: 'Transporte',
        icon: 'directions_car',
        remaining: '',
        spent: 350,
        total: 400,
        color: 'blue',
        iconBg: 'bg-blue-100 dark:bg-blue-900/30',
        iconColor: 'text-blue-600 dark:text-blue-400',
        statusText: 'Atenção ao limite',
        statusColor: 'text-warning',
        progressColor: 'bg-warning'
    },
    {
        name: 'Lazer',
        icon: 'movie',
        remaining: '',
        spent: 200,
        total: 150,
        color: 'purple',
        iconBg: 'bg-purple-100 dark:bg-purple-900/30',
        iconColor: 'text-purple-600 dark:text-purple-400',
        statusText: 'Excedido em R$ 50',
        statusColor: 'text-danger',
        progressColor: 'bg-danger'
    }
];

const BudgetsScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative flex h-full min-h-screen w-full flex-col max-w-md mx-auto overflow-hidden bg-background-light dark:bg-background-dark shadow-2xl">
            <header className="flex items-center justify-between p-4 pb-2 pt-6 sticky top-0 z-10 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md">
                <button onClick={() => navigate(-1)} className="flex items-center justify-center p-2 rounded-full hover:bg-slate-200 dark:hover:bg-surface-dark transition-colors">
                    <span className="material-symbols-outlined text-slate-800 dark:text-white" style={{ fontSize: '24px' }}>arrow_back</span>
                </button>
                <h1 className="text-lg font-bold leading-tight tracking-[-0.015em] text-slate-900 dark:text-white flex-1 text-center">
                    Orçamentos
                </h1>
                <button className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 shadow-sm">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px' }}>calendar_month</span>
                    <span className="text-xs font-bold text-slate-700 dark:text-white">Out</span>
                </button>
            </header>

            <main className="flex-1 overflow-y-auto no-scrollbar pb-24 px-4 flex flex-col gap-6">
                <section className="mt-2">
                    <div className="relative overflow-hidden rounded-2xl bg-surface-light dark:bg-surface-dark p-5 shadow-sm border border-slate-100 dark:border-slate-800">
                        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl"></div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-sm font-medium text-slate-500 dark:text-text-secondary">Visão Geral de Outubro</p>
                                    <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">R$ 2.350,00</h2>
                                    <p className="text-sm text-slate-500 dark:text-text-secondary mt-1">de R$ 5.000,00 planejados</p>
                                </div>
                                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '24px' }}>account_balance_wallet</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-end">
                                    <span className="text-xs font-bold text-primary">47% usado</span>
                                    <span className="text-xs font-medium text-slate-500 dark:text-text-secondary">R$ 2.650,00 restantes</span>
                                </div>
                                <div className="h-3 w-full rounded-full bg-slate-100 dark:bg-black/30 overflow-hidden">
                                    <div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: '47%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="flex items-center justify-between mb-4 px-1">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Categorias</h3>
                        <button className="text-sm font-bold text-primary hover:text-green-400 transition-colors">Ver todas</button>
                    </div>
                    <div className="flex flex-col gap-3">
                        {budgetItems.map((item, index) => (
                            <div key={index} className="group relative flex flex-col gap-3 rounded-xl bg-surface-light dark:bg-surface-dark p-4 shadow-sm border border-slate-100 dark:border-slate-800 transition-transform active:scale-[0.99]">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.iconBg} ${item.iconColor}`}>
                                            <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>{item.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="text-base font-bold text-slate-900 dark:text-white leading-tight">{item.name}</h4>
                                            <p className={`text-xs mt-0.5 ${item.statusColor || 'text-slate-500 dark:text-text-secondary'}`}>{item.statusText || item.remaining}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className={`text-sm font-bold ${item.spent > item.total ? 'text-danger' : 'text-slate-900 dark:text-white'}`}>R$ {item.spent}</p>
                                        <p className="text-xs text-slate-400 dark:text-slate-600">de R$ {item.total}</p>
                                    </div>
                                </div>
                                <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-black/30 overflow-hidden">
                                    <div className={`h-full rounded-full ${item.progressColor}`} style={{ width: `${Math.min((item.spent / item.total) * 100, 100)}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <BottomNav active="wallet" />
        </div>
    );
};

export default BudgetsScreen;
