
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const ProfileScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white min-h-screen flex flex-col antialiased selection:bg-primary selection:text-black">
            <header className="sticky top-0 z-50 bg-background-light dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-white/10 px-4 py-3 flex items-center justify-between">
                <button onClick={() => navigate(-1)} className="flex items-center justify-center p-2 -ml-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
                    <span className="material-symbols-outlined text-[24px]">arrow_back_ios_new</span>
                </button>
                <h1 className="text-lg font-bold tracking-tight">Perfil</h1>
                <div className="w-10"></div>
            </header>
            <main className="flex-1 flex flex-col gap-6 px-4 pb-8 pt-4 max-w-md mx-auto w-full mb-16">
                <section className="flex flex-col items-center gap-4 py-4">
                    <div className="relative group cursor-pointer">
                        <div className="h-28 w-28 rounded-full bg-cover bg-center border-4 border-white dark:border-[#283930] shadow-lg" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBVKa-KXpunPvODosNhCVMruolI_zxek_3ciBiRF1IpMMjTa31BB2NJ55wyyZRbR7DtHkvaGHBSbHo7eJQ93Y90XT5XdFPPCsVsJdzCiD-wxRWQfRKjlWh_8VLcUTu64-BDS2EdpDskCkHvKFutbfbIqOHvoES_GTmAvpnLmc4ABH4ABHo92efudiYKxKAkaM6Ao0c1EK663WIuEZF48R4YW-mW5MFrz9A8nEvGWFBiVQxqDS7pdVLVoPHgrhP8Vdq3ypLIX1v73f3L')" }}></div>
                        <div className="absolute bottom-0 right-0 bg-primary text-black rounded-full p-1.5 border-4 border-background-light dark:border-background-dark flex items-center justify-center">
                            <span className="material-symbols-outlined text-[16px] font-bold">edit</span>
                        </div>
                    </div>
                    <div className="text-center space-y-1">
                        <h2 className="text-2xl font-extrabold leading-tight">João Silva</h2>
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">joao.silva@email.com</p>
                        <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 dark:bg-primary/20 rounded-full border border-primary/20">
                            <span className="material-symbols-outlined text-primary text-[16px]">verified</span>
                            <span className="text-xs font-bold text-primary tracking-wide uppercase">Membro Premium</span>
                        </div>
                    </div>
                </section>

                <section className="space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 px-1">Minha Conta</h3>
                    <div className="bg-white dark:bg-[#1A2C23] rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/5">
                        <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center size-10 rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                                    <span className="material-symbols-outlined">person</span>
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold text-sm">Dados Pessoais</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Nome, e-mail e telefone</p>
                                </div>
                            </div>
                            <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 group-hover:text-primary transition-colors text-[20px]">arrow_forward_ios</span>
                        </button>
                        <div className="h-px bg-gray-100 dark:bg-white/5 mx-4"></div>
                        <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center size-10 rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400">
                                    <span className="material-symbols-outlined">security</span>
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold text-sm">Segurança</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">FaceID, Senha e PIN</p>
                                </div>
                            </div>
                            <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 group-hover:text-primary transition-colors text-[20px]">arrow_forward_ios</span>
                        </button>
                    </div>
                </section>

                <section className="space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 px-1">Preferências</h3>
                    <div className="bg-white dark:bg-[#1A2C23] rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/5">
                        <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-white/5">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center size-10 rounded-xl bg-yellow-100 text-yellow-600 dark:bg-yellow-500/20 dark:text-yellow-400">
                                    <span className="material-symbols-outlined">notifications</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Notificações</p>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input defaultChecked className="sr-only peer" type="checkbox"/>
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                            </label>
                        </div>
                        <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center size-10 rounded-xl bg-teal-100 text-teal-600 dark:bg-teal-500/20 dark:text-teal-400">
                                    <span className="material-symbols-outlined">payments</span>
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold text-sm">Moeda Principal</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">BRL (R$)</span>
                                <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 group-hover:text-primary transition-colors text-[20px]">arrow_forward_ios</span>
                            </div>
                        </button>
                        <div className="h-px bg-gray-100 dark:bg-white/5 mx-4"></div>
                        <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center size-10 rounded-xl bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                                    <span className="material-symbols-outlined">dark_mode</span>
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold text-sm">Aparência</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Escuro</span>
                                <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 group-hover:text-primary transition-colors text-[20px]">arrow_forward_ios</span>
                            </div>
                        </button>
                    </div>
                </section>

                <div className="pt-4 flex flex-col gap-4">
                    <button onClick={() => navigate('/')} className="w-full py-3.5 px-4 rounded-xl border border-red-200 dark:border-red-900/30 text-red-600 dark:text-red-400 font-bold bg-red-50 hover:bg-red-100 dark:bg-red-900/10 dark:hover:bg-red-900/20 transition-all flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined">logout</span>
                        Sair da Conta
                    </button>
                    <p className="text-center text-xs text-gray-400 dark:text-gray-600">
                        Versão 2.4.0 (Build 184)
                    </p>
                </div>
            </main>
            <BottomNav active="profile" />
        </div>
    );
};

export default ProfileScreen;
