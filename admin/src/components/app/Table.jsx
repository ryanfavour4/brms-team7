import React from "react";
import { useSelector } from "react-redux";
import { routesTable } from "../../store/slices/routesSlice";

export default function Table() {
  const routeTable = useSelector(routesTable);

  return (
    <>
      <table className="border-separate min-w-full divide-y divide-gray-200 border text-left border-gray-300 mt-8">
        <thead className="border">
          <tr>
            {routeTable.storeColumn.map((item, index) => (
              <th className="border text-left font-semibold bg-gray-100 uppercase border-gray-300 py-2 px-4" key={index}>{item}</th>
              ))}
              <th className="border text-left font-semibold bg-gray-100 uppercase border-gray-300 py-2 px-4">actions</th>
          </tr>
        </thead>
        <tbody className="border divide-gray-200">
          {routeTable.storeRow &&
            routeTable.storeRow.map((item, index) => (
              <tr key={index}>
                {item.map((cell, cellIndex) => (
                  <td class="border border-gray-300 py-2 px-4" key={cellIndex}>{cell}</td>
                  ))}
                  <td class="border border-gray-300 py-2 px-4">{item[0]}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
