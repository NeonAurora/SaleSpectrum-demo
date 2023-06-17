import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useGetSalesQuery } from "state/api";
import LoadingScene from "./LoadingScene";

const BreakdownChart = ({ isDashboard = false }) => {
  const { data, isLoading } = useGetSalesQuery();
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  if (!data || isLoading) return (
    <Box sx={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "70vh" 
    }}>
      <LoadingScene />
    </Box>
  );

  const colors = [
    theme.palette.secondary[500],
    theme.palette.secondary[300],
    theme.palette.secondary[300],
    theme.palette.secondary[500],
  ];
  const formattedData = Object.entries(data.salesByCategory).map(
    ([category, sales], i) => ({
      id: category,
      label: category,
      value: sales,
      color: colors[i],
    })
  );

  const mobileLegends = formattedData.map((datum) => (
    <Box key={datum.id} display="flex" alignItems="center" marginBottom={1}>
      <Box
        width={18}
        height={18}
        marginRight={1}
        bgcolor={datum.color}
        borderRadius="50%"
      />
      <Typography variant="body2" color="text.secondary">
        {datum.label}
      </Typography>
    </Box>
  ));

  return (
    <Box
    height={isDashboard ? (!isNonMobile ? "300px" : "400px") : "100%"}
      width={undefined}
      minHeight={isDashboard ? "325px" : undefined}
      minWidth={isDashboard ? "325px" : undefined}
      position="relative"
    >
      <ResponsivePie
        data={formattedData}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: theme.palette.secondary[200],
              },
            },
            legend: {
              text: {
                fill: theme.palette.secondary[200],
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.secondary[200],
                strokeWidth: 1,
              },
              text: {
                fill: theme.palette.secondary[200],
              },
            },
          },
          legends: {
            text: {
              fill: theme.palette.secondary[200],
            },
          },
          tooltip: {
            container: {
              color: theme.palette.primary.main,
            },
          },
        }}
        colors={{ datum: "data.color" }}
        margin={
          isDashboard
            ? { top: 40, right: 80, bottom: 100, left: 50 }
            : { top: 40, right: 80, bottom: 80, left: 80 }
        }
        sortByValue={true}
        innerRadius={0.45}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        enableArcLinkLabels={!isDashboard}
        arcLinkLabelsTextColor={theme.palette.secondary[200]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        legends={
          [
            // {
            //   anchor: isNonMobile ? "bottom" : "right",
            //   direction: isNonMobile ? "row" : "column",
            //   justify: false,
            //   translateX: isDashboard ? 20 : 0,
            //   translateY: isNonMobile ? (isDashboard ? 50 : 56) : 0,
            //   itemsSpacing: 0,
            //   itemWidth: 85,
            //   itemHeight: 18,
            //   itemTextColor: "#999",
            //   itemDirection: "left-to-right",
            //   itemOpacity: 1,
            //   symbolSize: 18,
            //   symbolShape: "circle",
            //   effects: [
            //     {
            //       on: "hover",
            //       style: {
            //         itemTextColor: theme.palette.primary[500],
            //       },
            //     },
            //   ],
            // },
          ]
        }
      />
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
          {!isDashboard && "Total:"} {data.yearlySalesTotal} &nbsp;&nbsp;
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="center"
        marginTop={2}
        sx={{
          "& > *": {
            width: { xs: "100%", md: "auto" },
          },
        }}
      >
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          sx={{
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: { xs: "center", md: "flex-start" },
            gap: { xs: 1, md: 2 },
          }}
        >
          {mobileLegends}
        </Box>
      </Box>
    </Box>
  );
};

export default BreakdownChart;
