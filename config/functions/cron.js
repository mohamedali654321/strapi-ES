'use strict';

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/concepts/configurations.html#cron-tasks
 */
const moment = require('moment');
module.exports = {
    '*/10 * * * *': async () => {
        const updateTime = moment()
          .subtract(10, 'minutes')
          .format('YYYY-MM-DD HH:mm:ss');
    
        // currentTime
        await strapi.elastic.migrateModels({
          conditions: { updated_at_gt: updateTime },
        });
      },
};