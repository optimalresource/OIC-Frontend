import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setVolunteer } from "redux/volunteer";
import SkillForm from "./form";
import { availableDays } from "data/available-days";
import { useRouter } from "next/router";

const SkillFormPage = () => {
  const [skillFormErrors, setSkillFormErrors] = useState([]);
  const router = useRouter();
  const volunteer = useSelector((state) => state?.volunteer);
  const {
    isMedicalPractitioner,
    canLiftHeavyObjects,
    canTakeWeekfOff,
    daysAvailable,
    preferredTeam,
    mediaAbilities,
  } = volunteer;
  const dispatch = useDispatch();

  const validateSkill = () => {
    if (checkSkillForm()) {
      router.push("/volunteer/success-page");
      return true;
    } else return false;
  };

  useEffect(() => {
    let errors = [...skillFormErrors];
    if (errors.indexOf("isMedicalPractitioner") > -1) {
      if (isMedicalPractitioner !== null)
        errors.splice(errors.indexOf("isMedicalPractitioner"), 1);
    }
    if (errors.indexOf("canLiftHeavyObjects") > -1) {
      if (canLiftHeavyObjects !== null)
        errors.splice(errors.indexOf("canLiftHeavyObjects"), 1);
    }
    if (errors.indexOf("canTakeWeekfOff") > -1) {
      if (canTakeWeekfOff !== null)
        errors.splice(errors.indexOf("canTakeWeekfOff"), 1);
    }
    if (errors.indexOf("daysAvailable") > -1) {
      if (daysAvailable.length > 0)
        errors.splice(errors.indexOf("daysAvailable"), 1);
    }
    if (errors.indexOf("preferredTeam") > -1) {
      if (preferredTeam.length > 0)
        errors.splice(errors.indexOf("preferredTeam"), 1);
    }
    if (errors.indexOf("mediaAbilities") > -1) {
      if (mediaAbilities.length > 0)
        errors.splice(errors.indexOf("mediaAbilities"), 1);
    }
    if (errors.length !== skillFormErrors.length) {
      setSkillFormErrors(errors);
    }
  }, [
    isMedicalPractitioner,
    canLiftHeavyObjects,
    canTakeWeekfOff,
    daysAvailable,
    preferredTeam,
    mediaAbilities,
    skillFormErrors,
  ]);

  const checkSkillForm = useCallback(() => {
    let errors = [];
    if (isMedicalPractitioner === null) errors.push("isMedicalPractitioner");
    if (canLiftHeavyObjects === null) errors.push("canLiftHeavyObjects");
    if (canTakeWeekfOff === null) errors.push("canTakeWeekfOff");
    if (daysAvailable.length < 1) errors.push("daysAvailable");
    if (preferredTeam.length < 1) errors.push("preferredTeam");
    if (preferredTeam === "Media") {
      if (mediaAbilities.length < 1) errors.push("mediaAbilities");
    }
    if (errors.length > 0) {
      setSkillFormErrors(errors);
      return false;
    } else {
      setSkillFormErrors([]);
      return true;
    }
  }, [
    isMedicalPractitioner,
    canLiftHeavyObjects,
    canTakeWeekfOff,
    daysAvailable,
    preferredTeam,
    mediaAbilities,
  ]);

  const addOrRemoveDaysAvailable = (value) => {
    let days, result, oldDays;
    if (value === "All") {
      oldDays = [...volunteer?.daysAvailable];
      oldDays.includes("All") ? (days = []) : (days = [...availableDays]);
      result = [...days];
    } else {
      days = [...volunteer?.daysAvailable];
      if (days.includes(value)) days.splice(days.indexOf(value), 1);
      else days.push(value);
      result = [...days];
    }
    dispatch(setVolunteer({ ...volunteer, daysAvailable: result }));
  };

  const addOrRemoveMediaAbility = (value) => {
    let media = [...volunteer?.mediaAbilities];
    if (media.includes(value)) media.splice(media.indexOf(value), 1);
    else media.push(value);
    dispatch(setVolunteer({ ...volunteer, mediaAbilities: media }));
  };

  return (
    <SkillForm
      setMedicalPractitioner={(value) =>
        dispatch(setVolunteer({ ...volunteer, isMedicalPractitioner: value }))
      }
      setCanLiftHeavyObjects={(value) =>
        dispatch(setVolunteer({ ...volunteer, canLiftHeavyObjects: value }))
      }
      setCanTakeWeekfOff={(value) =>
        dispatch(setVolunteer({ ...volunteer, canTakeWeekfOff: value }))
      }
      setDaysAvailable={(value) => addOrRemoveDaysAvailable(value)}
      setPreferredTeam={(value) =>
        dispatch(setVolunteer({ ...volunteer, preferredTeam: value }))
      }
      setMediaAbilities={(value) => addOrRemoveMediaAbility(value)}
      validateSkill={validateSkill}
      setYearJoined={(value) =>
        dispatch(setVolunteer({ ...volunteer, yearJoined: value }))
      }
      skillFormErrors={skillFormErrors}
      decreasePage={() => router.push("/volunteer/1")}
    />
  );
};

export default SkillFormPage;
