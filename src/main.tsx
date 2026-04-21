import ReactDOM from 'react-dom/client';
import './index.css';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from "@/context/ThemeProvider";
import Allroutes from './Allroutes';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <ThemeProvider>
        <Allroutes />
        <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toasterId="default"
            toastOptions={{
                // Define default options
                className: '',
                duration: 5000,
                removeDelay: 1000,
                style: {
                    background: '#363636',
                    color: '#fff',
                },

                // Default options for specific types
                success: {
                    duration: 3000,
                    iconTheme: {
                        primary: '#442c5e',
                        secondary: '#fff',
                    },
                    style: {
                        background: '#9b5de0',
                        color: '#fff',
                        padding: "10px 16px"
                    },
                },
            }}
        />
    </ThemeProvider>

);