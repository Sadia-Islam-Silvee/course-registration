
import React, { useEffect,useState } from 'react';
import './Home.css';
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {

    const [allcourse, setCourse] = useState([]);
    const[selectedCourses,setSelectedCourses] = useState([]); 
    const [remaining,  setRemainingCredit] = useState(0);
    const [totalCredit, setCredit] = useState(0);
    const [totalPrice, setPrice] = useState(0);

    useEffect(()=>{
        fetch ('course.json')
        .then(response => response.json())
        .then(data => setCourse(data));
    }, []);

    
    const handleSelectedCourse=(course) =>{
     
       const isExist=selectedCourses.find(c => c.id === course.id);
       let count = course.credit;
       let price = course.price;
       if(isExist){
        return toast('Already Added');
       }
       else{
        selectedCourses.forEach(c => {
          count = count + c.credit});

          selectedCourses.forEach(c => {
            price = price + c.price});

          const remainingCredit=20-count;

          if(count>20){
            toast("You've reached target credit limit");
          }
        
        else{
          setCredit(count);
          setRemainingCredit(remainingCredit);
          setSelectedCourses([...selectedCourses, course]);
          setPrice([price])
         }

       }
      
      
    };
   
    return (
        <div>
             <h1 className='text-4xl font-bold text-center p-4 mx-4'>Course Registration</h1>

             <div className='body flex justify-around '>

             <div className='container grid grid-cols-1 mb-10 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-3 w-9/12'>
             {allcourse.map((course) =>(
               <div key={course.id} className=" card  bg-base-100 shadow-xl rounded-none ">
               <figure>
                 <img
                   className=" rounded-none w-4/5"
                   src={course.image}
                   alt="Shoes"
                 />
               </figure>
               <div className="card-body">
                 <h2 className="card-title">{course.title}</h2>
                 <p className='text-base text-justify'>
                   {course.paragraph}
                 </p>
         
                 <div className="flex justify-between">
                   <div className="flex">
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       width="24"
                       height="24"
                       viewBox="0 0 24 24"
                       fill="none"
                     >
                       <path
                         d="M12 1V23"
                         stroke="#1C1B1B"
                         stroke-width="1.5"
                         stroke-linecap="round"
                         stroke-linejoin="round"
                       />
                       <path
                         d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
                         stroke="#1C1B1B"
                         stroke-width="1.5"
                         stroke-linecap="round"
                         stroke-linejoin="round"
                       />
                     </svg>
                     <p>Price : {course.price}</p>
                   </div>
                   <div className="flex">
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       width="24"
                       height="24"
                       viewBox="0 0 24 24"
                       fill="none"
                     >
                       <path
                         d="M12 6.042C10.3516 4.56336 8.2144 3.74694 6 3.75C4.948 3.75 3.938 3.93 3 4.262V18.512C3.96362 18.172 4.97816 17.9989 6 18C8.305 18 10.408 18.867 12 20.292M12 6.042C13.6483 4.56328 15.7856 3.74685 18 3.75C19.052 3.75 20.062 3.93 21 4.262V18.512C20.0364 18.172 19.0218 17.9989 18 18C15.7856 17.9969 13.6484 18.8134 12 20.292M12 6.042V20.292"
                         stroke="#1C1B1B"
                         stroke-width="1.5"
                         stroke-linecap="round"
                         stroke-linejoin="round"
                       />
                     </svg>
                     <p>Credit : {course.credit}hr</p>
                   </div>
                 </div>
                 <div className="card-actions ml-5">
                   <button onClick={()=>{handleSelectedCourse(course)} } class="btn btn-primary w-4/5  text-white">Select</button>
                 </div>
               </div>
             </div>
             ))}
             </div>

             <Cart selectedCourses={selectedCourses} remaining={remaining} totalCredit={totalCredit} totalPrice={totalPrice}></Cart>

             </div>

             <ToastContainer />

        </div>
    );
};

export default Home;