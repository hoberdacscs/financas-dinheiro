
import React from 'react';
import BottomNav from '../components/BottomNav';

type Category = {
    name: string;
    icon: string;
    color: string;
    value: string;
    pct?: string;
};

const categoryColorClasses: { [key: string]: { bg: string; text: string; progress: string } } = {
    orange: { bg: 'bg-orange-100 dark:bg-orange-500/20', text: 'text-orange-600 dark:text-orange-400', progress: 'bg-orange-500' },
    blue: { bg: 'bg-blue-100 dark:bg-blue-500/20', text: 'text-blue-600 dark:text-blue-400', progress: 'bg-blue-500' },
    purple: { bg: 'bg-purple-100 dark:bg-purple-500/20', text: 'text-purple-600 dark:text-purple-400', progress: 'bg-purple-500' },
    pink: { bg: 'bg-pink-100 dark:bg-pink-500/20', text: 'text-pink-600 dark:text-pink-400', progress: 'bg-pink-500' },
    teal: { bg: 'bg-teal-100 dark:bg-teal-500/20', text: 'text-teal-600 dark:text-teal-400', progress: 'bg-teal-500' },
};

const CategoriesScreen: React.FC = () => {
    const categories: Category[] = [
        { name: 'Moradia', icon: 'home', color: 'orange', value: '1.200,00', pct: '80%' },
        { name: 'Alimentação', icon: 'lunch_dining', color: 'blue', value: '600,00', pct: '45%' },
        { name: 'Transporte', icon: 'directions_car', color: 'purple', value: '350,00' },
        { name: 'Vestuário', icon: 'checkroom', color: 'pink', value: '150,00' },
        { name: 'Saúde e Lazer', icon: 'fitness_center', color: 'teal', value: '150,00' }
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark font-display antialiased text-gray-900 dark:text-gray-100 min-h-screen flex flex-col overflow-hidden">
            <header className="flex items-center justify-between px-4 pt-12 pb-2 bg-background-light dark:bg-background-dark sticky top-0 z-20">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white flex-1">Categorias</h1>
                <button className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-background-dark hover:bg-opacity-90 transition-colors shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>add</span>
                </button>
            </header>
            
            <div className="px-4 py-2 sticky top-[88px] z-20 bg-background-light dark:bg-background-dark pb-4">
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500 dark:text-[#9db9ab]">
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>search</span>
                    </div>
                    <input className="block w-full p-3 pl-10 text-sm rounded-xl bg-white dark:bg-surface-dark border-none ring-1 ring-gray-200 dark:ring-white/5 focus:ring-2 focus:ring-primary dark:focus:ring-primary placeholder-gray-400 dark:placeholder-[#9db9ab]/50 text-gray-900 dark:text-white shadow-sm" placeholder="Buscar categorias..." type="text"/>
                </div>
            </div>

            <main className="flex-1 overflow-y-auto pb-24 px-4 space-y-6 no-scrollbar">
                <div className="flex p-1 bg-gray-200 dark:bg-surface-dark rounded-xl">
                    <label className="flex-1 relative cursor-pointer">
                        <input defaultChecked className="peer sr-only" name="category_type" type="radio" value="expenses"/>
                        <div className="py-2 px-4 rounded-lg text-center text-sm font-semibold text-gray-500 dark:text-[#9db9ab] transition-all peer-checked:bg-white dark:peer-checked:bg-background-dark peer-checked:text-gray-900 dark:peer-checked:text-white peer-checked:shadow-sm">
                            Despesas
                        </div>
                    </label>
                    <label className="flex-1 relative cursor-pointer">
                        <input className="peer sr-only" name="category_type" type="radio" value="income"/>
                        <div className="py-2 px-4 rounded-lg text-center text-sm font-semibold text-gray-500 dark:text-[#9db9ab] transition-all peer-checked:bg-white dark:peer-checked:bg-background-dark peer-checked:text-gray-900 dark:peer-checked:text-white peer-checked:shadow-sm">
                            Receitas
                        </div>
                    </label>
                </div>

                <div className="mb-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-[#9db9ab] mb-3 ml-1">Maiores Gastos</h3>
                    <div className="bg-white dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-gray-100 dark:border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                        <div className="flex items-center justify-between mb-2 relative z-10">
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Total Despesas</span>
                            <span className="text-lg font-bold text-gray-900 dark:text-white">R$ 2.450,00</span>
                        </div>
                        <div className="w-full bg-gray-100 dark:bg-background-dark rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-[#9db9ab] mt-2 text-right">65% do orçamento mensal</p>
                    </div>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-[#9db9ab] mb-2 ml-1">Categorias</h3>
                    {categories.map((cat, idx) => (
                        <div key={idx} className="group flex items-center justify-between bg-white dark:bg-surface-dark p-3 pr-4 rounded-xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-primary/30 transition-all cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${categoryColorClasses[cat.color].bg} ${categoryColorClasses[cat.color].text}`}>
                                    <span className="material-symbols-outlined filled">{cat.icon}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-base font-bold text-gray-900 dark:text-white leading-tight">{cat.name}</span>
                                    <span className="text-sm text-gray-500 dark:text-[#9db9ab]">R$ {cat.value} este mês</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                {cat.pct && (
                                    <div className="hidden sm:flex flex-col items-end w-24 gap-1">
                                        <span className="text-[10px] text-gray-400">{cat.pct} do limite</span>
                                        <div className="w-full bg-gray-100 dark:bg-background-dark rounded-full h-1">
                                            <div className={`${categoryColorClasses[cat.color].progress} h-1 rounded-full`} style={{ width: cat.pct }}></div>
                                        </div>
                                    </div>
                                )}
                                <span className="material-symbols-outlined text-gray-400 dark:text-[#9db9ab] group-hover:text-primary transition-colors" style={{ fontSize: '20px' }}>chevron_right</span>
                            </div>
                        </div>
                    ))}

                    <button className="w-full flex items-center justify-center gap-2 p-4 mt-2 border-2 border-dashed border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary rounded-xl text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>add_circle</span>
                        <span className="text-sm font-semibold">Nova Categoria</span>
                    </button>
                </div>
            </main>
            <BottomNav active="categories" />
        </div>
    );
};

export default CategoriesScreen;
