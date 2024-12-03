import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { FiSettings } from 'react-icons/fi'
import './App.css'
import { Area, Bar, Calendar, ColorMapping, ColorPicker, Customers, ECommerce, Editor, Employees, Financial, Kanban, Line, Orders, Pie, Pyramid, Stacked } from './pages'
import { Navbar, Sidebar, ThemeSettings } from './components'

import { useStateContext } from './context/ContextProvider'

const App = () => {
    const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext()

    return (
        <div className={currentMode === 'Dark' ? 'dark' : ''}>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className="fixed bottom-4 right-4" style={{ zIndex: '1000' }}>
                        <TooltipComponent content='Settings' position='Top'>
                            <button
                                type='button'
                                className='text-3xl hover:drop-shadow-xl hover:bg-light-gray p-3 text-white'
                                style={{ background: currentColor, borderRadius: '50%' }}
                                onClick={() => setThemeSettings(true)}
                            >
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div className='w-72 bg-white dark:bg-secondary-dark-bg fixed sidebar'>
                            <Sidebar />
                        </div>)
                        :
                        (
                            <div className='w-0 dark:bg-secondary-dark-bg'>
                                <Sidebar />
                            </div>
                        )}
                    <div className={
                        `w-full dark:bg-main-dark-bg bg-main-bg min-h-screen 
                        ${activeMenu
                            ? 'md:ml-72' : 'flex-2'}`
                    }>
                        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg w-full navbar">
                            <Navbar />
                        </div>

                        <div>
                            {themeSettings && <ThemeSettings />}

                            <Routes>
                                {/* Dashboard */}
                                <Route path='/' element={<ECommerce />} />
                                <Route path='/ecommerce' element={<ECommerce />} />

                                {/* Pages */}
                                <Route path='/orders' element={<Orders />} />
                                <Route path='/employees' element={<Employees />} />
                                <Route path='/customers' element={<Customers />} />

                                {/* Apps */}
                                <Route path='/kanban' element={<Kanban />} />
                                <Route path='/editor' element={<Editor />} />
                                <Route path='/calendar' element={<Calendar />} />
                                <Route path='/color-picker' element={<ColorPicker />} />

                                {/* Charts */}
                                <Route path='/line' element={<Line />} />
                                <Route path='/area' element={<Area />} />
                                <Route path='/bar' element={<Bar />} />
                                <Route path='/pie' element={<Pie />} />
                                <Route path='/financial' element={<Financial />} />
                                <Route path='/color-mapping' element={<ColorMapping />} />
                                <Route path='/pyramid' element={<Pyramid />} />
                                <Route path='/stacked' element={<Stacked />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App

