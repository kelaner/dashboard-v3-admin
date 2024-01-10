const { query } = mdapi;

const res = query({
  model: "resource",
  fields: "img{url}",
});

return res;
