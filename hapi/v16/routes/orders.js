// 订单
const Joi = require('joi');
const Boom = require('boom');
const { API, methods, validate } = require('../config');
const DIR = 'orders', TAGS = [API, DIR];

const routes = [
  {
    method: methods.post,
    config: {
      tags: TAGS,
      description: '创建订单',
      // auth: false,
      validate: {
        ...validate.jwt,
        payload: {
          goods: Joi.array().items(
            Joi.object().keys({
              goods_id: Joi.number().integer().required().description('商品id'),
              count: Joi.number().integer().required().min(1).default(1).description('购买数量'),
            })
          ).required(),
        },
      },
    },
    path: `/${DIR}`,
    handler: async (req, res) => {
      res(req.auth.credentials);
    }
  },
  {
    method: methods.post,
    config: {
      tags: TAGS,
      description: '支付某条订单',
      // auth: false,
      validate: {
        ...validate.jwt,
        params: {
          id: Joi.number().integer().required().description('订单id'),
        },
      },
    },
    path: `/${DIR}/{id}/pay`,
    handler: async (req, res) => {
      res(req.auth.credentials);
    }    
  },
];

module.exports = routes;
