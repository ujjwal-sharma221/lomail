import SelectTimezone from "@/components/comp-200";
import { Timezone } from "@/lib/timezone";

const DashboardPage = () => {
  return (
    <div>
      Dashboard Page
      <Timezone />
      <SelectTimezone />
    </div>
  );
};
export default DashboardPage;
