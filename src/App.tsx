import { Route, Routes } from 'react-router-dom';
import MultistepForm from './pages/multistep-form/multistep-form';
import Main from './pages/main/main';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/create" element={<MultistepForm />} />
				<Route path="*" element={<Main />} />
			</Routes>
		</>
	);
}

export default App;
