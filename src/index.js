import "dotenv/config";
import app from "./app";

app.listen(process.env.PORT, () =>
	console.log(`Example listening on port ${process.env.PORT}!`)
);
