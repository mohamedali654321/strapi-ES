'use strict';

const {Client}=require('@elastic/elasticsearch');
//const client=new Client({node:'http://localhost:9200'})
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
ping:async(ctx)=>{
  if(strapi.config.elasticsearch)
  {
    
    const {connection}=strapi.config.elasticsearch
    const client = new Client(connection);
    console.log('All is well');
    const {body}=await client.search({
      index:"post",
       //type: 'cities_list',
      body:{
        query:{
          match:{comment: ctx.query._q}
        },
        highlight : {
          pre_tags : ['<font color="#FF0000">'],
          post_tags : ['</font>'],
          fields : {
              comment : {}
          }
      }
      }

    });
    console.log(body.hits.hits);
    ctx.send(body.hits.hits)
  }
 



  




},

    search: async(ctx) =>{
       // const  index, _start, _limit  ;
    let data, count, map;
    let status = {};
        try {
           const {body} = await client.search({
              index:'pitbug.com',
              size:  10,
              from: 0,
              body: {
                sort: [
                  {
                    updated_at: {
                      order: 'desc',
                    },
                  },
                ],
                query: {
                  match_all: {},
                },
              },
            });
            console.log("data1",body)
          } catch (e) {
          //  console.log("data2",body)
            return ctx.send({ data: null, total: 0, status });
          }
      
          if (data.statusCode !== 200) return ctx.badRequest();
      
          const res = [];
          for (const item of data.body.hits.hits) {
            const source = item['_source'];
            if (!_.isEmpty(source)) {
              //
              const sourceKeys = Object.keys(source);
      
              for (const key of sourceKeys) {
                //
                if (_.isArray(source[key])) {
                  //
                  source[key] = '[Array]';
                  //
                } else if (_.isObject(source[key])) {
                  //
                  source[key] = '[Object]';
                  //
                }
              }
              res.push(source);
            }
          }
          return ctx.send({
            data: res,
            total: count && count.body && count.body.count,
            status,
          });
        }

};
