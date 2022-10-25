import Head from "next/head";
import { Fragment } from "react";
import RegisterPage from "components/pages/register-page";
import { useSelector, useDispatch } from "react-redux";
import { setVolunteer } from "redux/volunteer";

export default function Home() {
  const dispatch = useDispatch();
  // dispatch(
  //   setVolunteer({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     gender: "",
  //     isMember: null,
  //     isServing: null,
  //     yearJoined: "",
  //     department: "",
  //     contactNumber: "",
  //     whatsAppNumber: "",
  //     ageRange: "",
  //     medicalCondition: "",
  //     isMedicalPractitioner: null,
  //     canLiftHeavyObjects: null,
  //     canTakeWeekfOff: null,
  //     daysAvailable: [],
  //     preferredTeam: "",
  //     mediaAbilities: [],
  //   })
  // );
  return (
    <Fragment>
      <Head>
        <title>Oasis International Conference - Volunteers</title>
        <meta
          name="description"
          content="The Oasis International Conference..."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <RegisterPage />
    </Fragment>
  );
}
