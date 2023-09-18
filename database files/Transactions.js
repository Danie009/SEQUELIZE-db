const transaction = await sequelize.transaction();

try {
  const user = await User.create({ username: 'john', email: 'john@example.com' }, { transaction });
  const post = await Post.create({ title: 'New Post', userId: user.id }, { transaction });

  await transaction.commit();
} catch (error) {
  await transaction.rollback();
}
