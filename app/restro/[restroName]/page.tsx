export default function RestroPage({
  params,
}: {
  params: { restroName: string };
}) {
  return <h1>{params.restroName}</h1>;
}
