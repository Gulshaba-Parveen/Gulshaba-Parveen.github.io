
import { Box, Heading, Text } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
import React from "react";

const GitHubStatsWithAdditional = () => {
  return (
    <Box w="80%" m={"auto"} mb="6rem">
      <Heading textAlign={"center"} my="40px">
        Git{" "}
        <Text as="span" color="#DC143C">
          Stat's
        </Text>{" "}
      </Heading>
      <GitHubCalendar
        username="Gulshaba-Parveen"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        className="react-activity-calendar"
      />
      <div className="github-stats-container">
        <div align="center" style={{ display: "flex", gap: "40px" , marginTop: "50px" }}>
          <img
            // src="https://github-readme-stats-sigma-five.vercel.app/api?username=Gulshaba-Parveen&theme=react&border_radius=4.6&hide_border=true&layout=compact&show_icons=true"
            src="https://github-readme-stats.vercel.app/api?username=Gulshaba-Parveen&theme=react&border_radius=4.6&hide_border=true&layout=compact&show_icons=true"

            style={{ width: "50%" }}
            id="github-stats-card"
          />

          <img
            // src="https://streak-stats.demolab.com/?user=Gulshaba-Parveen&_border=true&theme=dark&hide_border=true&theme=react"
            src="https://github-readme-streak-stats.herokuapp.com/?user=Gulshaba-Parveen&_border=true&theme=dark&hide_border=true&theme=react"

            style={{ width: "50%" }}
            id="github-streak-stats"
          />

        </div>
      </div>
      <div align="center" style={{ marginTop: "50px" }}>
        <img
          // src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=Gulshaba-Parveen&theme=react&border_radius=4.6&show_icons=true&count_private=true&hide_border=true&show_icons=true"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Gulshaba-Parveen&theme=react&border_radius=4.6&show_icons=true&count_private=true&hide_border=true&show_icons=true"

          style={{ width: "40%" }}
          id="github-top-langs"
        />
      </div>
    </Box>
  );
};

export default GitHubStatsWithAdditional;
