//*** Belongs To Relationship (One-to-One or Many-to-One):
TableB.belongsTo(TableA, {
  foreignKey: "tableAId", // The foreign key that links TableB to TableA
  as: "tableA", // Alias for the association, use this when querying
});

//*** Has Many Relationship (One-to-Many):
TableA.hasMany(TableB, {
  foreignKey: "tableAId", // The foreign key that links TableB to TableA
  as: "tableBs", // Alias for the association, use this when querying
});

//*** Many-to-Many Relationship:
// TableA has a many-to-many relationship with TableC through a junction table TableAC
TableA.belongsToMany(TableC, {
  through: "TableAC", // Name of the junction table
  foreignKey: "tableAId", // Foreign key in the junction table linking to TableA
  otherKey: "tableCId", // Foreign key in the junction table linking to TableC
  as: "tableCs", // Alias for the association on TableA
});

// TableC has a many-to-many relationship with TableA through the same junction table TableAC
TableC.belongsToMany(TableA, {
  through: "TableAC",
  foreignKey: "tableCId",
  otherKey: "tableAId",
  as: "tableAs",
});

//*** Self-Referencing Relationship (e.g., Parent-Child):
// TableA can have a parent TableA (self-referencing)
TableA.belongsTo(TableA, {
  foreignKey: "parentId", // The foreign key linking to another TableA record
  as: "parent", // Alias for the parent association
});

// TableA can have multiple child TableA records (self-referencing)
TableA.hasMany(TableA, {
  foreignKey: "parentId",
  as: "children", // Alias for the children association
});
