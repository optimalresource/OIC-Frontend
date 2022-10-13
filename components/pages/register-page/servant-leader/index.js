import Image from "next/image";
import { Router } from "next/router";
import React, {useState} from "react";
import styles from "../../../utils/input-component/InputComponent.module.css";




const ServantLeader = () => {
  
const [page, setPage] = useState(0);
const increasePage = () => setPage(page < 3? page + 1: page);
const decreasePage = () => setPage(page > 0? page - 1: page);

  return (
    <div className="flex items-start bmd:items-center justify-between bmd:flex-col gap-10 w-[100%] min-h-[950px] bg-[#F6FCFF] px-[0%] py-[0px] mt-[150px]">
      
      <div className="flex-col w-[50%] h-[870px]  bg-[#000000] ">
        <Image
          src="/assets/images/register_frame.png"
          width={840}
          height={1065}
          alt="logo"
          layout="intrinsic"
        />
      </div>

      <div className="flex flex-col w-[50%] h-[870px] items-center">
        <div className="flex-1 items-center mt-[20px]">        
        <Image 
          src="/assets/images/register_icon.png"
          width={52.6}
          height={50.56}
          alt="logo"
        />
        <h2 className="text-[#1f4477]">Register</h2>
        </div>
      <RoutePage page={page} decreasePage={decreasePage} increasePage={increasePage}/>
      </div>
    </div>
  );
};


const RoutePage = ({page,decreasePage, increasePage}) => {
  if(page == 0)
  {
    return <BiodataForm page={page} decreasePage={decreasePage} increasePage={increasePage}/>
  } else if(page == 1){
    return <ContactForm page={page} decreasePage={decreasePage} increasePage={increasePage}/>          
  } else if(page == 2){
    return <SkillForm page={page} decreasePage={decreasePage} increasePage={increasePage}/>          
  } else {
    return <FormComplete/>
  }
}

