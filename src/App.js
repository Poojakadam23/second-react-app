
function App(){
  let str=`Hello Universe!!!`;
  let pi=3.141159;
  let active=true;
  let isUserLoggedIn = true;
  let user = {id:1,name:"rohit"}

  return(
    <>
    <h1>Hello World</h1>
    <h1>{str}</h1>
    <h1>PI{pi}!!</h1>
    {isUserLoggedIn && <h1>Welcome CDAC!</h1>}
    <h1>{active?"good morning" : "good night"}</h1>
    <h1>
      ID:{user.id} Name:{user.name}
    </h1>
    </>
  );

}
export default App;