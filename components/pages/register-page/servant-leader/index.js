import Image from "next/image";
import { Router } from "next/router";
import React, { useState } from "react";
import styles from "../../../utils/input-component/InputComponent.module.css";
//import CustomModal from "../../../layouts/custom-modal"


let stateValue = {
  firstname:"",
  lastname:"",
  email:"",
  gender:"",
  member:"",
  yearJoin: "",
  serve:"",
  department:"",
  comment: "",
  phone:"",
  whatsapp:"",
  age:"",
  accomodation:"",
  sameasContact: false,
  practitioner:"",
  liftobject:"",
  weekoffwork:"",
  days:{
    Monday: "",
    Tuesday: "",
    Wednesday: "",
    Thursday: "",
    Friday: "",
    Saturday: "",
    Sunday: ""
  },
  team:"",
  media:"",
  checkAllDays: false
}

let resetStateValue = {
  firstname:"",
  lastname:"",
  email:"",
  gender:"",
  member:"",
  yearJoin: "",
  serve:"",
  department:"",
  comment: "",
  phone:"",
  whatsapp:"",
  age:"",
  accomodation:"",
  sameasContact: false,
  practitioner:"",
  liftobject:"",
  weekoffwork:"",
  days:{
    Monday: "",
    Tuesday: "",
    Wednesday: "",
    Thursday: "",
    Friday: "",
    Saturday: "",
    Sunday: ""
  },
  team:"",
  media:"",
  checkAllDays: false
}

let title, message = "";
let modalOpen = false;
let setModalOpen = null;

function handleInput(event, stateUsed, toggleShow){
  if(event.target.name == "serve"){    
    let serve = document.getElementsByName("serve");
    const showDepartment = serve[0].checked;
    toggleShow(showDepartment);
  } else if(event.target.name == "sameascontact"){    
    stateValue.sameasContact = document.getElementById("sameascontact").checked;
    let whatsapp = document.getElementById("whatsapp");
    whatsapp.disabled = stateValue.sameasContact;
    whatsapp.value = stateValue.sameasContact ? document.getElementById("phone").value : "";
  } else if(event.target.name == "team"){    
    stateValue.team = document.getElementById("team");
    if(event.target.value == "Media"){
      toggleShow(true);
    } else {
      toggleShow(false);
      stateValue.media="";
    }
  }
}

function updateSkill(){
  let practitioners = document.getElementsByName("practitioner");
  stateValue["practitioner"] = practitioners[0].checked ? practitioners[0].value  : practitioners[1].checked ? practitioners[1].value : "";
  let liftobjects = document.getElementsByName("liftobject");
  stateValue["liftobject"] = liftobjects[0].checked ? liftobjects[0].value  : liftobjects[1].checked ? liftobjects[1].value : "";
  let weekoffworks = document.getElementsByName("weekoffwork");
  stateValue["weekoffwork"] = weekoffworks[0].checked ? weekoffworks[0].value  : weekoffworks[1].checked ? weekoffworks[1].value : "";
  let days = document.getElementsByName("days");
  days.forEach(day => {    
    if(day.value == "Monday")
    {
      stateValue["days"]["Monday"] = day.checked ? day.value : "";
    } else if(day.value == "Tuesday"){
      stateValue["days"]["Tuesday"] = day.checked ? day.value : "";
    }else if(day.value == "Wednesday"){
      stateValue["days"]["Wednesday"] = day.checked ? day.value : "";
    }else if(day.value == "Thursday"){
      stateValue["days"]["Thursday"] = day.checked ? day.value : "";
    }else if(day.value == "Friday"){
      stateValue["days"]["Friday"] = day.checked ? day.value : "";
    }else if(day.value == "Saturday"){
      stateValue["days"]["Saturday"] = day.checked ? day.value : "";
    }else if(day.value == "Sunday"){
      stateValue["days"]["Sunday"] = day.checked ? day.value : "";
    }
  });
  stateValue["team"] = document.getElementById("team")?.value;  
  stateValue["media"] = stateValue["team"] == "Media" ? document.getElementById("media")?.value : "";
}

