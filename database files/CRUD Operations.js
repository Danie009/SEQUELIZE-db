// Creating Arecord
const newUser = await User.create({ username: 'john_doe', email: 'john@example.com' });

// Reading Records
const users = await User.findAll();
const user = await User.findOne({ where: { id: 1 } });

// Upadating Record
await user.update({ username: 'new_username' });

// Deleting a Record
await user.destroy();
