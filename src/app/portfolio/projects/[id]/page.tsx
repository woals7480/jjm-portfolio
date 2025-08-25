import PortfolioView from "@/app/portfolio/_components/PortfolioView";
import ProjectModal from "@/app/portfolio/_components/ProjectModal";
import { PORTFOLIO_DATA } from "@/app/portfolio/_const/data";

export default function ProjectsPage() {
  return (
    <>
      <PortfolioView data={PORTFOLIO_DATA} />
      <ProjectModal />
    </>
  );
}
