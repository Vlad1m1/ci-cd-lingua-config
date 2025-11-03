import path from "path";
import YAML from "yamljs";
import swaggerUi from "swagger-ui-express"
import {ROOT_PATH} from "../index";

export const swaggerConfig = () => {
	const specs = YAML.load(path.join(ROOT_PATH, 'docs', 'docs.yaml'));
	
	return [
		swaggerUi.serve,
		swaggerUi.setup(specs, {
			explorer: true,
			swaggerOptions: {
				showExtensions: true,
				showCommonExtensions: true,
			},
		})
	]
	
}
