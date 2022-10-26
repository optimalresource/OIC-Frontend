import InputAdornment from "components/utils/form-elements/input-adornment";
import RadioGroup from "components/utils/form-elements/radio-group";
import SelectAdornment from "components/utils/form-elements/select-adornment";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CheckboxGroup from "components/utils/form-elements/checkbox-group";
import { availableDays } from "data/available-days";
import { teamPreferred } from "data/team-preferred";
import { mediaSkills } from "data/media-skills";

const SkillForm = ({
  setMedicalPractitioner,
  setCanLiftHeavyObjects,
  setCanTakeWeekfOff,
  setPreferredTeam,
  setDaysAvailable,
  setMediaAbilities,
  validateSkill,
  skillFormErrors = [],
  decreasePage,
}) => {
  const [errors, setErrors] = useState(skillFormErrors);
  const [availableDaysArray, setAvailableDaysArray] = useState([]);
  const volunteer = useSelector((state) => state?.volunteer);
  useEffect(() => {
    setErrors(skillFormErrors);
  }, [skillFormErrors]);
  return (
    <>
      <div className="w-[90%] min1141:w-[80%] flex items-center justify-center">
        <RadioGroup
          items={["Yes", "No"]}
          setValue={setMedicalPractitioner}
          label="Are you a medical practitioner?"
          isError={errors.includes("isMedicalPractitioner") ? true : false}
          error="Please indicate if you are a medical practitioner"
          defaultValue={volunteer?.isMedicalPractitioner}
          className="mt-[50px]"
        />
      </div>
      <div className="w-[90%] min1141:w-[80%] flex items-center justify-center">
        <RadioGroup
          items={["Yes", "No"]}
          setValue={setCanLiftHeavyObjects}
          label="Are you willing to exert energy in lifting heavy objects?"
          isError={errors.includes("canLiftHeavyObjects") ? true : false}
          error="Please indicate if you can lift heavy objects"
          defaultValue={volunteer?.canLiftHeavyObjects}
          className="max1140min641:mt-[50px]"
        />
      </div>

      <div className="w-[90%] min1141:w-[80%] flex items-center justify-center">
        <RadioGroup
          items={["Yes", "No"]}
          setValue={setCanTakeWeekfOff}
          label="Are you willing to take the week off work?"
          isError={errors.includes("canTakeWeekfOff") ? true : false}
          error="Please indicate if you can take the week off"
          defaultValue={volunteer?.canTakeWeekfOff}
        />
      </div>

      <div className="w-[90%] min1141:w-[80%] flex items-center justify-center">
        <CheckboxGroup
          items={availableDays}
          setValue={setDaysAvailable}
          label="What day(s) of the week will you be available?"
          isError={errors.includes("daysAvailable") ? true : false}
          error="Please indicate at least one day you will be available"
          defaultValue={volunteer?.daysAvailable}
          flexDirection="flex-col"
        />
      </div>

      <div className="w-[90%] min1141:w-[80%] flex items-center justify-center">
        <SelectAdornment
          label="Preferred team for OIC?"
          important={true}
          items={teamPreferred}
          setValue={setPreferredTeam}
          isError={errors.includes("preferredTeam") ? true : false}
          error="You didn't indicate your preferred team"
          defaultValue={volunteer?.preferredTeam}
        />
      </div>

      {volunteer?.preferredTeam === "Media" && (
        <div className="w-[90%] min1141:w-[80%] flex items-center justify-center">
          <CheckboxGroup
            items={mediaSkills}
            setValue={setMediaAbilities}
            label="For media professionals only. Please select applicable media skill"
            isError={errors.includes("mediaAbilities") ? true : false}
            error="Please select media skills"
            defaultValue={volunteer?.mediaAbilities}
            flexDirection="flex-col"
          />
        </div>
      )}

      <div className="w-[90%] min1141:w-[80%] flex items-center justify-center gap-5 max530:flex-col mt-[50px] mb-[50px]">
        <button
          onClick={decreasePage}
          className={`buttonPrimary text-sm w-[40%] max530:w-[100%]`}
        >
          Go Back
        </button>
        <button
          onClick={validateSkill}
          className={`buttonPrimary text-sm w-[40%] max530:w-[100%]`}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default SkillForm;
