const User = require("./User");
const Post = require("./Post");
const Vote = require('./Vote');
const Comment = require('./Comment');


// create associations
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });



  User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
  });


  Vote.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Vote.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
  });
  
  User.hasMany(Vote, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Post.hasMany(Vote, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
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


  // the three include properties translated into three LEFT OUTER JOIN statements. One joins post with comment, another post with user, and then comment with user.

module.exports = { User, Post, Vote, Comment };