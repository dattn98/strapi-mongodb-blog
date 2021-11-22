'use strict';

/**
 * Author.js controller
 *
 * @description: A set of functions called "actions" for managing `Author`.
 */

module.exports = {

  /**
   * Retrieve author records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.author.search(ctx.query);
    } else {
      return strapi.services.author.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a author record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.author.fetch(ctx.params);
  },

  /**
   * Count author records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.author.count(ctx.query);
  },

  /**
   * Create a/an author record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.author.add(ctx.request.body);
  },

  /**
   * Update a/an author record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.author.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an author record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.author.remove(ctx.params);
  }
};
