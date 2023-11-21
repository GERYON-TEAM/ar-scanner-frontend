import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { useState, useRef, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl"; // set backend to webgl
import { detect, detectVideo } from "../../../6_shared/utils/detect";
import ButtonHandler from "../../../6_shared/ui/components/btn-handler";
import s from "./style.module.css";

export const Home = () => {
	const routeNavigator = useRouteNavigator();
	const [loading, setLoading] = useState({ loading: true, progress: 0 }); // loading state
	const [model, setModel] = useState<any>({
		net: null,
		inputShape: [1, 0, 0, 3],
	}); // init model & input shape

	// references
	const cameraRef = useRef(null);
	const canvasRef = useRef(null);

	// model configs
	const modelName = "yolov8n";

	useEffect(() => {
		tf.ready().then(async () => {
			const yolov8 = await tf.loadGraphModel(
				// `${window.location.href}/${modelName}_web_model/model.json`,
				`${process.env.PUBLIC_URL}/model/model.json`,
				{
					onProgress: (fractions: any) => {
						setLoading({ loading: true, progress: fractions }); // set loading fractions
					},
				}
			); // load model

			// warming up model
			const dummyInput = tf.ones(yolov8.inputs[0].shape as number[]);
			const warmupResults = yolov8.execute(dummyInput);

			setLoading({ loading: false, progress: 1 });
			setModel({
				// @ts-ignore
				net: yolov8,
				// @ts-ignore
				inputShape: yolov8.inputs[0].shape,
			}); // set model & input shape

			tf.dispose([warmupResults, dummyInput]); // cleanup memory
		});
	}, []);

	return (
		<div className='App'>
			{loading.loading && (
				<div>Loading model... {(loading.progress * 100).toFixed(2)}%</div>
			)}
			<div className='content'>
				<video
					className={s.video}
					autoPlay
					muted
					ref={cameraRef}
					onPlay={() =>
						detectVideo(cameraRef.current, model, canvasRef.current)
					}
				/>
				<canvas
					width={model.inputShape[1]}
					height={model.inputShape[2]}
					ref={canvasRef}
				/>
				<ButtonHandler cameraRef={cameraRef} />
			</div>
		</div>
	);
};
