import React, { useState } from "react";
import "./App.css";
import { data } from "./data";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="container mt-5 ">
      <form class="aline-center" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <table class="table mt-5">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          {data
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.first_name.toLowerCase().includes(search) ||
                    item.last_name.toLowerCase().includes(search);
            })
            .map((item) => (
              <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name} </td>
                <td>{item.email} </td>
                <td>{item.phone}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
