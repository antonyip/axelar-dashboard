import { Info } from "@mui/icons-material";
import {
  IconButton,
  Tooltip,
} from "@mui/material";

function SRCButton({ srcLink }) {
  return (
    <Tooltip title={srcLink || "undefined"}>
      <IconButton
        color="info"
        aria-label="add an alarm"
        onClick={() => {
          if (srcLink) {
            window.open(srcLink, "_blank");
          }
        }}
      >
        <Info></Info>
      </IconButton>
    </Tooltip>
  );
}

export default SRCButton;
