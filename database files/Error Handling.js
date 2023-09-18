try {
    const newUser = await User.create({ username: 'john_doe', email: 'john@example.com' });
    console.log('User created successfully');
  } catch (error) {
    console.error('Error creating user:', error.message);
  }
  