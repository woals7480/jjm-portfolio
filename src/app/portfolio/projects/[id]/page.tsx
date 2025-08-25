import PortfolioView from "@/app/portfolio/_components/PortfolioView";
import { PORTFOLIO_DATA } from "@/app/portfolio/_const/data";

export default function ProjectsPage() {
  return (
    <>
      <PortfolioView data={PORTFOLIO_DATA} />
      <>가로채기</>
    </>
  );
}