const BiodataForm = ({page, decreasePage, increasePage}) => {
  return (
      <div className="flex flex-col w-[50%] h-[900px] items-left">

          <label className="flex mb-[5px] mt-[30px]">First Name<span className="text-[red]">*</span></label>
          <input
            type="text"
            className={styles.input}
          />
          <label className="flex mb-[5px] mt-[30px]">Last Name<span className="text-[red]">*</span></label>
          <input
            type="text"
            className={styles.input}
          />
          <label className="flex mb-[5px] mt-[30px]">Email<span className="text-[red]">*</span></label>          
          <input
            type="text"
            className={styles.input}
          />

          <label className="flex mb-[5px] mt-[30px]">Select Gender<span className="text-[red]">*</span></label>          
            <label className="items-right mt-2">Male
              <input type="checkbox"/>        
            </label>
            <br/>        
            <label className="items-right mt-3">Female
              <input  className="items-left" type="checkbox"/>
            </label>

            <label className="flex mb-[5px] mt-[30px]">Are you a member of Oasis? <span className="text-[red]">*</span></label>  
            <div className="flex gap-20">   
              <label>Yes
                <input type="checkbox"/>        
              </label>
              <label >No
                <input  type="checkbox"/>
              </label>
            </div>     
            
          <label className="flex mb-[5px] mt-[30px]">What year did you join Oasis?<span className="text-[red]">*</span></label>          
          <input
            type="date"
            format="yyyy"
            className={styles.input}
          />


            <label className="flex mb-[5px] mt-[30px]">Do you currently serve in the Oasis? <span className="text-[red]">*</span></label>  
            <div className="flex gap-20">   
              <label>Yes
                <input type="checkbox"/>        
              </label>
              <label >No
                <input  type="checkbox"/>
              </label>
            </div>   

          <div className="flex gap-5 flex-row mt-[50px]">
            <button onClick={increasePage} className={`buttonPrimary text-sm`}>
              Next
            </button>
          </div>
      </div>
    );
  }

  const ContactForm = ({page, decreasePage, increasePage}) => {
    return (
      <div className="flex flex-col w-[50%] h-[900px] items-left">

          <label className="flex mb-[5px] mt-[30px]">Contact Number<span className="text-[red]">*</span></label>
          <input
            type="text"
            className={styles.input}
          />
  
          <label className="flex mb-[5px] mt-[30px]">WhatsApp Number<span className="text-[red]">*</span></label>
          <input
            type="text"
            className={styles.input}
          />
          <label>Same as contact number
            <input type="checkbox"/>        
          </label>

          <label className="flex mb-[5px] mt-[30px]">Age range<span className="text-[red]">*</span></label>
          <select
            type="select"
            className={styles.select}
          >
          <option>18 - 24</option>
          <option>25 - 34</option>
          <option>35 +</option>
          </select>

          <label className="flex mb-[5px] mt-[30px]">Do you have any medical condition that requires special accomodation? <span className="text-[red]">*</span></label>  
            <div className="flex gap-20">   
              <label>Yes
                <input type="checkbox"/>        
              </label>
              <label >No
                <input  type="checkbox"/>
              </label>
            </div>   

            <div className="flex gap-5 flex-row mt-[50px]">
              <button  onClick={decreasePage} className={`buttonPrimary text-sm`}>
                Back
              </button>
              <button  onClick={increasePage} className={`buttonPrimary text-sm`}>
                Next
              </button>
            </div>
        </div>
    );
    }

    const SkillForm = ({page, decreasePage, increasePage}) => {
      return (
        <div className="flex flex-col w-[50%] h-[900px] items-left">
  
            <label className="flex mb-[5px] mt-[30px]">Are you a medical practitioner? <span className="text-[red]">*</span></label>  
            <div className="flex gap-20">   
              <label>Yes
                <input type="checkbox"/>        
              </label>
              <label >No
                <input  type="checkbox"/>
              </label>
            </div>   

            <label className="flex mb-[5px] mt-[30px]">Are you willing to exert energy in lifting heavy objects? <span className="text-[red]">*</span></label>  
            <div className="flex gap-20">   
              <label>Yes
                <input type="checkbox"/>        
              </label>
              <label >No
                <input  type="checkbox"/>
              </label>
            </div>  

            <label className="flex mb-[5px] mt-[30px]">Are you willing to take the week off work? <span className="text-[red]">*</span></label>  
            <div className="flex gap-20">   
              <label>Yes
                <input type="checkbox"/>        
              </label>
              <label >No
                <input  type="checkbox"/>
              </label>
            </div>                 
            
          <label className="flex mb-[5px] mt-[30px]">What day of the week will you be available?<span className="text-[red]">*</span></label>          
          <input
            type="date"
            format="yyyy"
            className={styles.input}
          />

          <label className="flex mb-[5px] mt-[30px]">Preferred team for OIC<span className="text-[red]">*</span></label>
          <select
            type="select"
            className={styles.select}
          >
          <option>Ushering</option>
          <option>Sanitation</option>
          <option>Counseling</option>
          <option>Security and Traffic Control</option>
          <option>Prayer</option>
          <option>Greeters</option>
          <option>Medical</option>
          <option>Logistics</option>
          <option>Prayer</option>
          </select>

          <label className="flex mb-[5px] mt-[30px]">Are you currently in any department in The Oasis aside  the ones listed? <span className="text-[red]">*</span></label>  
            <div className="flex gap-20">   
              <label>Yes
                <input type="checkbox"/>        
              </label>
              <label >No
                <input  type="checkbox"/>
              </label>
            </div> 

            <div className="flex gap-5 flex-row mt-[50px]">
              <button  onClick={decreasePage} className={`buttonPrimary text-sm`}>
                Back
              </button>
              <button  onClick={increasePage} className={`buttonPrimary text-sm`}>
                Submit
              </button>
            </div>
        </div>
  );
  }  

  
  const FormComplete = ({page, decreasePage, increasePage}) => {
    return (
      <div className="flex text-[50px] mt-[50px] text-[green] flex-col w-[50%] h-[900px] items-center">
        Thank you!
      </div>
    );
  }
export default ServantLeader;
