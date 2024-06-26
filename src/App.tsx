import {BrowserRouter, Route, Routes} from "react-router-dom"
import {routes, layoutMap} from "./config/routes.ts"

const navigation = [...layoutMap].map(([layoutName, layoutComponent]) => {
	console.log(layoutName, layoutComponent)
})

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
			
			</Routes>
		</BrowserRouter>
	);
};

export default App;