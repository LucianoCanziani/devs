---
layout: "../../layouts/BlogPost.astro"
title: "React Table to Excel Export with react-export-table-to-excel"
description: "Export your React tables to excel files using the react-export-table-to-excel library Hook."
pubDate: "Nov 13 2022"
heroImage: "/mainImage/React Table To Excel.jpg"
tags: "react-export-table-to-excel, react, table, react table, table to excel, excel, export excel"
author: "Luciano Canziani"
imgAlt: "Export your React table to excel file."
type: "ReactJs"
---

In this quick guide, I will show you how can you export your React tables in Excel files.

First, you must install the react-export-table-to-excel library.

```
npm i react-export-table-to-excel
```

Then, import it into your project. There are many ways to use this library but I'll show you how to use it as a React Hook.

It is also important to import the useRef Hook to reference the current table we want to export.

```js
import { useRef } from "react";
import { useDownloadExcel } from "react-export-table-to-excel";
```

Once you imported the necessary Hooks we implement them.

```js
const tableRef = useRef(null);

const { onDownload } = useDownloadExcel({
  currentTableRef: tableRef.current,
  filename: "Web Users",
  sheet: "Web Users",
});
```

In there you initialize the useRef hook for then to be assigned to the table you will like to export, the file name you want the excel file to have, and the sheet name.

## React table to Excel Full Example

<iframe style="margin-bottom: 35px;" width="100%" height="315" src="https://www.youtube.com/embed/pdUo0_owT1M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

```js
import React, { useRef } from "react";
import { useDownloadExcel } from "react-export-table-to-excel";

const TableExport = () => {
  let users = [
    {
      name: "Operation",
      lastName: "Dev",
    },
    {
      name: "Luciano",
      lastName: "Canziani",
    },
  ];

  const tableRef = useRef(null);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Web Users",
    sheet: "Web Users",
  });

  return (
    <div>
      <button onClick={onDownload}>DOWNLOAD</button>

      <table ref={tableRef}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <th>{user.name}</th>
                <th>{user.lastName}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default TableExport;
```

## Conclusion

By reading this article you have learned how to export a React table to an excel file.

If you want to learn more about the react-export-table-to-excel you can check their <a href="https://www.npmjs.com/package/react-export-table-to-excel" target=”_blank”>npm package</a>.
