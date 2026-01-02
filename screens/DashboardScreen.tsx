
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const DashboardScreen: React.FC = () => {
    const navigate = useNavigate();

    const transactions = [
        {
            type: 'expense',
            icon: 'shopping_cart',
            title: 'Supermercado',
            subtitle: 'Compras da semana',
            amount: '- R$ 450,00',
            time: 'Hoje',
            color: 'text-white',
            bg: 'bg-[#283930]'
        },
        {
            type: 'income',
            icon: 'payments',
            title: 'Salário Mensal',
            subtitle: 'Empresa LTDA',
            amount: '+ R$ 5.000,00',
            time: 'Ontem',
            color: 'text-primary',
            bg: 'bg-primary/10'
        }
    ];

    return (
        <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-24 max-w-md mx-auto">
            {/* Top App Bar */}
            <header className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-20">
                <div className="flex items-center gap-3" onClick={() => navigate('/profile')}>
                    <div className="flex size-10 shrink-0 items-center cursor-pointer">
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCwfWcJ2kJlhq68vcMwBQNHbIK8Q6se15VcFOwkokyT2QCIsT7toVPYqFbsTTb31A4o-79404E-hnC-iJFrBs55B0iwu9qgDXlry7ABjUaxjBwm43hMBm5QfJTxUy3i0gNWNzi70BBZysWjV-YdlKvzjuXynyWbwTOKABCA6rykeWDl1ePB1imVNWqdtUG6aDXcYrjDZ4jFciGq_nKPiYz0hsEpfoOfLHXyIWraqQLOvNlyFxyd1X-f98OvsyCrGVebxxJTHIBmAN6S")' }}></div>
                    </div>
                    <div className="flex flex-col cursor-pointer">
                        <p className="text-text-secondary text-xs font-medium">Bom dia,</p>
                        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Alexandre</h2>
                    </div>
                </div>
                <div className="flex items-center justify-end gap-2">
                    <button className="flex items-center justify-center rounded-full size-10 hover:bg-white/5 transition-colors">
                        <span className="material-symbols-outlined text-slate-900 dark:text-white" style={{ fontSize: '24px' }}>notifications</span>
                    </button>
                </div>
            </header>

            <main>
                {/* Balance Card */}
                <div className="p-4">
                    <div className="relative flex flex-col items-stretch justify-start rounded-2xl shadow-lg bg-card-dark overflow-hidden">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAamJe30NyL9SVejcXLf_nGPFaIJMToL5eioGmdrNKwtCTKS5vB-n-641zHGC6fpj5o8wGmaCoCc2KTDNg3bzcQalo0cpt9NKptOg3CqKKu6smrSyZjS7kZnvn7nVxvMPjhbqTck4rIviCNnNf-q8VNU9cy_htjD2TKgsI1bJdA1k6R4pVj-Di-opNVz2gQj8R414IqhJKRIkE-cDSKJkEN3op168XAI_Tp_5e5kVvSNk35uDVZIuvMIYtpBTcuQ7AGRTXhQeS9vSYB")' }}></div>
                        <div className="relative z-10 flex w-full grow flex-col items-stretch justify-center gap-1 p-5">
                            <div className="flex justify-between items-start mb-2">
                                <p className="text-text-secondary text-sm font-medium leading-normal flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">account_balance_wallet</span>
                                    Balanço Total
                                </p>
                                <span className="material-symbols-outlined text-text-secondary cursor-pointer hover:text-white transition-colors" style={{ fontSize: '20px' }}>visibility</span>
                            </div>
                            <p className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-6">R$ 12.450,00</p>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="flex flex-col gap-1 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5">
                                    <div className="flex items-center gap-1 mb-1">
                                        <div className="rounded-full bg-primary/20 p-1">
                                            <span className="material-symbols-outlined text-primary text-xs block">arrow_downward</span>
                                        </div>
                                        <span className="text-text-secondary text-xs font-medium">Receitas</span>
                                    </div>
                                    <span className="text-white font-bold tracking-tight">+ R$ 5.000,00</span>
                                </div>
                                <div className="flex flex-col gap-1 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5">
                                    <div className="flex items-center gap-1 mb-1">
                                        <div className="rounded-full bg-red-500/20 p-1">
                                            <span className="material-symbols-outlined text-red-400 text-xs block">arrow_upward</span>
                                        </div>
                                        <span className="text-text-secondary text-xs font-medium">Despesas</span>
                                    </div>
                                    <span className="text-white font-bold tracking-tight">- R$ 2.450,00</span>
                                </div>
                            </div>
                            <button onClick={() => navigate('/add-transaction')} className="w-full flex cursor-pointer items-center justify-center rounded-xl h-12 px-4 bg-primary hover:bg-green-400 active:scale-[0.98] transition-all text-background-dark text-base font-bold leading-normal gap-2 shadow-[0_0_15px_rgba(19,236,128,0.3)]">
                                <span className="material-symbols-outlined text-xl">add_circle</span>
                                <span className="truncate">Nova Transação</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Charts Section */}
                <div className="px-4 py-2">
                    <div className="flex flex-col gap-4 rounded-2xl bg-card-dark p-5 shadow-sm border border-white/5">
                        <div className="flex justify-between items-end">
                            <div className="flex flex-col gap-1">
                                <p className="text-text-secondary text-xs font-medium uppercase tracking-wider">Fluxo de Caixa</p>
                                <div className="flex items-baseline gap-2">
                                    <p className="text-white text-2xl font-bold leading-tight">+ R$ 2.550,00</p>
                                    <span className="inline-flex items-center gap-0.5 rounded px-1.5 py-0.5 text-xs font-medium bg-primary/10 text-primary">
                                        <span className="material-symbols-outlined text-[10px]">trending_up</span>
                                        12%
                                    </span>
                                </div>
                                <p className="text-text-secondary text-xs font-normal">Setembro, 2023</p>
                            </div>
                            <div className="flex bg-background-dark/50 rounded-lg p-0.5">
                                <button className="px-3 py-1 text-xs font-bold text-background-dark bg-primary rounded-md shadow-sm">Mês</button>
                                <button className="px-3 py-1 text-xs font-medium text-text-secondary hover:text-white">Ano</button>
                            </div>
                        </div>
                        <div className="relative w-full h-[140px] mt-2">
                            {/* SVG Chart Mock */}
                            <svg className="w-full h-full overflow-visible" fill="none" preserveAspectRatio="none" viewBox="0 0 350 100">
                                <defs>
                                    <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                        <stop offset="0%" stopColor="#13ec80" stopOpacity="0.2"></stop>
                                        <stop offset="100%" stopColor="#13ec80" stopOpacity="0"></stop>
                                    </linearGradient>
                                </defs>
                                <path d="M0 80 C40 80 50 30 90 40 C130 50 140 70 180 50 C220 30 250 10 290 20 C320 28 340 10 350 5 V100 H0 Z" fill="url(#chartGradient)"></path>
                                <path d="M0 80 C40 80 50 30 90 40 C130 50 140 70 180 50 C220 30 250 10 290 20 C320 28 340 10 350 5" stroke="#13ec80" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
                                <circle cx="90" cy="40" fill="#102219" r="4" stroke="#13ec80" strokeWidth="2"></circle>
                                <circle cx="180" cy="50" fill="#102219" r="4" stroke="#13ec80" strokeWidth="2"></circle>
                                <circle cx="290" cy="20" fill="#13ec80" r="4"></circle>
                            </svg>
                            <div className="flex justify-between mt-2 px-2">
                                <p className="text-text-secondary text-[10px] font-medium">Sem 1</p>
                                <p className="text-text-secondary text-[10px] font-medium">Sem 2</p>
                                <p className="text-text-secondary text-[10px] font-medium">Sem 3</p>
                                <p className="text-text-secondary text-[10px] font-medium">Sem 4</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Transactions */}
                <div className="flex items-center justify-between px-4 pb-2 pt-6">
                    <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Últimas Transações</h3>
                    <button className="text-primary text-sm font-bold hover:underline">Ver tudo</button>
                </div>
                <div className="flex flex-col gap-2 px-4 mb-20">
                    {transactions.map((tx, index) => (
                         <div key={index} className="flex items-center gap-4 bg-card-dark rounded-xl px-4 py-3 justify-between active:scale-[0.99] transition-transform cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className={`${tx.color} ${tx.bg} flex items-center justify-center rounded-full shrink-0 size-12 border border-white/5`}>
                                    <span className="material-symbols-outlined" style={{fontSize: '24px'}}>{tx.icon}</span>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-white text-base font-medium leading-normal line-clamp-1">{tx.title}</p>
                                    <p className="text-text-secondary text-xs font-normal leading-normal line-clamp-2">{tx.subtitle}</p>
                                </div>
                            </div>
                            <div className="shrink-0 text-right">
                                <p className={`${tx.type === 'income' ? 'text-primary' : 'text-white'} text-base font-bold leading-normal`}>{tx.amount}</p>
                                <p className="text-text-secondary text-[10px]">{tx.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <BottomNav active="dashboard" />
        </div>
    );
};

export default DashboardScreen;
