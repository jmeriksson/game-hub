import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "09735ba0b1054dcb9736e2c9bf8d1790"
	}
})
