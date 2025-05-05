import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getAllData } from "../../../service/supabaseTripService";
import InformationSection from "../components/InformationSection";

const ViewTrip = () => {
  const { tripId } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["trip", tripId],
    queryFn: async () => getAllData(),
    enabled: !!tripId,
  });
  console.log(data);
  return (
    <section className="section-container-1 my-10">
      <InformationSection tripData={data} />
    </section>
  );
};

export default ViewTrip;
