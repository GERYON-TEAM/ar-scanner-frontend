declare module "*.module.css" {
	const classes: { [key: string]: string; };
	export default classes;
}

declare module "*.module.scss" {
	const classes: { [key: string]: string; };
	export default classes;
}

declare module "*.module.sass" {
	const classes: { [key: string]: string; };
	export default classes;
}

declare module "*.module.less" {
	const classes: { [key: string]: string; };
	export default classes;
}

declare module "*.module.styl" {
	const classes: { [key: string]: string; };
	export default classes;
}

declare module "*.jpg" {
	const value: any;
	export = value;
}

interface IUser {
	/** User id */
	id: number;
	/** User name */
	first_name: string;
	/** User surname */
	last_name: string;
	/** User sex: 0 - not specified, 1 - female, 2 - male */
	sex: 0 | 1 | 2;
	/** User's city */
	city: {
		/** City ID */
		id: number;
		/** City title */
		title: string;
	};
	/** User's country */
	country: {
		/** Country ID */
		id: number;
		/** Country  title */
		title: string;
	};
	/**
	 * Date of Birth. It is returned in the format D.M.YYYY or D.M (if the
	 * year of birth is hidden). If the date of birth is hidden entirely,
	 * the field is not in the response.
	 */
	bdate?: string;
	/**
	 * URL of the square user's photo with 100px width.
	 * https://vk.com/images/camera_100.png will be returned if the photo
	 * is not set.
	 */
	photo_100: string;
	/**
	 * URL of the square user's photo with 200px width.
	 * https://vk.com/images/camera_200.png will be returned if the photo
	 * is not set.
	 */
	photo_200: string;
	/**
	 * URL of the square user's photo with maximum size.
	 * https://vk.com/images/camera_400.png will be returned if the photo
	 * is not set.
	 */
	photo_max_orig?: string;
	/** User's timezone */
	timezone?: number;
}

type role = "ADMIN" | "USER";
