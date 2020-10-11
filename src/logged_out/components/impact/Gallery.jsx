import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { galleryTileData } from "./galleryTileData";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
      "& ::-webkit-scrollbar": {
        width: "0.5em",
        height: "0.6em",
      },
      "& ::-webkit-scrollbar-track": {
        borderRadius: "50px",
        webkitBoxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
      },

      "& ::-webkit-scrollbar-thumb": {
        borderRadius: "10px",
        backgroundColor: "#8a0303",
        outline: "1px solid slategrey",
      },
    },
    gridList: {
      flexWrap: "nowrap",
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: "translateZ(0)",
    },
    title: {
      color: "#fff",
    },
    titleBar: {
      background:
        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    },
  })
);

function Gallery(props) {
  const classes = useStyles();
  const { width } = props;

  return (
    <div className={classes.root}>
      <GridList
        className={classes.gridList}
        cols={isWidthDown("md", width) ? 2 : 4}
      >
        {galleryTileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.activity}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.activity}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
export default withWidth()(Gallery);
