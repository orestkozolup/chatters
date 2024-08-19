export const styles = {
  root: {
    display: "flex",
    width: "250px",
    padding: "10px 15px",
    margin: "10px",
    boxSizing: "content-box",
    backgroundColor: "#EAEAEA",
    borderRadius: "30px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
    },
  },
  activeRoot: {
    backgroundColor: "#CCCCCC",
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
  },
  imageContainer: {
    "& img": {
      borderRadius: "50%",
      overflow: "hidden",
      objectFit: "cover",
    },
  },
  textContainer: {
    marginLeft: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "spaceBetween",
  },
  regularText: {
    fontSize: "14px",
  },
};
