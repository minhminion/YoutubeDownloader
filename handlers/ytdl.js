const ytdl = require("ytdl-core");

exports.getYoutubeInfo = (req, res) => {
  const videoId = req.params.videoId;
  ytdl
    .getInfo(videoId)
    .then((info) => {
      const videoDetails = info.videoDetails;
      return res.status(200).json({
        videoId: videoId,
        title: videoDetails.title,
        thumbnails: videoDetails.thumbnail.thumbnails,
        timestamp: info.timestamp,
        formats: info.formats,
      });
    })
    .catch((error) => {
      return res.status(400).json({ error: error });
    });
};

exports.downloadVideo = (req, res) => {
  const { itag } = req.query;

  ytdl(req.params.videoId, {
    filter: (format) => {
      return format.itag === parseInt(itag);
    },
  }).pipe(res);
};