function validateDay(){
  let validEntry = false
  let dayss = document.getElementsByName("days");
  dayss.forEach(day => {
  if(day.checked == true){
    validEntry = true;
  }
    
  });
  return validEntry;
}

function checkAllDays(){
  let check = stateValue.checkAllDays = !stateValue.checkAllDays;
  let dayss = document.getElementsByName("days");
  dayss.forEach(day => {
    day.checked = check;    
  });
  updateSkill();
}
  
function validateSkill(primary=false, increasePage){
  let status = true;
  if(validateContact(increasePage)==false){
    return;
  }
  if(primary==true)  
    updateSkill();  
  if(stateValue["practitioner"] == null || stateValue["practitioner"] == ""){
    message = "Please select if you are a medical practitioner";
    title = "Input Error!";
    modalOpen = !modalOpen;
    alert("Please select if you are a medical practitioner");
    status = false;
  }else if(stateValue["liftobject"] == null || stateValue["liftobject"] == ""){
    message = "Please select if you can lift heavy object";
    title = "Input Error!";
    modalOpen = !modalOpen;
    alert("Please select if you can lift heavy object");
    status = false;
  }else if(stateValue["weekoffwork"] == null || stateValue["weekoffwork"] == ""){
    message = "Please select if you will be taking the week off";
    title = "Input Error!";
    modalOpen = !modalOpen;
    alert("Please select if you will be taking the week off");
    status = false;
  }else if(stateValue["weekoffwork"] == null || stateValue["weekoffwork"] == ""){
    message = "Please select if you will be taking the week off";
    title = "Input Error!";
    modalOpen = !modalOpen;
    alert("Please select if you will be taking the week off");
    status = false;
  }else if(validateDay() == false){
    message = "Please select days you will be available";
    title = "Input Error!";
    modalOpen = !modalOpen;
    alert("Please select days you will be available");
    status = false;
  }else if(stateValue["team"] == null || stateValue["team"] == ""){
    message = "Please select preferred team";
    title = "Input Error!";
    modalOpen = !modalOpen;
    alert("Please select preferred team");
    status = false;
  } else {
    postFormData(increasePage);
    //increasePage();
  }
}

function previousPage(page, decreasePage){
  if(page == "contactPage"){
    updateContact();
  } else if(page == "skillPage"){
    updateSkill();
  }
  decreasePage();
}

function updateContact(){
  stateValue["phone"] = document.getElementById("phone")?.value;
  stateValue["whatsapp"] = document.getElementById("whatsapp")?.value;
  stateValue["age"] = document.getElementById("age")?.value;
  stateValue["sameascontact"] = document.getElementById("sameascontact")?.checked;
  let accomodation = document.getElementsByName("accomodation");
  stateValue["accomodation"] = accomodation[0].checked ? accomodation[0].value : accomodation[1].checked ? accomodation[1].value : "";
}

function validateContact(primary=false, increasePage){
  let status = true;
  if(validateBioData(increasePage)==false){
    return;
  }
  if(primary == true)
    updateContact();  
  if(stateValue["phone"] == null || stateValue["phone"] == ""){
    message = "Please enter your contact number";
    title = "Input Error!";
    modalOpen = !modalOpen;
    alert("Please enter your contact number");
    status = false;
  }else if(stateValue["whatsapp"] == null || stateValue["whatsapp"] == ""){
    message = "Please enter your whatsapp number";
    title = "Input Error!";
    modalOpen = !modalOpen;
    alert("Please enter your whatsapp number");
    status = false;
  }else if(stateValue["age"] == null || stateValue["age"] == ""){
    message = "Please select your age range";
    title = "Input Error!";
    modalOpen = !modalOpen;
    alert("Please select your age range");
    status = false;
  }else if(stateValue["accomodation"] == null || stateValue["accomodation"] == ""){
    message = "Please select if you require special accomodation";
    title = "Input Error!";
    modalOpen = !modalOpen;
    alert("Please select if you require special accomodation");
    status = false;
  } else if(primary==true){
    increasePage();
  }
  return status;
}

