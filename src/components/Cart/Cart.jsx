import React from 'react';

const Cart = ({selectedCourses,remaining,totalCredit,totalPrice}) => {
  // console.log(selectedCourses);
    return (
        <div>
            <div className='cart'>

            <div class="card bg-base-100 shadow-xl">

  <div class="card-body">
  <h1 className='text-[#2F80ED] text-xl font-bold'>Credit Hour Remaining {remaining} hr</h1>
<hr className='w-[90%] mx-auto' />
<p className='font-bold text-xl'>Course Name:</p>
{selectedCourses.map((course) =>
(  <li key={course.id}> {course.title}</li>)
)}
<hr className='w-[90%] mx-auto' />
<p className='font-semibold'>Total Credit Hour : {totalCredit} hr</p>
<hr className='w-[90%] mx-auto' />
<p className='font-semibold'>Total Price : 
{totalPrice} USD</p>
    
    </div>
  </div>
</div>


</div>
        
    );
};

export default Cart;