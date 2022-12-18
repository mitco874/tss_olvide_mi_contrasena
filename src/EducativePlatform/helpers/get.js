
export const get = async (url) => {
  try {
    const rawResponse = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const res = await rawResponse.json();
    console.log(res);
    return res;
  } catch (error) {
    console.error(error);
  }
};
