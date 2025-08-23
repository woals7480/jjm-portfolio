import PortfolioView from "./_components/PortfolioView";
import { PORTFOLIO_DATA } from "./_const/data";

export const metadata = { title: "Portfolio | Jeong Jae Min" };

export default function PortfolioPage() {
  return <PortfolioView data={PORTFOLIO_DATA} />;
}
