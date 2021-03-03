
module.exports = ({ env }) => ({
  connection: {
    // https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/auth-reference.html
    node: env('ELASTICSEARCH_HOST', 'http://127.0.0.1:9200'),
  },
  setting: {
    validStatus: [200, 201],
    validMethod: ['PUT', 'POST', 'DELETE'],
    importLimit: 3000,
    index_postfix: '',
    index_postfix: '',
    removeExistIndexForMigration: false,
  },
  models: [
  {
    "model": ".gitkeep",
    "index": ".gitkeep",
    "plugin": null,
    "enable": false,
    "migration": false,
    "pk": "id",
    "relations": [],
    "conditions": {},
    "fillByResponse": true,
    "supportAdminPanel": true,
    "urls": []
  },
  {
    "model": "article",
    "index": "article",
    "plugin": null,
    "enable": false,
    "migration": false,
    "pk": "id",
    "relations": [],
    "conditions": {},
    "fillByResponse": true,
    "supportAdminPanel": true,
    "urls": []
  },
  {
    "model": "city",
    "index": "city",
    "plugin": null,
    "enable": false,
    "migration": false,
    "pk": "id",
    "relations": [],
    "conditions": {},
    "fillByResponse": true,
    "supportAdminPanel": true,
    "urls": []
  },
  {
    "model": "index",
    "index": "index",
    "plugin": null,
    "enable": false,
    "migration": false,
    "pk": "id",
    "relations": [],
    "conditions": {},
    "fillByResponse": true,
    "supportAdminPanel": true,
    "urls": []
  },
  {
    "model": "market",
    "index": "market",
    "plugin": null,
    "enable": false,
    "migration": false,
    "pk": "id",
    "relations": [],
    "conditions": {},
    "fillByResponse": true,
    "supportAdminPanel": true,
    "urls": []
  },
  {
    "model": "post",
    "index": "post",
    "plugin": null,
    "enable": false,
    "migration": false,
    "pk": "id",
    "relations": [],
    "conditions": {},
    "fillByResponse": true,
    "supportAdminPanel": true,
    "urls": []
  },
  {
    "model": "product",
    "index": "product",
    "plugin": null,
    "enable": false,
    "migration": false,
    "pk": "id",
    "relations": [],
    "conditions": {},
    "fillByResponse": true,
    "supportAdminPanel": true,
    "urls": []
  },
  {
    "model": "record",
    "index": "record",
    "plugin": null,
    "enable": false,
    "migration": false,
    "pk": "id",
    "relations": [],
    "conditions": {},
    "fillByResponse": true,
    "supportAdminPanel": true,
    "urls": []
  },
  {
    "model": "test",
    "index": "test",
    "plugin": null,
    "enable": false,
    "migration": false,
    "pk": "id",
    "relations": [],
    "conditions": {},
    "fillByResponse": true,
    "supportAdminPanel": true,
    "urls": []
  },
  {
    "model": "test1",
    "index": "test1",
    "plugin": null,
    "enable": false,
    "migration": false,
    "pk": "id",
    "relations": [],
    "conditions": {},
    "fillByResponse": true,
    "supportAdminPanel": true,
    "urls": []
  }
]
});