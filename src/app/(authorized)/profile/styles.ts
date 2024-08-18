export const styles = {
  root: {
    height: 'calc(100vh - 77px)'
  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "15px",
    backgroundColor: "#EAEAEA",
    borderRadius: "30px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "30px"
  },
  actionCard: {
    width: "50%",
    height: "50px",
  },
  userMainInfo: {
    display: "flex",
    alignItems: "center",
  },
  imageContainer: {
    "& img": {
      borderRadius: "50%",
      overflow: "hidden",
      objectFit: "cover",
    },
  },
  nameContainer: {
    marginLeft: "20px"
  },
  actionsContainer: {
    display: "flex",
    alignItems: "center",
  }
};
