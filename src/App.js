import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React , {useState, useEffect} from 'react';
import {  Routes, Route, Link, useNavigate} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Error from './pages/Error';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword, 
} from "firebase/auth";
import {auth} from "./firebase-config";
// let name="Yuvraj";

function App(){
  const [mode, setMode] = useState("light"); //light mode or dark mode for navbar
  
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode("dark");
      document.body.style.backgroundColor="grey";
      showAlert("Dark Mode is Enabled","success");
    }else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light Mode is Enabled","success");
    }
  }
  const Navigate=()=>{
    navigate("/contact");
  };
  const navigate = useNavigate();

  // Authentication Only
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");

  const register = async()=>{
    try{
      const user= await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      )
      console.log(user);
    }catch(error){
      console.log(error.message);
    }
  };
  const login = async()=>{
    try{
      const user= await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      )
      console.log(user);
    }catch(error){
      console.log(error.message);
    }
  };

  const [user, setUser] = useState(null);
  // When auth variable changes setUser
  
  useEffect(()=>{
    onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);  
    });
  },[])
  
  const logOut=()=>{
    signOut(auth);
  };
  // 

  // FireStore Databse

  return(
    <>
    {/* <button onClick={Navigate}>Go to Contact</button> */}
    <Navbar title="Navbar Image" mode={mode} toggleMode={toggleMode}/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='*' element={<Error/>} />
    </Routes>

    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
    <button onClick={()=>{navigate("/contact")}}>Go to Contact</button>
    <button onClick={()=>{navigate(-1)}}>Go to Go Back</button>
      
    <Alert alert={alert}/>
    <div className="container">
    <TextForm showAlert={showAlert} heading="Enter the Text to Analyse" mode={mode}/>
    <About/> 
    </div>

    <h2>Register</h2>
    <input placeholder='email' onChange={(e)=>{setRegisterEmail(e.target.value)}}/>
    <input placeholder='password' onChange={(e)=>{setRegisterPassword(e.target.value)}}/>
    <button onClick={register}>SignUp</button>

    <h2>{auth.currentUser?.email}</h2>
    <input placeholder='email' onChange={(e)=>{setloginEmail(e.target.value)}}/>
    <input placeholder='password' onChange={(e)=>{setloginPassword(e.target.value)}}/>
    <button onClick={login}>Login</button>
    <button onClick={logOut}>LogOut</button>
    
    </>
  );
}

export default App;