// Default Router Configurations
Router.configure({
    layoutTemplate: 'BlogLayout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    //waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'BlogFeed'});
Router.route('/blog/:_id', {
  name: 'PostPage',
  data: function() { return Posts.findOne(this.params._id); }
});

Router.onBeforeAction('dataNotFound', {only: 'PostPage'});
