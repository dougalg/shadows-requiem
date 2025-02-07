import { createContext, useState } from 'react';
import * as sm from './StatManagement';
import { PlayerMenu, BossHpBar, BossArea, MainPage } from './MainPage';
//used for the boss hp bar

interface BossContextValue {
    BossHP: number;
    setBossHP: (value: number) => void;  // Function that takes a number
}

//The problem is this is not getting updated, 
//the provider is just using whatever the default value is
export const BossContext = createContext<BossContextValue>({
    BossHP: 999999,
    setBossHP: () => { },
});


function ContextManagement() {
    const [BossHP, setBossHP] = useState(999999);

    return (
        <BossContext.Provider value={{ BossHP, setBossHP }}>
            <PlayerMenu player='' isPlayerTurn={false} />
            <BossArea />
            <BossHpBar />
        </BossContext.Provider>
    )
}

export default ContextManagement;