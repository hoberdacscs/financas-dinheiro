
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddTransactionScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-white min-h-screen flex flex-col antialiased selection:bg-primary selection:text-black overflow-x-hidden">
            <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-4 bg-background-light dark:bg-background-dark/95 backdrop-blur-md">
                <button onClick={() => navigate(-1)} className="flex items-center justify-center p-2 -ml-2 text-gray-900 dark:text-white rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
                    <span className="material-symbols-outlined text-[24px]">close</span>
                </button>
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Nova Transação</h2>
                <button className="flex items-center justify-end">
                    <p className="text-primary text-base font-bold leading-normal tracking-[0.015em] hover:opacity-80 transition-opacity">Limpar</p>
                </button>
            </header>

            <main className="flex-1 flex flex-col w-full max-w-md mx-auto px-4 pb-24">
                <div className="flex py-4">
                    <div className="relative flex h-12 w-full items-center rounded-xl bg-gray-200 dark:bg-surface-dark p-1">
                        <input className="peer/receita hidden" id="receita" name="type" type="radio" value="receita"/>
                        <input defaultChecked className="peer/despesa hidden" id="despesa" name="type" type="radio" value="despesa"/>
                        <label className="flex-1 flex cursor-pointer items-center justify-center rounded-lg py-2 text-sm font-bold transition-all duration-200 text-gray-500 dark:text-gray-400 peer-checked/receita:bg-white dark:peer-checked/receita:bg-background-dark peer-checked/receita:text-green-600 peer-checked/receita:shadow-sm" htmlFor="receita">
                            <span className="material-symbols-outlined mr-2 text-[18px]">arrow_upward</span>
                            Receita
                        </label>
                        <label className="flex-1 flex cursor-pointer items-center justify-center rounded-lg py-2 text-sm font-bold transition-all duration-200 text-gray-500 dark:text-gray-400 peer-checked/despesa:bg-white dark:peer-checked/despesa:bg-background-dark peer-checked/despesa:text-red-500 peer-checked/despesa:shadow-sm" htmlFor="despesa">
                            <span className="material-symbols-outlined mr-2 text-[18px]">arrow_downward</span>
                            Despesa
                        </label>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center py-8">
                    <label className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Valor da transação</label>
                    <div className="relative flex items-center justify-center">
                        <span className="text-3xl font-bold text-gray-400 mr-2">R$</span>
                        <input autoFocus className="bg-transparent border-none p-0 text-center text-5xl font-extrabold text-gray-900 dark:text-white placeholder-gray-700 dark:placeholder-gray-600 focus:ring-0 w-full max-w-[280px] caret-primary" inputMode="decimal" placeholder="0,00" type="text"/>
                    </div>
                </div>

                <div className="flex flex-col gap-4 mt-2">
                    <div className="group relative bg-white dark:bg-surface-dark rounded-xl p-4 transition-all focus-within:ring-2 focus-within:ring-primary/50">
                        <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Descrição</label>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-background-dark text-gray-500 dark:text-gray-400">
                                <span className="material-symbols-outlined text-[18px]">edit_note</span>
                            </div>
                            <input className="flex-1 bg-transparent border-none p-0 text-base font-medium text-gray-900 dark:text-white placeholder-gray-400 focus:ring-0" placeholder="Ex: Almoço de domingo" type="text"/>
                        </div>
                    </div>

                    <button className="w-full text-left group relative bg-white dark:bg-surface-dark rounded-xl p-4 transition-all active:scale-[0.99] hover:bg-gray-50 dark:hover:bg-opacity-80">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Categoria</span>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500/10 text-yellow-500">
                                        <span className="material-symbols-outlined text-[18px] filled">restaurant</span>
                                    </div>
                                    <span className="text-base font-medium text-gray-900 dark:text-white">Alimentação</span>
                                </div>
                            </div>
                            <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                        </div>
                    </button>

                    <div className="flex gap-4">
                        <button className="flex-1 text-left group relative bg-white dark:bg-surface-dark rounded-xl p-4 transition-all active:scale-[0.99]">
                            <span className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Data</span>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-background-dark text-gray-500 dark:text-gray-400">
                                    <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                                </div>
                                <span className="text-base font-medium text-gray-900 dark:text-white">Hoje, 24 Out</span>
                            </div>
                        </button>
                        <button className="flex-none w-[100px] text-left group relative bg-white dark:bg-surface-dark rounded-xl p-4 flex flex-col items-center justify-center gap-1 active:bg-primary/10 transition-colors">
                            <span className="material-symbols-outlined text-[24px] text-gray-400 group-hover:text-primary transition-colors">repeat</span>
                            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Repetir</span>
                        </button>
                    </div>
                     <button className="w-full flex items-center justify-center gap-2 py-3 mt-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-[20px]">add_a_photo</span>
                        Adicionar anexo ou comprovante
                    </button>
                </div>
            </main>

            <div className="fixed bottom-0 left-0 w-full p-4 bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark dark:to-transparent pb-8 pt-12 pointer-events-none">
                <button onClick={() => navigate('/dashboard')} className="w-full pointer-events-auto bg-primary hover:bg-emerald-400 text-black text-lg font-bold py-4 rounded-xl shadow-lg shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[24px]">check</span>
                    Salvar Transação
                </button>
            </div>
        </div>
    );
};

export default AddTransactionScreen;
