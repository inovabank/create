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
    },
    video_thumb: {
        type: String,
    },
    author_name: {
        type: String,
    }
});

export const Playlist = new Mongo.Collection('playlist', {
    title: {
        type: String,
    },
    link: {
        type: String,
    }
});

export const SavingsAccounts = new Mongo.Collection('savings_accounts');
