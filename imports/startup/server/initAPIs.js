// import userAccountConfigs from '/imports/api/users/account-configs';
// import userMethods from '/imports/api/users/methods';
// import enrollMethods from '/imports/api/enrolls/methods';
// import applicationMethods from '/imports/api/applications/methods';
// import productMethods from '/imports/api/products/methods';
// import userPublications from '/imports/api/users/publications';
// import enrollPublications from '/imports/api/enrolls/publications';
// import newsPublications from '/imports/api/news/publications';
// import applicationPublications from '/imports/api/applications/publications';
// import productPublications from '/imports/api/products/publications';
// import fileMethods from '/imports/api/files/methods';

const APIs = [

];

export default (context) => {
  APIs.map((api) => api(context));
};