function updateBio(){
  stateValue["firstname"] = document.getElementById("firstname")?.value;
  stateValue["lastname"] = document.getElementById("lastname")?.value;
  stateValue["email"] = document.getElementById("email")?.value;
  stateValue["yearJoin"] = document.getElementById("yearjoin")?.value;
  let gender = document.getElementsByName("gender");
  stateValue["gender"] = gender[0].checked ? gender[0].value  : gender[1].checked ? gender[1].value : "";
  let serve = document.getElementsByName("serve");
  stateValue["serve"] = serve[0].checked ? serve[0].value  : serve[1].checked ? serve[1].value : "";
  stateValue["department"] = stateValue["serve"] == "yes"? document.getElementById("department")?.value : "";
  let member = document.getElementsByName("member");
  stateValue["member"] = member[0].checked ? member[0].value  : member[1].checked ? member[1].value : "";
}

function validateBioData(primary = false, increasePage){
  let status = true;  
  if(primary == true){
    updateBio();
  }  
  var splittedEmail = stateValue["email"]?.split("@");
  if(stateValue["firstname"] == null || stateValue["firstname"] == ""){
    message = "Please enter your first name";
    title = "Input Error!";
    modalOpen = !modalOpen;
    alert("Please enter your first name");
    status = false;
  }else if(stateValue["lastname"] == null || stateValue["lastname"] == ""){
    message = "Please enter your last name";
    title = "Input Error!";
    modalOpen = !modalOpen;
    alert("Please enter your last name");
    status = false;
  }else if(stateValue["email"] == null || stateValue["email"] == ""
  || !stateValue["email"].includes("@")|| !stateValue["email"].includes(".")){
    message = "Please enter your valid email";
    title = "Input Error!";
    modalOpen = !modalOpen;
    alert("Please enter your email");
    status = false;
  }else if (splittedEmail.length != 2 || splittedEmail[1] == "yahoo.com"
  || splittedEmail[1] == "yahoomail.com") {
  alert("We don't accept yahoo accounts at the moment. Please enter another email account.")
  } else if(stateValue["gender"] == null || stateValue["gender"] == ""){
    message = "Please select your gender";
    title = "Input Error!";
    modalOpen = !modalOpen;
    alert("Please enter your gender");
    status = false;
  }else if(stateValue["member"] == null || stateValue["member"] == ""){
    message = "Please select if you are a member of the oasis";
    title = "Input Error!";
    modalOpen = !modalOpen;
    alert("Please select if you are a member of the oasis");
    status = false;
  }else if(stateValue["yearJoin"] == null || stateValue["yearJoin"] == ""){
    message = "Please select year you join oasis";
    title = "Input Error!";
    modalOpen = !modalOpen;
    alert("Please select year you join oasis");
    status = false;
  }else if(stateValue["serve"] == null || stateValue["serve"] == ""){
    message = "Please select if you currently serve at the oasis";
    title = "Input Error!";
    modalOpen = !modalOpen;
    alert("Please select if you currently serve at the oasis");
    status = false;
  } else if(stateValue["serve"] == "yes" && (stateValue["department"] == null || stateValue["department"] == "")){
    message = "Please select you department";
    title = "Input Error!";
    modalOpen = !modalOpen;
    alert("Please select your department");
    status = false;
  } else if(primary==true){
    increasePage();
  }
  return status;
}

