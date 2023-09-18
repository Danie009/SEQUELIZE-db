// Basic Queries
const users = await User.findAll();

const user = await User.findOne({
  where: { id: 1 },
});

const used = await User.findAll({
  where: {
    age: { [Op.gte]: 18 }, // Users with age greater than or equal to 18
    active: true, // Users who are active
  },
});
