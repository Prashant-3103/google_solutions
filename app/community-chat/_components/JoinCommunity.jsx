"use client"
import { firestore } from "@/lib/firebase";
import { collection, onSnapshot, query, doc, updateDoc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const JoinCommunity = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [community, setCommunity] = useState([]);
const [buttonMsg, setButtonMsg] = useState("Send Join Request")
  useEffect(() => {
    setLoading(true);
    const communityQuery = query(collection(firestore, 'communities'));
    const unsubscribe = onSnapshot(communityQuery, (querySnapshot) => {
      const communities = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setCommunity(communities);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const hasUserJoinedCommunity = (communityId) => {
    // Check if the user ID exists in the users array of the community
    const communityObj = community.find((c) => c.id === communityId);
    return communityObj && communityObj.users.some((userObj) => userObj.id === user.id);
  };

  const handleJoinCommunity = async (communityId) => {
    try {
      setLoading(true);

      // Check if the user has already sent a join request
      if (hasUserJoinedCommunity(communityId)) {
        setButtonMsg((prevMsgs) => ({ ...prevMsgs, [communityId]: "Already sent" }));
        toast.error("Already sent join request");
        setLoading(false);
        return;
      }

      const communityDocRef = doc(firestore, 'communities', communityId);
      const userObject = { id: user.id, status: 'pending', name: user.name };

      // Update the community by adding the user to the users array with pending status
      await updateDoc(communityDocRef, {
        users: [...community.find((c) => c.id === communityId).users, userObject],
      });

      // Fetch the latest user document to get the current community array
      const updatedUserDoc = await getDoc(doc(firestore, 'users', user.id));
      const updatedUser = updatedUserDoc.data();

      // Check if the communityId is already in the user's community array
      const isCommunityAlreadyAdded = updatedUser.community.some((c) => c.id === communityId);

      if (!isCommunityAlreadyAdded) {
        // Update the user document with the new communityId and status as pending
        await updateDoc(doc(firestore, 'users', user.id), {
          community: [...updatedUser.community, { id: communityId, status: 'pending' }],
        });
      }
      


      toast.success("Request sent successfully");
      setButtonMsg((prevMsgs) => ({ ...prevMsgs, [communityId]: "Request sent" }));
      setLoading(false);
    } catch (error) {
      setButtonMsg((prevMsgs) => ({ ...prevMsgs, [communityId]: "Request failed" }));
      setLoading(false);
      console.error('Error joining community:', error.message);
      toast.error(error.message);
    }
  };

  if (user?.userType === 'user') {
    return (
      <>
<div className='mx-auto lg:-mt-[65px] max-w-6xl  px-6 lg:px-8'>
      <div className='mt-16 flow-root sm:mt-24'>
        <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
        <div className='flex h-screen flex-col'>
<div className='flex-1 overflow-y-auto p-10'>

            <h1 className='font-roboto text-3xl  font-bold text-dark-soft lg:text-7xl  lg:justify-center lg:items-center xl:text-5xl  md:text-5xl lg:text-center lg:max-w-[540px] '>
           Create <span className='text-dark-spansoft italic font-cursive'> C</span>ommunities
           </h1>
           <div className="mockup-browser mt-6  border border-gray-400 bg-base-300">
  <div className="mockup-browser-toolbar ">
    <div className="input"><span className="text-dark-spansoft text-opacity-80 text-lg font-medium">Create a community, a safe place..</span></div>
  </div>
  <div className="flex justify-center px-4 py-16 bg-base-200">{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn border-2 mt-5 lg:mt-9 border-zinc-300/30 text-[1.5rem] lg:text-zinc-500 px-6 py-2 rounded-full text-full-500 font-semibold bg-gray-300/40 hover:bg-dark-pinkHard/90 hover:text-white transition-all duration-300 lg:h-[60px] lg:w-[60%] lg:mb-8 " onClick={()=>document.getElementById('my_modal_1').showModal()}>Join Communities</button>
<dialog id="my_modal_1" className="modal text-red-50">
  <div className="modal-box bg-gray-500/90">
    <h3 className="font-bold text-lg text-black">Hello!</h3>
    <p className="py-4 text-black/80">Press ESC key or click the button below to close</p>
    <div className="flex justify-center px-4 py-16 bg-base-200">

<div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th className="mr-16"></th>
        <th>Name</th>
        <th>Join</th>

      </tr>
    </thead>
    <tbody>
      {/* row 3 */}
        {!loading &&
  community.map((communityList,index) => {
    return(
     <>
 <th className="text-black">{index+1}</th>
 <tr className="text-black" key={communityList.id}>
      <td className="text-black">{communityList.name}</td>
      <td><button className='border-2 mt-5 lg:mt-0 border-blue-500 text-black px-6 py-2 rounded-full text-full-500 font-extrabold hover:bg-dark-spansoft hover:text-white transition-all duration-300' onClick={() => handleJoinCommunity(communityList.id)}>{buttonMsg[communityList.id] || "Send Join Request"}</button></td>
    </tr>

     </>

    )
  })}


    </tbody>
  </table>
</div>

    </div>
    <div className="modal-action">

<button type="btn" className="btn bg-dark-hard/70 hover:bg-dark-light text-dark-spansoft"  onClick={ () => { document.getElementById('my_modal_1').close() }}>
    {loading  ? "Closing": "Close"}
  </button>
    </div>
  </div>
</dialog></div>
</div>

{/*  */}
</div>
    </div>
        </div>
      </div>
    </div>

      </>
    );
  }
};

export default JoinCommunity;

{/* <div>Join community</div>
 {!loading &&
  community.map((communityList) => (
    <div key={communityList.id}>
      <h1>{communityList.name}</h1>
      <button onClick={() => handleJoinCommunity(communityList.id)}>Join Community</button>
    </div>
  ))}
 */}
