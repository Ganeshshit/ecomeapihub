import React, { createContext, useContext } from 'react';
import styles from './Tabs.module.css';

const TabsContext = createContext();

const Tabs = ({ children, value, onChange, className = '' }) => {
    return (
        <TabsContext.Provider value={{ value, onChange }}>
            <div className={`${styles.tabs} ${className}`}>
                {children}
            </div>
        </TabsContext.Provider>
    );
};

const TabList = ({ children, className = '' }) => {
    return (
        <div className={`${styles.tabList} ${className}`}>
            {children}
        </div>
    );
};

const Tab = ({ value, children, className = '' }) => {
    const { value: activeValue, onChange } = useContext(TabsContext);
    const isActive = value === activeValue;

    return (
        <button
            className={`${styles.tab} ${isActive ? styles.active : ''} ${className}`}
            onClick={() => onChange?.(value)}
        >
            {children}
        </button>
    );
};

const TabPanels = ({ children, className = '' }) => {
    return (
        <div className={`${styles.tabPanels} ${className}`}>
            {children}
        </div>
    );
};

const TabPanel = ({ value, children, className = '' }) => {
    const { value: activeValue } = useContext(TabsContext);
    const isActive = value === activeValue;

    if (!isActive) return null;

    return (
        <div className={`${styles.tabPanel} ${className}`}>
            {children}
        </div>
    );
};

Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panels = TabPanels;
Tabs.Panel = TabPanel;

export default Tabs;