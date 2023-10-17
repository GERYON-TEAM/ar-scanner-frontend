import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function useHashNavigate() {
	const hashNavigate = (path: string, replace?: boolean) => {
		const navigate = useNavigate();
		const splitedPath = path.split("?");
		const transferData = {
			path: splitedPath[0],
			state: splitedPath.filter((el, i) => i !== 0),
		};
		navigate(transferData.path, {
			state: transferData.state,
			replace: replace,
		});
	};

	return hashNavigate;
}

export default useHashNavigate;
