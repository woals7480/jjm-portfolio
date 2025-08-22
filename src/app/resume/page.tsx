import ResumeView from "@/app/resume/_components/ResumeView";
import { RESUME_DATA } from "@/app/resume/_const/data";

export const metadata = { title: "Resume | Jeong Jae Min" };

export default function Page() {
  return <ResumeView data={RESUME_DATA} />;
}
