export const styles = {
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    borderBottom: "1px solid black",
  },
  userCard: {
    display: "flex",
    alignItems: "center",
  },
  imageContainer: {
    height: "30px",
    marginLeft: "15px",
    cursor: "pointer",
    borderRadius: "50%",
    "& img": {
      borderRadius: "50%",
      overflow: "hidden",
      objectFit: "cover",
    },
    "&:hover": {
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
    },
  },
};
