import React, { useState } from "react";

function Categories() {

  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");

  const addCategory = () => {
    if (name.trim() === "") return;

    const newCategory = {
      id: Date.now(),
      name: name
    };

    setCategories([...categories, newCategory]);
    setName("");
  };

  const deleteCategory = (id) => {
    setCategories(categories.filter(cat => cat.id !== id));
  };

  return (
    <div>

      <h1>Medicine Categories</h1>

      <div className="add-category">

        <input
          type="text"
          placeholder="Enter category name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={addCategory}>
          Add Category
        </button>

      </div>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>ID</th>
            <th>Category Name</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {categories.length === 0 ? (
            <tr>
              <td colSpan="3">No Categories Added</td>
            </tr>
          ) : (
            categories.map((cat) => (
              <tr key={cat.id}>
                <td>{cat.id}</td>
                <td>{cat.name}</td>
                <td>
                  <button onClick={() => deleteCategory(cat.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}

        </tbody>

      </table>

    </div>
  );
}

export default Categories;