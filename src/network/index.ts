const makeNetworkCall = async (url: string, method: string, body?: any) => {
  try {
    const response = await fetch(url, {method: method, body: body});
    if (response?.status === 200) {
      return response?.json();
    }
  } catch (e) {
    return e;
  }
};

export {makeNetworkCall};
