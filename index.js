// const functions = require("firebase-functions");
const app = require("express")()
const cors = require("cors")({ origin: true })
const { getYoutubeInfo, downloadVideo } = require("./handlers/ytdl");

app.get("/youtube/:videoId", getYoutubeInfo);
app.get("/youtube/:videoId/download", downloadVideo);

const port = process.env.PORT || 3000;

// exports.api = functions.https.onRequest((req, res) => {
//   cors(req, res, () => {
//     return app(req,res)
//   })
// });

app.listen(port, () => console.log(`App started on port ${port}.`));