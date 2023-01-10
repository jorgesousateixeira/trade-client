import {useState} from 'react'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';
import './App.css'
import {PublicHome} from './pages/public/home/publicHome';
import {Login} from './pages/public/login/login';
import {PrivateContainer} from "./pages/private/private";
import {PrivateHome} from "./pages/private/home/privateHome";
import {Messages2} from "./pages/private/messages/messages-2";
import {Documents} from "./pages/private/documents/documents";
import {AppContextProvider} from './shared/context/app.context';
import Error404 from "./pages/public/error/error-404";
import {AppThemeProvider} from "./shared/context/theme";
import {PublicContainer} from "./pages/public/public";

function App() {

    return (
        <BrowserRouter>
            <AppContextProvider>
                <AppThemeProvider>
                    <Routes>
                        <Route path="public" element={<PublicContainer />}>
                            <Route path="" element={<PublicHome/>}/>
                            <Route path="/public" element={<PublicHome/>}/>
                            <Route path="/public/login" element={<Login/>}/>
                        </Route>
                        <Route path="/private" element={<PrivateContainer/>}>
                            <Route path='/private/home' element={<PrivateHome/>}/>
                            <Route path='/private/messages' element={<Messages2/>}/>
                            <Route path='/private/documents' element={<Documents/>}/>
                        </Route>
                        <Route path="404" element={<Error404/>}/>
                        <Route path="*" element={<Navigate to="404" replace/>}/>
                    </Routes>
                    <ToastContainer autoClose={3000}/>
                </AppThemeProvider>
            </AppContextProvider>
        </BrowserRouter>
    )
}

export default App
