import { Plus } from "lucide-react";
import { ResumeCardButton } from "./resumes-card";

export const AddResumeButton = () => {
  return (
    <ResumeCardButton
      title="Adicionar Curriculo"
      description="Crie um novo curriculo"
      icon={<Plus size={50} />}
    />
  );
};
