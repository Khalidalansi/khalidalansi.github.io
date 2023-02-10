import { ProjectT } from "./ProjectT";
import { SkillsSectionT } from "./SkillsSection";


export interface PortFolioT {
    skillsSection?: SkillsSectionT
    projects?: Array<ProjectT>
}