import './App.css';
import MuiMode from './components/mui/mui-mode';
import User from './components/user/User';
import { AppProviders } from './providers/app-providers';

function App() {
  return (
    <AppProviders>
      <div className='App'>
        {/* <MuiMode></MuiMode> */}
        <User/>
      </div>
    </AppProviders>    
  );
}

export default App;
