const page = 1;
const pageSize = 10;

const users = await User.findAll({
  limit: pageSize,
  offset: (page - 1) * pageSize,
  order: [['createdAt', 'DESC']], // Sort by createdAt column in descending order
});
