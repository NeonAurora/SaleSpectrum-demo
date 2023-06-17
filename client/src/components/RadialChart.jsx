import React from "react";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from "recharts";
import { Box, Typography, useTheme } from "@mui/material";
import { useGetAuditLogsQuery } from "state/adminAuditApi";

const RadialChart = ({ isDashboard = false }) => {
  const { data, isLoading } = useGetAuditLogsQuery();
  const theme = useTheme();

  if (!data || isLoading) return "Loading...";
  console.log("data", data);

  const colors = [
    theme.palette.secondary[100],
    theme.palette.secondary[200],
    theme.palette.secondary[300],
    theme.palette.secondary[400],
    theme.palette.secondary[500],
    theme.palette.secondary[600],
    theme.palette.secondary[700],
    theme.palette.secondary[800],
    theme.palette.secondary[900],
  ];

  const formattedData = data.map((log, i) => {
    console.log("log.name", log.name); // log the name from the log
    console.log("log", log); // log the entire log object to check its structure

    return {
      name: log.name, // change this to the relevant data point
      uv: log.salesImpact, // sales impact is now the value
      fill: colors[i % colors.length], // cycle through colors if more data than colors
    };
  });

  console.log('formattedData', formattedData);

  // Define style for the legend
  const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
  };

  const totalSalesImpact = data.reduce((total,log) => total + log.salesImpact, 0);

  return (
    <Box
      height={isDashboard ? "100%" : "100%"}
      width={undefined}
      minHeight={"325px"}
      minWidth={"325px"}
      position="relative"
    >
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="30%"
          outerRadius="100%"
          data={formattedData}
        >
          <RadialBar
            minAngle={15}
            label={{ position: "insideStart", fill: theme.palette.primary[600] }}
            background={{ fill: theme.palette.primary[600] }}
            clockWise
            dataKey="uv"
            barSize={20}
          />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </RadialBarChart>
      </ResponsiveContainer>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        color={theme.palette.secondary[400]}
        textAlign="center"
        pointerEvents="none"
        sx={{
          transform: isDashboard
            ? "translate(-75%, -170%)"
            : "translate(-50%, -100%)",
        }}
      >
        <Typography variant="h6">
        {!isDashboard && `Total: ${totalSalesImpact}`} 
          {/* Add code to calculate the total sales impact */}
        </Typography>
      </Box>
    </Box>
  );
};

export default RadialChart;
