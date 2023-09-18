User.beforeCreate(async (user, options) => {
    // Hash the user's password before creating the record
    user.password = await bcrypt.hash(user.password, 10);
  });
  