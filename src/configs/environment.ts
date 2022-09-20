const environment = {
  apiURL: process.env.REACT_APP_API_URL,
  apiToken: process.env.REACT_APP_API_TOKEN,
  fullApiURL: `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_TOKEN}`,
};

export default environment;
