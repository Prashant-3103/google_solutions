"use client"
import { firestore} from "@/lib/firebase";
import { collection, onSnapshot, query, doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {PanelTopOpen} from "lucide-react"
const PendingRequests = ({user}) => {
    const [loading, setLoading] = useState(false);
  const [community, setCommunity] = useState([]);
  const [users,setUsers] = useState([])
const [buttonMsg, setButtonMsg] = useState("Accept Request")
  useEffect(() => {
    setLoading(true);
    const communityQuery = query(collection(firestore, 'communities'));
    const unsubscribe = onSnapshot(communityQuery, (querySnapshot) => {
      const communities = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      const userCreatedCommunities = communities.filter((community)=>community.createdBy===user.id)

      setCommunity(userCreatedCommunities);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
useEffect(()=>{
  setLoading(true);
  const usersQuery = query(collection(firestore, 'users'));
  const unsubscribe = onSnapshot(usersQuery, (querySnapshot)=>{
    const fetchedUser = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    setUsers(fetchedUser)
    setLoading(false)

  })
  return unsubscribe;
},[])
console.log(users);
console.log(community);

const hasUserAcceptedCommunity = (userId,communityId) => {
  console.log("userID", userId,"communityId", communityId);
  // Check if the user ID exists in the users array of the community
  const communityObj = community.find((c) => c.id === communityId);
  return communityObj && communityObj.users.some((userObj) => userObj.id === userId && userObj.status==="accepted");
};

const handleAceeptRequest = async (userId,communityId) => {
  try {
    setLoading(true);

    // Check if the user has already sent a join request
    if (hasUserAcceptedCommunity(userId,communityId)) {
      toast.error("Already accepted request");
      setLoading(false);
      return;
    }

    const communityDocRef = doc(firestore, 'communities', communityId);
    const communityObj = community.find((c) => c.id === communityId);
    const existingUserIndex = communityObj.users.findIndex((userObj) => userObj.id === userId && userObj.status === "pending");

    if (existingUserIndex !== -1) {
      // Update the user's status from pending to accepted
      communityObj.users[existingUserIndex].status = "accepted";

      // Update the community document
      await updateDoc(communityDocRef, {
        users: communityObj.users,
      });

// Update the user document
const userDocRef = doc(firestore, 'users', userId);
const userCommunities = users.find((u) => u.id === userId).community;
const existingCommunityIndex = userCommunities.findIndex((comm) => comm.id === communityId && comm.status === "pending");

if (existingCommunityIndex !== -1) {
  // Update the community status from pending to accepted in the user document
  userCommunities[existingCommunityIndex].status = "accepted";

  await updateDoc(userDocRef, {
    community: userCommunities,
  });
}


      toast.success("Request accepted successfully");
    } else {
      toast.error("User not found with pending status");
    }

    setLoading(false);
  } catch (error) {

    console.log("anshum",users);

    setLoading(false);
    console.error('Error joining community:', error.message);
    toast.error(error.message);
  }
};

  return (
<div className="collapse bg-base-200 ">
  <input type="checkbox" />
  <div className="collapse-title  text-xl font-medium sm:text-base sm:font-roboto sm:font-semibold flex justify-center items-center lg:items-start">
  <button className="border-2  mt-5 lg:mt-9 border-blue-500 text-[1.5rem] lg:text-zinc-500 px-6 py-2 rounded-full text-full-500 font-semibold bg-sky-100/50 hover:bg-dark-pinkHard hover:text-white transition-all duration-300  lg:mb-8" onClick={()=>document.getElementById('my_modal_2').showModal()} >Pending Requests</button>
  </div>
  <div className="collapse-content  flex justify-center items-center ">
  <div className="overflow-x-auto ">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Index</th>
        <th>Name</th>
        <th>Users</th>

      </tr>
    </thead>
    <tbody>
     {community.map((communitiesData,index)=>{
        return(
            <tr key={communitiesData.id}>
<th>{index+1}</th>
<th>{communitiesData.name}</th>
<h1>{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="inline-flex items-center justify-center whitespace-nowrap  text-sm font-medium ring-offset-background text-primary underline-offset-4 hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3" onClick={()=>document.getElementById(`my_modal_${communitiesData.id}`).showModal()}><PanelTopOpen /></button>
<dialog id={`my_modal_${communitiesData.id}`} className="modal">
  <div className="modal-box bg-slate-100">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action flex-col p-4 mr-8 items-center">
      <form method="dialog">
{communitiesData.users.map((user,index)=>{
  console.log("user",index,user.id);
    return(

  ( <div key={user.id} className="text-center">
    {user.status!=="admin" &&
  <table className="table mx-auto max-w-md">

    <tbody>
    <tr className="bg-base-200">
        <td>{user.name}</td>
        <td><button className="border-2 mt-5 lg:mt-9 border-blue-500 px-6 py-2 rounded-full text-full-500 font-semibold bg-sky-100/50 hover:bg-dark-pinkHard hover:text-white transition-all duration-300  " onClick={() => handleAceeptRequest(user.id,communitiesData.id)}>accept</button></td>
      </tr>
    </tbody>

</table>
    //  <h1>{user.name} <span>{user.status==="pending" ? "Accept Request" : "Already in the group"}</span></h1>
}

   </div>)


    )
})}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog></h1>
            </tr>
        )
     })}

    </tbody>
  </table>
</div>
  </div>
</div>
  )
}

export default PendingRequests
