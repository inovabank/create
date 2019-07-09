import { allPlaylist } from '../../lib/allPlaylist';
import { Playlist } from './collections/schema';

const lenPlaylist = Playlist.find().count();

let i = lenPlaylist;

while (i < allPlaylist.length) {
    Playlist.insert(allPlaylist[i]);
    i++;
}

export const playlist = Playlist.find({}).fetch();