// 1. Import Area


// 2. Defination Area
function Home() {
  // 2.1 Hooks Area

  // 2.2 Defination Area
  // We can use server actions inside the serve component function defination
  async function asad(formData: FormData) {
    'use server'
    console.log(formData);
    const fn = formData.get('firstname');
    console.log(fn);  
  }

  // 2.3 Return Area
  return (
    <>
        <div className="container">
        <h1 className="text-center mb-5 mt-5">Student Admition Form</h1>
          <form method="GET" action={asad}>    
            <div className="mb-6">
                <input type="text" name="firstname" className="form-control mb-4" id="exampleInputEmail1" />
                <div className="text-center">
                   <button type="submit" className="btn btn-primary text-center">Submit</button>
                </div>
            </div>
          </form>
        </div>
      

    </>
  )
}
// 3. Export Area
  // 3.1 Default Export
  export default Home;
  // 3.2 Named Export