const ServantLeader = () => {
  const [page, setPage] = useState(0);
  const increasePage = () => setPage(page < 3 ? page + 1 : page);
  const decreasePage = () => setPage(page > 0 ? page - 1 : page);

  const [stateUsed, setStateUsed] = useState(false);
  const toggleShowDepartment = (value) => {stateUsed=value;setStateUsed(stateUsed);}
  const [showMedia, setShowMedia] = useState(false);
  const toggleShowMedia = (value) => {showMedia=value;setShowMedia(showMedia);}

  return (
    <div className="flex items-start bmd:items-center justify-between max1040:flex-col min1140:flex-row  w-[100%] px-[0%] py-[0px] mt-[150px] mb-[150px] max1040:mb-[unset]">
      <div className="flex flex-col flex-1 bg-[#000000]  bg-[url('/assets/images/register_frame.png')] bg-cover min-h-[500px] gap-5 items-center justify-center bg-no-repeat max1040:w-[100%] min1141:h-[972px]">
        <div className="w-[700px] min1041:w-[600px] bg-[#000] text-[#ffffff] p-[100px] text-center bg-opacity-70 flex flex-col gap-3 bmd:w-[90%] bmd:px-[50px]">
          <h2 className="text-4xl bmd:text-3xl pb-5 font-semibold">
            Volunteer to be a Servant Leader
          </h2>
          <p className="text-lg bmd:text-lg">Why serve?</p>
          <p className="text-lg bmd:text-lg">
            Therefore, my beloved brethren, be ye steadfast, unmovable, always
            abounding in the work of the Lord, forasmuch as ye know that your
            labour is not in vain in the Lord. - 1 Corinthians 15:58 KJV
          </p>
        </div>
      </div>

      <div className="flex flex-col flex-1 items-center py-12 max1040:w-[100%] bg-[#F6FCFF] max1040:pb-[150px]">
        <div className="flex flex-col items-center mt-[20px]">
          <Image
            src="/assets/images/register_icon.png"
            width={52.6}
            height={50.56}
            alt="logo"
          />
          <h2 className="text-[#1f4477] mt-2">Register</h2>
        </div>
        
        <RoutePage
          page={page}
          decreasePage={decreasePage}
          increasePage={increasePage}         
          stateUsed={stateUsed} toggleShowDepartment={toggleShowDepartment}
          showMedia={showMedia} toggleShowMedia={toggleShowMedia}/>
      </div>
    </div>
  );
};

const RoutePage = ({page, decreasePage, increasePage, stateUsed, toggleShowDepartment, showMedia, toggleShowMedia}) => {
  if(page == 0)
  {
    return <BiodataForm increasePage={increasePage} stateUsed={stateUsed} toggleShowDepartment={toggleShowDepartment} />
  } else if(page == 1){
    return <ContactForm decreasePage={decreasePage} increasePage={increasePage}/>          
  } else if(page == 2){
    return <SkillForm decreasePage={decreasePage} increasePage={increasePage}
    showMedia={showMedia} toggleShowMedia={toggleShowMedia}/>          
  } else {
    return <FormComplete />;
  }  
};

