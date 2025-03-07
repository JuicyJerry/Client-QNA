import { memo } from "react";

const GoogleRedirectionPage = memo(() => {
  const code = new URL(document.location.toString()).searchParams.get("code");

  return <div>GoogleRedirectionPage입니다.</div>;
});

export default GoogleRedirectionPage;
