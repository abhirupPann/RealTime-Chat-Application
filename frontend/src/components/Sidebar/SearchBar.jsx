import React from 'react'
import useGetConversations from '../../hooks/useGetConversations';
import { useState } from 'react';
import { selectedConvoState } from '../../recoil/useConversation';
import { useSetRecoilState } from 'recoil';
import toast from 'react-hot-toast';

function SearchBar() {
  const [search, setSearch] = useState("");
	const  setSelectedConversation  = useSetRecoilState(selectedConvoState);
	const { conversations } = useGetConversations();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
	};
  return (
    <form className=' mb-5' onSubmit={(e)=>{handleSubmit(e)}}>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search" value={search}
				onChange={(e) => setSearch(e.target.value)}/>
        <button type='submit'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg></button>
      </label>
    </form>
  )
}

export default SearchBar
