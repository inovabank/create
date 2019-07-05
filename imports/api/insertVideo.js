import { allVideos } from '../../lib/allVideos';
import { Video } from './collections/schema';

const lenVideo = Video.find().count();

let i = lenVideo;

while (i < allVideos.length) {
    Video.insert(allVideos[i]);
    i++;
}

export const videos = Video.find({}).fetch();