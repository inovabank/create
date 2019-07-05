import { Mongo } from 'meteor/mongo';

export const Video = new Mongo.Collection('video', {
    title: {
        type: String,
    },
    url: {
        type: String,
    },
    description: {
        type: String,
    },
    documents: {
        type: String,
    },
    links: {
        type: String,
    },
    playlist_link: {
        type: String,
    }
});

export const Playlist = new Mongo.Collection('playlist', {
    video: Video,
    link: {
        type: String,
    }
});

export const Playlists = new Mongo.Collection('playlists', {
    playlist: Playlist,
});