import { HexGrid, Layout, Hexagon, Pattern } from "react-hexgrid";
import { useState } from "react";

import tory from "../img/tory.jpg";
import classes from "../styles/BodyHexGrid.module.scss";
import { Link } from "react-router-dom";
const HEXES = [
  {
    id: "about",
    q: 0,
    r: 0,
    s: 0,
    label: "About me",
    kind: "image",
    color: "#4f46e5",
    path: "/aboutme",
  },
  {
    id: "portfolio",
    q: -2,
    r: 1,
    s: 1,
    label: "Portfolio",
    kind: "text",
    color: "#caef44",
    path: "/portfolio",
  },
  {
    id: "interests",
    q: 2,
    r: -1,
    s: -1,
    label: "Interests",
    kind: "text",
    color: "#10b981",
    path: "/interests",
  },
  {
    id: "intracore",
    q: 1,
    r: 1,
    s: -2,
    label: "Intracore",
    kind: "text",
    color: "#f59e0b",
    path: "/intracore",
  },
  {
    id: "trovebites",
    q: -1,
    r: 2,
    s: -1,
    label: "Trovbites",
    kind: "text",
    color: "#ef4444",
    path: "/trovebites",
  },
];

function BodyHexGrid() {
  const [hoveredHex, setHoveredHex] = useState(null);

  return (
    <div className={classes.hexGridContainer}>
      <HexGrid width={1280} height={640} viewBox="-22 -18 44 36">
        <Pattern id="hex-image" link={tory} />

        <Layout
          size={{ x: 4.3, y: 4.3 }}
          flat={true}
          spacing={1.03}
          origin={{ x: 0, y: 0 }}
        >
          {HEXES.map((hex) => {
            const isHovered = hoveredHex === hex.id;
            const isLongLabel = hex.label.length > 10;
            const labelY = "0";
            const labelClassName = isLongLabel
              ? classes.labelLong
              : classes.label;
            const groupClassName = isHovered
              ? `${classes.hexGroup} ${classes.hexGroupHovered}`
              : classes.hexGroup;

            return (
              <g key={hex.id} className={groupClassName}>
                <Link to={hex.path} className={classes.hexLink}>
                  <Hexagon
                    q={hex.q}
                    r={hex.r}
                    s={hex.s}
                    // onClick={() => handleHexClick(hex.q, hex.r, hex.s)}
                    onMouseEnter={() => setHoveredHex(hex.id)}
                    onMouseLeave={() => setHoveredHex(null)}
                    // className={`${classes.hexagon} ${hex.kind === "image" ? classes.hexagonKindImage : classes.hexagonKindText}`}
                    className={`${classes.hexagon} ${hex.kind === "image" ? classes.hexagonKindImage : classes.hexagonKindText}`}
                  >
                    <text
                      x="0"
                      y={labelY}
                      className={labelClassName}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      {hex.label}
                    </text>
                    <Link to={hex.path} className={classes.hexLink}></Link>
                  </Hexagon>
                </Link>
              </g>
            );
          })}
        </Layout>
      </HexGrid>
    </div>
  );
}

export default BodyHexGrid;
