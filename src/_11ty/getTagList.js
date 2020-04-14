module.exports = function(collection) {
  let tagSet = new Set();
  collection.getAll().forEach(function(item) {
    if( "tags" in item.data ) {
      let tags = item.data.tags;
      if( typeof tags === "string" ) {
          tags = [tags];
        }

      tags = tags.filter(function(item) {
        switch(item) {
          // this list should match the `filter` list in tags.njk
          case "all":
          case "article":
          case "author":
          case "photographer":
          case "template":
            return false;
        }
        return true;
      });


      for (const tag of tags) {
            if (!tagSet.has(tag)) {
                tagSet.set(tag, collection.getFilteredByTag(tag).reverse());
            }
        }
      }
    });
    //key sort asc
    return new Set([...tagSet.entries()].sort());

};