const BiodataForm = ({increasePage, stateUsed, toggleShowDepartment}) => {
  let {firstname, lastname, email, gender, member, yearJoin, serve, department} = stateValue;
  return (
    <div className="flex flex-col flex-1 max1040:w-[80%] h-[900px] items-left">
      <label className="flex mb-[5px] mt-[30px]">
        First Name<span className="text-[red]">*</span>
      </label>
      <input type="text" className={`${styles.input}`} 
            onChange={handleInput}
            name="firstname"
            id="firstname"
            defaultValue={firstname}/>
      <label className="flex mb-[5px] mt-[30px]">
        Last Name<span className="text-[red]">*</span>
      </label>
      <input type="text" className={styles.input} onChange={handleInput}
            name="lastname"
            id="lastname"            
            defaultValue={lastname}/>
      <label className="flex mb-[5px] mt-[30px]">
        Email<span className="text-[red]">*</span>
      </label>
      <input type="text" className={styles.input} 
            onChange={handleInput}
            name="email"
            id="email"
            defaultValue={email}/>

      <label className="flex mb-[5px] mt-[30px]">
        Select Gender<span className="text-[red]">*</span>
      </label>
      <label className="items-right mt-1">
        <input type="radio" name="gender" id="gender" value="male" defaultChecked={gender == "male"} onChange={handleInput}/> Male
      </label>
      <label className="items-right mt-1">
        <input type="radio" name="gender" id="gender" value="female" defaultChecked={gender == "female"} onChange={handleInput}/> Female
      </label>

            <label className="flex mb-[5px] mt-[30px]">Are you a member of Oasis? <span className="text-[red]">*</span></label>  
            <div className="flex gap-20">   
              <label>
                <input type="radio" name="member" value="yes" id="member" defaultChecked={member == "yes"} onChange={handleInput}/>    Yes    
              </label>
              <label >
                <input  type="radio" name="member" value="no" id="member" defaultChecked={member == "no"} onChange={handleInput}/> No
              </label>
            </div>     
            
          <label className="flex mb-[5px] mt-[30px]">What year did you join Oasis?<span className="text-[red]">*</span></label>          
          <select
            type="select"
            className={styles.select}
            defaultValue={yearJoin}
            id="yearjoin"
            name="yearjoin"
          >
            <option></option>
            <option>2014</option>
            <option>2015</option>
            <option>2016</option>
            <option>2017</option>
            <option>2018</option>
            <option>2019</option>
            <option>2020</option>
            <option>2021</option>
          <option>2022</option>
          </select>

            <label className="flex mb-[5px] mt-[30px]">Do you currently serve in the Oasis? <span className="text-[red]">*</span></label>  
            <div className="flex gap-20">   
              <label>
                <input type="radio" name="serve" value="yes" id="serve" defaultChecked={serve == "yes"} onClick={(evt)=>handleInput(evt, stateUsed,toggleShowDepartment)}/> Yes  
              </label>
              <label >
                <input  type="radio" name="serve" value="no" id="serve" defaultChecked={serve == "no"} onClick={(evt)=>handleInput(evt, stateUsed, toggleShowDepartment)}/> No
              </label>
            </div>                       
            {stateUsed && (
              <Department department={department}/>
            )}   
          <div className="flex gap-5 flex-row mt-[50px]">
            <button onClick={() => validateBioData(true, increasePage)} className={`buttonPrimary text-sm`}>
              Next
            </button>
          </div>
      </div>
    );
  }

  const Department = ({department}) => {
    return(
    <>
    <div>
    <label className="flex mb-[5px] mt-[30px]">Select your department<span className="text-[red]">*</span></label>
    <select
      type="select"
      className={styles.select}
      defaultValue={department}
      id="department"
      name="department"
    >
      <option></option>
      <option>Hospitality</option>
      <option>Welfare</option>
      <option>Ushering</option>
      <option>Choir (Sound of many waters)</option>
      <option>Media (SALT)</option>
      <option>Greeters</option>
      <option>Security</option>
      <option>Sanitation</option>
      <option>Counseling</option>
      <option>Prayer</option>
      <option>Outreach</option>
      <option>Protocol</option>
    </select>
    </div>
    </>
    );
  }

  const ContactForm = ({decreasePage, increasePage}) => {
    let {phone, whatsapp, age, accomodation, sameasContact} = stateValue;
    return (
      <div className="flex flex-col w-[50%] h-[900px] items-left">

          <label className="flex mb-[5px] mt-[30px]">Contact Number<span className="text-[red]">*</span></label>
          <input
            type="number"
            className={styles.input}
            id="phone"
            name="phone"
            defaultValue={phone}
          />
  
          <label className="flex mb-[5px] mt-[30px]">WhatsApp Number<span className="text-[red]">*</span></label>
          <input
            type="number"
            className={styles.input}
            id="whatsapp"
            name="whatsapp"
            defaultValue={whatsapp}
            disabled={sameasContact}
          />
          <label>
            <input type="checkbox"
            id="sameascontact"
            name="sameascontact"
            defaultChecked={sameasContact}
            onClick={handleInput}/> Same as contact number    
          </label>

          <label className="flex mb-[5px] mt-[30px]">Age range<span className="text-[red]">*</span></label>
          <select
            type="select"
            className={styles.select}
            id="age"
            name="age"
            defaultValue={age}
          >
          <option></option>
          <option>18 - 24</option>
          <option>25 - 34</option>
          <option>35 +</option>
          </select>

      <label className="flex mb-[5px] mt-[30px]">
        Do you have any medical condition that requires special accomodation?{" "}
        <span className="text-[red]">*</span>
      </label>
      <div className="flex gap-20">
        <label>
          <input type="radio" name="accomodation" value="yes" id="accomodation" defaultChecked={accomodation == "yes"} /> Yes
        </label>
        <label>
          <input type="radio" name="accomodation" value="no" id="accomodation" defaultChecked={accomodation == "no"} /> No
        </label>
      </div>

      <div className="flex gap-5 flex-row mt-[50px]">
        <button onClick={()=>previousPage("contactPage", decreasePage)} className={`buttonPrimary text-sm`}>
          Back
        </button>
        <button onClick={()=>validateContact(true, increasePage)} className={`buttonPrimary text-sm`}>
          Next
        </button>
      </div>
    </div>
  );
};

    const SkillForm = ({decreasePage, increasePage,showMedia, toggleShowMedia}) => {
      let {practitioner, liftobject, weekoffwork, days, team, media} = stateValue;
      return (
        <div className="flex flex-col w-[50%] h-[900px] items-left">
  
            <label className="flex mb-[5px] mt-[30px]">Are you a medical practitioner? <span className="text-[red]">*</span></label>  
            <div className="flex gap-20">   
              <label>
                <input type="radio" name="practitioner" id="practitioner" value="yes" defaultChecked={practitioner == "yes"}/> Yes    
              </label>
              <label >
                <input  type="radio" name="practitioner" id="practitioner" value="no" defaultChecked={practitioner == "no"}/> No
              </label>
            </div>   

      <label className="flex mb-[5px] mt-[30px]">
        Are you willing to exert energy in lifting heavy objects?{" "}
        <span className="text-[red]">*</span>
      </label>
      <div className="flex gap-20">
        <label>
          <input type="radio" name="liftobject" id="liftobject" value="yes" defaultChecked={liftobject == "yes"}/> Yes
        </label>
        <label>
          <input type="radio" name="liftobject" id="liftobject" value="yes" defaultChecked={liftobject == "no"}/> No
        </label>
      </div>

            <label className="flex mb-[5px] mt-[30px]">Are you willing to take the week off work? {" "}<span className="text-[red]">*</span></label>  
            <div className="flex gap-20">   
              <label>
                <input type="radio" name="weekoffwork" id="weekoffwork" value="yes" defaultChecked={weekoffwork == "yes"}/> Yes    
              </label>
              <label >
                <input  type="radio" name="weekoffwork" id="weekoffwork" value="no" defaultChecked={weekoffwork == "no"}/> No
              </label>
            </div>                 
            
          <label className="flex mb-[5px] mt-[30px]">What day of the week will you be available?<span className="text-[red]">*</span></label>          
          <div>  
              <label className={"flex gap-2"}>
                <input type="checkbox" name="days" id="days" value="All" onClick={checkAllDays} defaultChecked={days["all"]}/> All
              </label> 
              <label className={"flex gap-2"}>
                <input type="checkbox" name="days" id="days" value="Monday" defaultChecked={days["Monday"]}/> Monday, November 21st
              </label>
              <label className={"flex gap-2"}>
                <input  type="checkbox" name="days" id="days" value="Tuesday" defaultChecked={days["Tuesday"]}/> Tuesday, November 22nd
              </label>
              <label className={"flex gap-2"}>
                <input  type="checkbox" name="days" id="days" value="Wednesday" defaultChecked={days["Wednesday"]}/> Wednesday, November 23rd
              </label>
            </div>            
            <div>  
              <label className={"flex gap-2"}>
                <input  type="checkbox" name="days" id="days" value="Thursday" defaultChecked={days["Thursday"]}/> Thursday, November 24th
              </label>
              <label className={"flex gap-2"}>
                <input  type="checkbox" name="days" id="days" value="Friday" defaultChecked={days["Friday"]}/> Friday, November 25th
              </label>
              <label className={"flex gap-2"}>
                <input  type="checkbox" name="days" id="days" value="Saturday" defaultChecked={days["Saturday"]}/> Saturday, November 26th
              </label>
              <label className={"flex gap-2"}>
                <input  type="checkbox" name="days" id="days" value="Sunday" defaultChecked={days["Sunday"]}/> Sunday, November 27th
              </label>
            </div>  

          <label className="flex mb-[5px] mt-[30px]">Preferred team for OIC<span className="text-[red]">*</span></label>
          <select
            type="select"
            className={styles.select}
            id="team"
            name="team"
            defaultValue={team}
            onClick={(evt)=>handleInput(evt, showMedia, toggleShowMedia)}
          >
          <option></option>
            <option>Ushering</option>
            <option>Sanitation</option>
            <option>Counseling</option>
            <option>Security and Traffic Control</option>
            <option>Prayer</option>
            <option>Greeters</option>
            <option>Medical</option>
            <option>Logistics</option>
            <option>Prayer</option>
            <option>Media</option>
          </select>
                            
          {showMedia && (
              <Media media={media}/>
            )}   
            <div className="flex gap-5 flex-row mt-[50px]">
              <button  onClick={()=>previousPage("skillPage", decreasePage)} className={`buttonPrimary text-sm`}>
                Back
              </button>
              <button id="submitButton" onClick={()=>validateSkill(true, increasePage)} className={`buttonPrimary text-sm`}>
                Submit
              </button>
            </div>
        </div>
  );
};

