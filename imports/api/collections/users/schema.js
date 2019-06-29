
export function userSchema () {
    Schema.UserProfile = new SimpleSchema ({

    });

    Schema.User = new SimpleSchema({
        _id: {
            type: String,
            regEx: SimpleSchema.RegEx.Id
        },
        whatsapp: {
            type: [Object],
            custom: function () {
                console.log(this);
            }
        },
        "whatsapp.$.number": {
            type: String,
        },
        "whatsapp.$.verified": {
            type: Boolean
        },
        createdAt: {
            type: Date
        },
        profile: {
            type: Schema.UserProfile,
            optional: true
        },
        services: {
            type: [Object],
            blackbox: true
        },
        'services.$.password': {
            type: String,
            blackbox: true
        },
        'services.$.resume': {
            type: Object,
            blackbox: true
        },
    });

    Meteor.users.attachSchema(Schema.User);
}
