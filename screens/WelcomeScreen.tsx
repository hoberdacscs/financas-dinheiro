
import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomeScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative flex h-full min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white transition-colors duration-200 overflow-x-hidden">
            {/* Header */}
            <header className="sticky top-0 z-10 flex items-center bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 pb-2 justify-between">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>account_balance_wallet</span>
                </div>
                <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">FinControl</h2>
                <button onClick={() => navigate('/dashboard')} className="flex w-12 items-center justify-end group">
                    <p className="text-slate-500 dark:text-[#9db9ab] text-base font-bold leading-normal tracking-[0.015em] shrink-0 group-hover:text-primary transition-colors">Pular</p>
                </button>
            </header>

            {/* Carousel */}
            <main className="flex-1 flex flex-col justify-center py-4">
                <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory px-4 pb-4 gap-4">
                    {/* Card 1 */}
                    <div className="flex flex-col gap-4 rounded-2xl bg-card-light dark:bg-card-dark shadow-sm dark:shadow-none min-w-[85vw] sm:min-w-[320px] snap-center p-5 border border-slate-200 dark:border-white/5">
                        <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl flex flex-col relative overflow-hidden" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCscwGTC3cfZGSWWLlDWJaCcsO6_SlvsedNIUPtqyIDZJYkM00JeQ7hUAGfJ0vvN0vfh6dlUM8lM8AZQrqY5nbjEZW4nTKShGv46E4pxEm_q1YXPahIM6sQ1FaT7Bv79t88Tp-XsHvxfwhVTIv8rN9lNIfjodHkF2iAVB0VajRnglLEY-MbkCeste0e9_aOKjUKy-t9o9eYJ0SkCp9NJs9r82SsnYeGQXrarbiUFqfAgvUwacYXLBpaa55rQ2vcypFizpvtD1dWTQYo")' }}>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                        <div className="flex flex-col flex-1 justify-between gap-2">
                            <div>
                                <h3 className="text-slate-900 dark:text-white text-xl font-extrabold leading-tight mb-2">Domine suas Finanças</h3>
                                <p className="text-slate-500 dark:text-[#9db9ab] text-base font-medium leading-relaxed">
                                    Sua liberdade financeira começa aqui. Gerencie contas e cartões em um só lugar.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="flex flex-col gap-4 rounded-2xl bg-card-light dark:bg-card-dark shadow-sm dark:shadow-none min-w-[85vw] sm:min-w-[320px] snap-center p-5 border border-slate-200 dark:border-white/5">
                        <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl flex flex-col relative overflow-hidden" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCMk769NOwYGCkYKVGokHW57DSsOZT1KTdWuvwMHKO1ATIq1XJL2PdHX_wXP0Gguq5mg5G8UD6pq-WiwfebEvzNK5SOXNG4E30DRxYY81q-iyubqylvfEZ1k721njz1-QcV0zvNALU5-ZamhlWthF6FV4cJCpbg4hVSBzJFjwbkHo3QQ381aq4P9XnlYQckANvk73Jn06OPNCIXlfZiBPuJF5iJuql_yM2XRok1wYiYwGwhFD7PiOZWBljG1nXsAjjJ7tU41JYmxPpq")' }}>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                        <div className="flex flex-col flex-1 justify-between gap-2">
                            <div>
                                <h3 className="text-slate-900 dark:text-white text-xl font-extrabold leading-tight mb-2">Orçamentos Inteligentes</h3>
                                <p className="text-slate-500 dark:text-[#9db9ab] text-base font-medium leading-relaxed">
                                    Defina limites de gastos por categoria e economize mais a cada mês sem esforço.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Indicators */}
                <div className="flex w-full flex-row items-center justify-center gap-2 py-4">
                    <div className="h-2 w-8 rounded-full bg-primary transition-all duration-300"></div>
                    <div className="h-2 w-2 rounded-full bg-slate-300 dark:bg-white/20 transition-all duration-300"></div>
                </div>
            </main>

            {/* Bottom Actions */}
            <footer className="w-full bg-background-light dark:bg-background-dark p-4 pb-8 space-y-3">
                <button onClick={() => navigate('/dashboard')} className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-primary hover:bg-[#0fdc75] text-[#111814] text-base font-bold leading-normal tracking-[0.015em] transition-transform active:scale-[0.98]">
                    <span className="truncate">Criar conta grátis</span>
                </button>
                <button onClick={() => navigate('/dashboard')} className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-transparent border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors">
                    <span className="truncate">Já tenho uma conta</span>
                </button>
            </footer>
        </div>
    );
};

export default WelcomeScreen;
