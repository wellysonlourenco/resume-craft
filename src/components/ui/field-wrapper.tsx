import { ReactNode } from "react";
import { Label } from "./label";

type FieldWrapperProps = {
  label: string;
  children: ReactNode;
};

export const FieldWrapper = ({ children, label }: FieldWrapperProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Label className="text-sm font-semibold text-gray-600">{label}</Label>
      {children}
    </div>
  );
};
