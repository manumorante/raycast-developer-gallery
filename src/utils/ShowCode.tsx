import { Detail } from "@raycast/api";

export default function ShowCode({ code }: { code: string }) {
  return <Detail markdown={`\`\`\`tsx\n${code}\n\`\`\``} />;
}
