import ProjectModal from "@/app/portfolio/_components/ProjectModal";

export default async function ProjectModalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <>
      <ProjectModal />
    </>
  );
}
