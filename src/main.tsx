import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from "@/context/ThemeProvider";
import Allroutes from './Allroutes';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <ThemeProvider>
        <Allroutes />
    </ThemeProvider>

);