// src/components/ErrorBox.jsx

import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { ERROR_BOX_STYLES } from "../styles/styles";
import { cn } from "../lib/utils";

export default function ErrorBox({ className, children }) {
  return (
    <div className={cn(ERROR_BOX_STYLES, className)}>
      <div className="flex justify-center items-center gap-2.5 mb-2.5">
        <ErrorOutlineOutlinedIcon />
        <h4>Oh no!</h4>
      </div>
      {children}
    </div>
  );
}
