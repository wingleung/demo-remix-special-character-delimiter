import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export function loader({ params }: LoaderFunctionArgs) {
  const {path, pageId} = params

  return json({
    path,
    pageId
  })
}

export default function Index() {
  const {
    path,
    pageId
  } = useLoaderData<any>()

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      {path}
      {pageId}
    </div>
  );
}
