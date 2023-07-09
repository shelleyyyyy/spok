migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("bb02xs54gz2wpr7");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "bb02xs54gz2wpr7",
    "created": "2023-07-09 02:36:58.350Z",
    "updated": "2023-07-09 02:36:58.350Z",
    "name": "test",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "krvix0g1",
        "name": "sfd",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
