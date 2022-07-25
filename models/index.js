const User = require("./User");
const Post = require("./Post");
const Vote = require('./Vote');
const Comment = require('./Comment');

// created associations between users and posts only
User.hasMany(Post, {
    // this is the user_id in the Post Model
    foreignKey: 'user_id'  
  });

  Post.belongsTo(User, {
    // this is the user_id in the Post Model
    foreignKey: 'user_id',
  });

// creates associations between users, posts, and votes tables
User.belongsToMany(Post, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'user_id'
});

Post.belongsToMany(User, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'post_id'
});
Vote.belongsTo(User, {
  foreignKey: 'user_id'
});

Vote.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Vote, {
  foreignKey: 'user_id'
});

Post.hasMany(Vote, {
  foreignKey: 'post_id'
});


Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Vote, Comment };