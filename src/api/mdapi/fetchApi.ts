import zionMdapi from "zion-mdapi";

const VITE_ZION_CALLBACK_URL = import.meta.env.VITE_ZION_CALLBACK_URL;
const VITE_ZION_ACTIONFLOW_ID = import.meta.env.VITE_ZION_ACTIONFLOW_ID;

export default async function fetchApi(quaryBody: Object) {
  const mdapiConfig = {
    url: VITE_ZION_CALLBACK_URL,
    actionflow_id: VITE_ZION_ACTIONFLOW_ID,
  };
  const mdapi = zionMdapi.init(mdapiConfig);
  const fetchRes: Object = {};

  await mdapi.query(quaryBody).then((res) => {
    console.log(res);
    fetchRes.value = res;
  });

  return fetchRes.value;
}
