// src/components/ErrorBox.jsx

import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { ERROR_BOX_STYLES } from "../styles/styles";

export default function ErrorBox({ children }) {
  return (
    <div className={ERROR_BOX_STYLES}>
      <div className="flex justify-center items-center gap-2.5 mb-2.5">
        <ErrorOutlineOutlinedIcon />
        <h4>Oh no!</h4>
      </div>
      {children}
    </div>
  );
}