const Media = (media) => {
  return(
        <>
          <label className="flex mb-[5px] mt-[30px]">
            For media professionals only. Please select applicable media skill?
          </label>  
          <select
            type="select"
            className={styles.select}
            id="media"
            name="media"
            defaultValue={media}
          >
          <option></option>
            <option>Graphics design</option>
            <option>Photography</option>
            <option>Videography</option>
            <option>Photo editing</option>
          </select>
        </>
  );
}

const FormComplete = () => {
  return (
    <div className="flex text-[50px] mt-[50px] text-[green] flex-col w-[50%] h-[900px] items-center">
      Thank you!
    </div>
  );
};


function postFormData(increasePage){
  var submitButton = document.getElementById("submitButton");
  submitButton.disabled = true;
  submitButton.className = "whiteButton text-sm";

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Allow-Origin", "*");
  myHeaders.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  myHeaders.append("access-control-allow-methods", "GET,HEAD,OPTIONS,POST,PUT");
  myHeaders.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization,Access-Control-Allow-Origin,access-control-allow-headers");
  myHeaders.append("access-control-allow-headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization,Access-Control-Allow-Origin,access-control-allow-headers,access-control-allow-methods");

  const extractKeys = Object.keys(Object.fromEntries(Object.entries(stateValue.days).filter(([key,value]) => value?.trim().length > 0))).join(',');
 
  var raw = JSON.stringify(
    {
      "firstName": stateValue.firstname,
      "lastName": stateValue.lastname,
      "email": stateValue.email,
      "gender": stateValue.gender,
      "isMember": stateValue.member,
      "yearJoinOasis": stateValue.yearJoin,
      "isWorker": stateValue.serve,
      "department": stateValue.department,
      "phoneNumber": stateValue.phone,
      "whatsappNumber": stateValue.whatsapp,
      "ageRange": stateValue.age,
      "hasMedicalCondition": stateValue.accomodation,
      "isMedicalPractitioner": stateValue.practitioner,
      "canLiftHeavyObject": stateValue.liftobject,
      "isWorkOffWork": stateValue.weekoffwork,
      "daysToBeAvailable": extractKeys,
      "preferredTeam": stateValue.team,
      "mediaSkill": stateValue.media
    }
  );

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://rccgoic.herokuapp.com/api/user", requestOptions)
    .then(response => response.text())
    .then((result) => {
      if(result.includes("success")){
        increasePage();
        stateValue = resetStateValue;
      }else{
        alert("Unable to submit form. Please try again later.");
      }
      console.log(result);
      submitButton.disabled = false;
      submitButton.className = "buttonPrimary text-sm";
    })
    .catch(error => {      
      alert("Unable to submit form. Please try again later.");
      console.log('error', error);
      submitButton.disabled = false;
      submitButton.className = "buttonPrimary text-sm";
    });
}

export default ServantLeader;
