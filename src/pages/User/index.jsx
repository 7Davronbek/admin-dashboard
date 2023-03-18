import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";
import { userData } from "../../data";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

const User = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "name.firstName",
        header: "First Name",
      },
      {
        accessorKey: "name.lastName",
        header: "Last Name",
      },
      {
        accessorKey: "adress",
        header: "Adress",
      },
      {
        accessorKey: "city",
        header: "City",
      },
      {
        accessorKey: "state",
        header: "State",
      },
    ],
    []
  );

  const theme = useMemo(
    () => createTheme({
        palette: {
            mode: 'dark'
        }
    })
  )

  return (
    <div className="User py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ThemeProvider theme={theme}>
              <MaterialReactTable columns={columns} data={userData} />
            </ThemeProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
