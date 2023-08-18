import { Typography } from "@mui/material";

export default function Sound() {
  return (
    <div
      style={{
        width: "85%",
        margin: "auto",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" style={{ fontWeight: "bold" }}>
        Does this sound is familiar...
      </Typography>

      <div className="container">
        <img
          class="farmer"
          style={{ width: "30%" }}
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTBvx0HPeFTSt9XnlmKcHIGBW7jNX_29-_DGng1u9aoPUekQ6jb"
        />
      </div>
    </div>
  );
}
