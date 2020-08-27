// const functions = require("firebase-functions");
const app = require("express")()
const cors = require("cors")
const { getYoutubeInfo, downloadVideo } = require("./handlers/ytdl");
const bodyParser = require("body-parser");

app.use(cors({
  origin: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/youtube/:videoId", getYoutubeInfo);
app.get("/youtube/:videoId/download", downloadVideo);

const port = process.env.PORT || 5000;

// exports.api = functions.https.onRequest((req, res) => {
//   cors(req, res, () => {
//     return app(req,res)
//   })
// });

app.listen(port, () => console.log(`App started on port ${port}.`));