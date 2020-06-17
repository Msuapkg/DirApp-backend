/* eslint-disable no-underscore-dangle */
const { Users } = require('../models');

module.exports = {
  create: (body) => {
    const newUser = new Users(body);
    return newUser.save();
  },
  findAll: () => Users.find({ is_active: true }),
  findOneByEmail: (email) => Users.findOne({ email }),
  findOneById: (id) => Users.findById(id),
  addPost: (user, post) => {
    user.posts.push(post);
    return user.save();
  },
  removePost: (user, idPost) => {
    // eslint-disable-next-line no-underscore-dangle
    const filteredPosts = user.posts.filter((post) => !post._id === idPost);
    // eslint-disable-next-line no-param-reassign
    user.posts = filteredPosts;
    return user.save();
  },
  // eslint-disable-next-line consistent-return
  updatePost: (user, updatedPost) => {
    // user.foundPost.find((post) => post._id === updatedPost._id);
    // La forma de arriba y la de abajo devuelven lo mismo
    const foundPost = user.posts.id(updatedPost._id);
    if (!foundPost) return undefined;
    const updatedPosts = user.posts.map((post) => {
      if (post._id === foundPost._id) return foundPost;
      return post;
    });
    // eslint-disable-next-line no-param-reassign
    user.posts = updatedPosts;
    return user.save();
  },
};
