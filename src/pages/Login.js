import React, { useState, useEffect } from "react";
import { firestore } from "../contexts/FirebaseContext";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  onSnapshot,
} from "firebase/firestore";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function Login() {
  const [users, setUsers] = useState(null);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const [userName, setUserName] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  //   READ
  useEffect(() => {
    // Fetch / Reading data from the database
    const q = query(collection(firestore, "Users"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setUsers(
        querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
      setVisible(true);
    });

    return () => unsubscribe;
  }, []);
  console.log(users);

  //   CREATE
  const addUser = async () => {
    let data = {
      count: users.length + 1,
      first_name: fname,
      last_name: lname,
      password: password,
      contact: contact,
      email: email,
      user_name: userName,
    };

    if (
      fname !== "" &&
      lname !== "" &&
      password !== "" &&
      contact !== "" &&
      email !== "" &&
      userName !== ""
    ) {
      await addDoc(collection(firestore, "Users"), data).then(() => {
        alert("User Login successfully!");
        cookies.set("user", true, { path: "/landing" });
        // return {
        setFname("");
        setLname("");
        setPassword("");
        setContact("");
        setEmail("");
        setUserName("");
        // };
      });
    } else {
      alert("Field is empty!");
    }
  };

  //   UPDATE
  //   const updateUser = async (id) => {
  //     let userDoc = doc(firestore, "Users", id);
  //     let newFields = { name: newName };

  //     if (newName !== "") {
  //       await updateDoc(userDoc, newFields).then(() => {
  //         alert("User updated successfully");
  //         return setNewName("");
  //       });
  //     } else {
  //       alert("Field is empty!");
  //     }
  //   };

  //   DELETE
  const deleteUser = async (id) => {
    let userDoc = doc(firestore, "Users", id);

    await deleteDoc(userDoc).then(() => {
      alert("User deleted successfully");
    });
  };

  console.log(users);

  return (
    <div className="bg-white h-[1000px] pt-[200px]">
      <main className="py-16 container mx-auto px-6 md:px-0 ">
        <section className="flex flex-col justify-center align-middle">
          <div className="bg-gray-200 opacity-[0.6] space-y-[10px] p-[20px] self-center mt-[10px] justify-evenly w-[400px] h-[630px] pt-[10px] flex flex-col">
            {/* userName */}
            {register ? (
              <input
                value={userName}
                type="text"
                placeholder="User Name"
                onChange={(e) => setUserName(e.target.value)}
                className="p-[6px] rounded-lg text-black"
              />
            ) : (
              ""
            )}
            {/* firstName */}
            {register ? (
              <input
                value={fname}
                type="text"
                placeholder="First Name"
                onChange={(e) => setFname(e.target.value)}
                className="p-[6px] rounded-lg text-black"
              />
            ) : (
              ""
            )}
            {/* lastName */}
            {register ? (
              <input
                value={lname}
                type="text"
                placeholder="Last Name"
                onChange={(e) => setLname(e.target.value)}
                className="p-[6px] rounded-lg text-black"
              />
            ) : (
              ""
            )}
            {register ? (
              <input
                // contact number
                value={contact}
                type="text"
                placeholder="Contact Number"
                onChange={(e) => setContact(e.target.value)}
                className="p-[6px] rounded-lg text-black"
              />
            ) : (
              ""
            )}
            {/* email */}
            <input
              value={email}
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="p-[6px] rounded-lg text-black"
            />
            {/* password */}
            <input
              value={password}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="p-[6px] rounded-lg text-black"
            />
            {register ? (
              <button
                type="button"
                className="bg-[#5DCFFF] p-[6px] rounded-lg text-white"
                onClick={addUser}
              >
                Register
              </button>
            ) : (
              <button
                type="button"
                className="bg-[#5DCFFF] p-[6px] rounded-lg text-white"
                onClick={addUser}
              >
                Login
              </button>
            )}
            {register ? (
              <button
                type="button"
                className="bg-[#5DCFFF] p-[6px] rounded-lg text-white"
                onClick={setRegister(!register)}
              >
                Signin
              </button>
            ) : (
              <button
                type="button"
                className="bg-[#5DCFFF] p-[6px] rounded-lg text-white"
                onClick={setRegister(!register)}
              >
                Signup
              </button>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Login;
