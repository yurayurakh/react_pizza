import {Home} from "../pages/Home"
import {Cart, CartEmpty} from "../pages/Cart"
import {NotFound} from "../pages/NotFound";

import {Default} from "../layout/Default.tsx";
import {Empty} from "../layout/Empty.tsx";

enum LayoutsEnum {
	DEFAULT = "default",
	EMPTY = "empty"
}

interface IRoutes {
	path: string;
	element?: React.FunctionComponent;
	index?: boolean
	layout: LayoutsEnum
}

const layoutMap: Map<LayoutsEnum, React.FC> = new Map([])
layoutMap.set(LayoutsEnum.DEFAULT, Default)
layoutMap.set(LayoutsEnum.EMPTY, Empty)

const routes: IRoutes[] = [
	{
		path: '/',
		element: Home,
		index: true,
		layout: LayoutsEnum.DEFAULT,
	},
	{
		path: '/cart',
		element: Cart,
		layout: LayoutsEnum.DEFAULT,
	},
	{
		path: '/cart-empty',
		element: CartEmpty,
		layout: LayoutsEnum.DEFAULT,
	},
	{
		path: "*",
		element: NotFound,
		layout: LayoutsEnum.EMPTY,
	}
]

export {
	layoutMap,
	routes
}